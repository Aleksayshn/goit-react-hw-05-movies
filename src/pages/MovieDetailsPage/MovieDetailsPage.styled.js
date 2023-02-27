import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 40px;
  color: #ffffff;
  font-weight: 500;
  background-color: #54c29e;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #2f9e6d;
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
