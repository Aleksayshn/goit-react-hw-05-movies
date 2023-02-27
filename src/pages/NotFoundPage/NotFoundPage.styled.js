import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  min-height: 40px;
  color: #ffffff;
  font-weight: 500;
  background-color: #3CB371;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  :focus-visible:not(.active) {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;