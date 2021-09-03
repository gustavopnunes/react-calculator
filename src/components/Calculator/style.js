import styled from "styled-components";

export const CalculatorStyled = styled.div`
  margin: 0 auto;
  width: 288px;
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
  width: 256px;
  height: 72px;
  background-color: lightgrey;
  margin-top: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  input {
    width: 95%;
    height: 40%;
    text-align: right;
    font-size: 1.5rem;
    font-family: "Orbitron", sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .input_queue {
    font-size: 0.8rem;
  }
`;

export const NumPadStyled = styled.div`
  margin-top: 8px;
  width: 256px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
`;
