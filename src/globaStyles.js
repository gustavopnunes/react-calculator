import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        align-items: center;
        background-color: blanchedalmond;
        overflow: hidden;
        text-align: center;
    }

    h1 {
        margin: 4px 0 8px 0;
        font-size: 30px;
        text-transform: uppercase;
        font-family: monospace;
    }

    p {
        margin: 2px;
        font-family: monospace;
        font-size: 0.7rem;
    }

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

export default GlobalStyle;
