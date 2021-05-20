import styled from "styled-components";

export const ScrollabeCalendar: any = styled.article`
  background: ${props => props.theme.colors.background.secondary};

  width: 34.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .pointer-container {
    width: 85px;
    height: 100%;
  }

  .pointer {
    content: "";
    width: 85px;
    height: 2px;
    padding-top: 2px;
    margin-top: calc((100vh / 29) * 4);

    display: block;    
    background-color: #AC3936;
    background-color: ${({theme}) => theme.colors.primary};
    opacity: 0.4;
  }

  .pointer:first-child {
    margin-top: calc((100vh / 29) * 1.8);
  }

  .pointer::before {
    content: "";
    width: 30px;
    height: 2px;
    margin-top: calc(100vh / -29); // -13px

    display: block;    
    background-color: ${({theme}) => theme.colors.primary};
  }

  .pointer span {
    content: "";
    width: 30px;
    height: 2px;
    margin-top: calc(190vh / 29); // 20px

    display: block;    
    background-color: ${({theme}) => theme.colors.primary};
  }

  .pointer::after {
    content: "";
    width: 30px;
    height: 2px;
    margin-top: calc(100vh / 29); // 10px

    display: block;    
    background-color: ${({theme}) => theme.colors.primary};
  }

  .principal{
    background-color: #AC3936;
    opacity: 1;
  }

  .principal::before, .principal span, .principal::after {
    opacity: 0.4;
  }

`;

ScrollabeCalendar.DayList = styled.ul`
  overflow-y: scroll;
  height: 100vh;
  padding: 0 3rem 0 2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;

    list-style: none;
    text-transform: uppercase;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.tipografy.title.primary};
    transition: 0.2s ease;
  }

  li > p {
    font-size: 7rem;
    padding-right: 20px;
    opacity: 0.2;
    transition: 0.2s ease;
  }

  li > p:hover {
    opacity: 0.4;
    transition: 0.2s ease;
  }

  li > p.active {
    opacity: 1;
    transition: 0.2s ease;
  }

  li > p.active:hover {
    opacity: 1;
    transition: 0.2s ease;
  }

  li span p:first-child {
    font-size: 1.75rem;
    font-weight: normal;
    opacity: 0.7;

    padding-bottom: 1px;
  }

  li span p:last-child {
    font-size: 1.125rem;
    opacity: 0.4;
  }

  li:hover {
    transition: 0.2s ease;
  }
`;
