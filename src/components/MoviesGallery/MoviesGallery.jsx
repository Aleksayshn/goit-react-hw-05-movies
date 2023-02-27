import PropTypes from 'prop-types';
import { MoviesGalleryItem } from 'components';

export const MoviesGallery = ({ movies, path }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MoviesGalleryItem key={id} id={id} title={title} path={path} />
      ))}
    </ul>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  path: PropTypes.string.isRequired,
};
