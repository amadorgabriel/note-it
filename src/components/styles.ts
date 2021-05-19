import styled from "styled-components";

export const ScrollabeCalendar = styled.article`
  background: ${props => props.theme.colors.background.secondary};

  padding: 0rem 4rem;
  width: 26.5rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;

    list-style: none;
    text-transform: uppercase;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.tipografy.title.primary};
    transition: 0.6s ease;
  }

  li > p {
    font-size: 6rem;
    padding-right: 30px;
    opacity: 0.2;
    transition: 0.6s ease;
  }

  li > p:hover{
    opacity: 0.4;
    transition: 0.6s ease;
  }

  li > p.active {
    opacity: 1;
    transition: 0.6s ease;
  }

  li > p.active:hover {
    opacity: 1;
    transition: 0.6s ease;
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
    /* filter: brightness(0.2); */
    transition: 0.6s ease;
  }
`;
