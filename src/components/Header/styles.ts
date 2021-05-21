import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 6rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Gelasio", serif;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.tipografy.title.primary};

    h2{
      padding-left: 20px;
    }

    img{
      margin-bottom: 5px;
      
    }
  }

  ul{
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;

    li, a{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li:first-child{
      margin-right: 1rem;
    }

    li:hover{
      filter: brightness(0.9)
    }

    a{
      margin-right: 20px;
      color: ${({theme}) => theme.colors.tipografy.text.primary};
    }

    a.principal{
      color: ${({theme}) => theme.colors.tipografy.title.primary};
    }

    a .icon {
      margin: 4px 6px 0 0;
    }

    a:not(.principal){
      cursor: not-allowed;
    }
  }
`;
