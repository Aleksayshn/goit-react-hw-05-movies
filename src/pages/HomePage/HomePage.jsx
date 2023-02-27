import { useState, useEffect } from 'react';
import { routes } from 'utils/routes';
import { LoadButton, MoviesGallery, Loader, Container } from 'components';
import { getTrendingMovies, alertOnError } from 'services';
import { Title } from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const getMovies = async () => {
      try {
        setLoading(true);
        const { movies, totalPages, cancel } = await getTrendingMovies(
          page,
          controller.signal
        );
        if (cancel) return;
        setMovies(prevMovies => [...prevMovies, ...movies]);
        setTotalPages(totalPages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
    return () => controller.abort();
  }, [page]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  const onLoadMoreBtnClick = () => setPage(prevPage => prevPage + 1);

  return (
    <main>
      <Container>
        <Title>Trending today</Title>
        {loading && <Loader />}
        {!!movies.length && (
          <MoviesGallery movies={movies} path={routes.HOME_GALLERY} />
        )}
        {totalPages > 1 && <LoadButton onClick={onLoadMoreBtnClick} />}
      </Container>
    </main>
  );
}
