import PropTypes from 'prop-types';
import { Button } from './LoadButton.styled';

export const LoadButton = ({ onClick }) => (
  <Button type="button" onClick={onClick}>
    Load more
  </Button>
);

LoadButton.propTypes = { onClick: PropTypes.func.isRequired };
