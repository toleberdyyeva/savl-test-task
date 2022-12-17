import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  };
  
  body {
    margin: 0;
    padding: 0;
    background: #001636;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
