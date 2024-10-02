import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  h1, h2, h3 {
    color: #333;
  }
`;

export default GlobalStyles;
