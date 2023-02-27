import axios from 'axios';
import { getPosterUrl, getPhotoUrl, getAvatarUrl } from 'services';

const API_KEY = '85c2d675a099bd1d49c203042e1a4648';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async (page, signal) => {
  const params = {
    page,
  };

  try {
    const { data } = await axios.get('trending/movie/day', { params, signal });
    const movies = data.results;
    return { movies, totalPages: data.total_pages };
  } catch (error) {
    if (axios.isCancel(error)) return { cancel: true };
    throw new Error(error);
  }
};

export const getSearchedMovies = async (query, page, signal) => {
  const params = {
    query,
    page,
  };

  try {
    const { data } = await axios.get('search/movie', { params, signal });
    const movies = data.results;
    return { movies, totalResults: data.total_results };
  } catch (error) {
    if (axios.isCancel(error)) return { cancel: true };
    throw new Error(error);
  }
};

export const getMovieInfo = async id => {
  const { data } = await axios.get(`movie/${id}`);
  const { title, poster_path, release_date, vote_average, overview, genres } =
    data;
  return {
    title,
    poster_path: getPosterUrl(poster_path),
    release_date: new Date(release_date).getFullYear(),
    vote_average: Math.round(vote_average * 10),
    overview: getOverview(overview),
    genres: getGenres(genres),
  };
};

export const getMovieCast = async (id, signal) => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`, { signal });

    const castInfo = data.cast.map(({ id, name, character, profile_path }) => ({
      id,
      name,
      character,
      profile_path: getPhotoUrl(profile_path),
    }));
    return { castInfo };
  } catch (error) {
    if (axios.isCancel(error)) return { cancel: true };
    throw new Error(error);
  }
};

export const getMovieReviews = async (id, signal) => {
  try {
    const { data } = await axios.get(`movie/${id}/reviews`, { signal });
    const reviewsInfo = data.results.map(
      ({
        id,
        author,
        author_details: { avatar_path },
        content,
        created_at,
      }) => ({
        id,
        author,
        avatar_path: getAvatarUrl(avatar_path),
        content,
        created_at: new Date(created_at).toLocaleDateString(),
      })
    );
    return { reviewsInfo };
  } catch (error) {
    if (axios.isCancel(error)) return { cancel: true };
    throw new Error(error);
  }
};

const getGenres = genres => {
  if (genres.length === 0) return 'No genres';
  return genres.map(({ name }) => name).join(', ');
};

const getOverview = overview =>
  overview ? overview : 'No overview for this movie.';
