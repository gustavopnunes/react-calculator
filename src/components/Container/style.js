import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  outline: none;

  .instructions {
    width: 240px;
    margin: 4px auto;
    font-family: monospace;
    margin-top: 8px;
    text-align: center;

    span {
      font-weight: bold;
    }
  }
`;

export default ContainerStyled;
