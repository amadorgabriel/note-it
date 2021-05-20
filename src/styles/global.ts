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

  .main-content{
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .on-dev{
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: 3px solid ${props => props.theme.colors.tipografy.text.primary};
    border-style: dashed;
    border-radius: 4px;

    padding: 2rem 3rem;

    p{
      color: #646464;
     font-size: 1.25rem;
     font-weight: bold;
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
