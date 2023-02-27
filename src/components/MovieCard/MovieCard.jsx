import PropTypes from 'prop-types';
import { Box } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;
  return (
    <Box>
      <img src={poster_path} alt={title} />
      <h2>
        {title} ({release_date})
      </h2>
      <p>User score: {vote_average}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres}</p>
    </Box>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  }).isRequired,
};
