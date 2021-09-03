import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 52px;
  border-radius: 2px;
  background-color: #252933;
  border: none;
  color: snow;
  font-weight: bold;
  margin: 4px;
  font-size: 1.4rem;
  outline: none;
  position: relative;
  font-family: monospace;

  &.button_clear {
    grid-column: 1/3;
    grid-row: 1;
  }

  &.button_equal {
    grid-column: 3/5;
    grid-row: 5;
  }

  &.highlight {
    background-color: purple;
  }
`;
