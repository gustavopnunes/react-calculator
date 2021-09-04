import styled from "styled-components";

const DisplayStyled = styled.div`
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
    font-size: 1.4rem;
    font-family: "Orbitron", sans-serif;
    background-color: transparent;
    border: none;
    outline: none;

    &.input_queue {
      font-size: 0.8rem;
      letter-spacing: 2px;
    }
  }
`;

export default DisplayStyled;
