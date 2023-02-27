import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  padding: 8px 0;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #009688;


  :hover {
  color: #3CB371;
  }
`;
