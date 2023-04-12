import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --white: #ffffff;
  --black: #000000;
  --platinum: #e6e6e6;
  --eerie-black: #1c1c1c;
  --dim-gray: #626166;
  --gold: #ffd600;
  --satin-sheen-gold: #baab5f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cormorant', serif;
    scroll-behavior: smooth;
  }

  html {
    font-size: 16px;
  }

  body {
    font-weight: 500;
    min-height: 100vh;
    background-color: var(--white);
    color: var(--white);
  }

  a {
    color: var(--white);
    text-decoration: none;
  }

  button, input {
    border: none;
    background-color: unset;
    outline: none;
  }

  a, button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  img {
    pointer-events: none;
  }
`;

export default GlobalStyle;
