import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from './MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({ id, title, path }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`${path}${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

MoviesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
