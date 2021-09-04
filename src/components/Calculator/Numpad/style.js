import styled from "styled-components";

const NumpadStyled = styled.div`
  margin-top: 8px;
  width: 256px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);

  button {
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
  }
`;

export default NumpadStyled;
