import styled from 'styled-components'

export const InputStyled:any = styled.div`
  display: flex;
  width: 450px;
  border-bottom: 1px solid ${({theme}) => theme.colors.primary};
  
  button{
    border: 0;
    background: transparent;

    cursor: pointer;
  }
`;

InputStyled.Input = styled.input`
  width: 100%;
  padding: 0.35rem 0;
  outline: 0;

  border: 0;
  background-color: transparent;

  font-family: 'Gelasio';
  font-size: 1rem;
  font-style: italic;
  color:  ${({theme}) => theme.colors.tipografy.text.primary};
`