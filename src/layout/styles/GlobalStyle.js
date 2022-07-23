import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    min-height: 100vh;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mt-40 {
    margin-top: 40px;
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .ml-10 {
    margin-left: 10px;
  }

  .mr-10 {
    margin-right: 10px;
  }
`;

export default GlobalStyle;
