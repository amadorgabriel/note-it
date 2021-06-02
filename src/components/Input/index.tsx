import { InputStyled } from './styles'

interface InputProps {
  placeholder: string
}

export const Input = ({...rest}) => {
  return (
    <InputStyled {...rest} /> 
  )
}