import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body{
    font-family: 'Lato', sans-serif;
    background: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.tipografy.text.primary}
  }

  a {
    text-decoration: none;
    font-family: 'Lato', sans-serif;
  }

  ul {
    list-style-type: none;
  }

  ::selection {
    background: ${props => props.theme.colors.tipografy.title.primary};
    color: #FFF;
  }

  @media (max-width: 1080px){
    html{
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 87.5%; //14px
    }
  }

  .main-container{
    width: 100%;
    height: 100vh;
  }

  .main-content{
    width: 100%;
    height: calc(100% - 120px);

    padding: 0 0 0 6rem;
  }

  /* ------- UTILS ------- */

  .flex{
    display: flex
  }

  .hidden{
    display: none;
  }

`;
