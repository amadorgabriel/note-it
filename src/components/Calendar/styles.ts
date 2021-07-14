import styled from "styled-components";

export const ScrollabeCalendar: any = styled.div`
  height: 100vh;
  width: 550px; //34.5rem

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  vertical-align: middle;
  scroll-behavior: smooth;

  background: ${props => props.theme.colors.background.secondary};

  &::-webkit-scrollbar {
    display: none;
  }
`;

ScrollabeCalendar.DayList = styled.ul`
  height: 100%;

  li {
    scroll-snap-align: start;
    scroll-margin-top: -6px;

    display: flex;
    align-items: center;
    list-style: none;
  }

  .pointer {
    width: 85px;
    height: 100%;
    margin-right: 1.8rem;

    display: block;
  }

  .pointer > span {
    display: block;

    content: "";
    width: 30px;
    height: 2px;
    margin-top: 20px;

    opacity: 0.4;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .principal {
    width: 85px !important;
    height: 100%;

    display: block;
    background-color: white;
  }

  .pointer .active {
    background-color: #ac3936;
    opacity: 1;
  }

  .day-info {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.tipografy.title.primary};
    transition: 0.2s ease;
  }

  .day-info > p {
    font-size: 7rem;
    padding-right: 20px;
    opacity: 0.2;
    transition: 0.2s ease;
  }

  .day-info > p:hover {
    opacity: 0.4;
    transition: 0.2s ease;
  }

  .day-info > p.active {
    opacity: 1;
    transition: 0.2s ease;
  }

  .day-info > p.active:hover {
    opacity: 1;
    transition: 0.2s ease;
  }

  .day-info span {
    min-width: 113px;
  }

  .day-info span p:first-child {
    font-size: 1.75rem;
    font-weight: normal;
    opacity: 0.7;

    padding-bottom: 1px;
  }

  .day-info span p:last-child {
    font-size: 1.25rem;
    opacity: 0.4;
  }

  .day-info:hover {
    transition: 0.2s ease;
  }
`;

export const ScrollTopButton = styled.button`
  position: fixed;
  left: 360px;
  bottom: 20px;

  cursor: pointer;

  border-radius: 5px;
  padding: 15px;
  
  border: 0;
  
  &:hover {
    background-color: whitesmoke;

  }

`;
