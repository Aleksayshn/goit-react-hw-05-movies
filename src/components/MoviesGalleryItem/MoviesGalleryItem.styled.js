import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: #000;
  border-radius: 3px;
  margin-left: 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus-visible {
    color: #5FD16C;
  }
`;
