import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body{
    font-family: 'Lato', sans-serif;
    /* font-family: 'Gelasio', serif; */
    background: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.tipografy.text.primary}
  }

  a {
    text-decoration: none;
    font-family: 'Lato', sans-serif;
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


  /* ------- UTILS ------- */
  
  .flex{
    display: flex
  }

  .hidden{
    display: none;
  }

`;
