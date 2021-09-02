import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        align-items: center;
        background-color: blanchedalmond;
        overflow: hidden;
        font-family: monospace;
        text-align: center;
    }

    h1 {
        text-transform: uppercase;
    }

    p {
        margin: 2px;
        font-family: monospace;
        font-size: 0.7rem;
    }

    .instructions {
        width: 240px;
        margin: 0 auto;
        font-family: monospace;
        margin-top: 8px;
        text-align: center;
    }
`;

export default GlobalStyle;
