import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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

  body {
    background: ${props => props.theme.colors.background};
  }
`;
