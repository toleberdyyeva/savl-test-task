import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: #001636;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
