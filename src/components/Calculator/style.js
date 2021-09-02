import styled from "styled-components";

export const CalculatorStyled = styled.div`
  margin: 0 auto;
  width: 280px;
  height: 408px;
  background-color: black;
  border-radius: 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    color: snow;
  }
`;

export const ScreenStyled = styled.div`
  width: 248px;
  height: 72px;
  background-color: lightgrey;
  margin-top: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 95%;
    height: 90%;
    text-align: right;
    font-size: 2rem;
    font-family: "Orbitron", sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const NumPadStyled = styled.div`
  margin-top: 8px;
  width: 248px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);

  button {
    height: 48px;
    border-radius: 2px;
    background-color: #252933;
    border: none;
    color: snow;
    font-weight: bold;
    margin: 4px;
    font-size: 1rem;
    outline: nonea;
  }

  .button_clear {
    grid-column: 1/3;
    grid-row: 1;
  }

  .button_equal {
    grid-column: 3/5;
    grid-row: 5;
  }

  .button_operator,
  .button_number {
    /* width: 58px; */
  }

  .highlight {
    background-color: purple;
  }
`;
