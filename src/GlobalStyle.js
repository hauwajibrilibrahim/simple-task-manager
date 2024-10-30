import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
  }

  h1 {
    color: ${(props) => props.theme.primary};
  }
`;

export default GlobalStyle;
