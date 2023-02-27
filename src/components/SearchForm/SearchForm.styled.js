import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: 16px;
  padding: 12px 24px;
  color: #fff;
  background-color: #2c302b;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #e6ffe6;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  color: #2c302b;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  &:hover,
  :focus {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
  color: #2c302b;
`;