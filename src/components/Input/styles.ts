import styled from 'styled-components'

export const InputStyled = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  padding: 1rem;
`;