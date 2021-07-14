import { InputStyled } from './styles'

interface InputProps {
  placeholder: string
}

export const Input = ({...rest}) => {
  return (
    <InputStyled>
      <InputStyled.Input {...rest} /> 
      <button type="submit">
        <img src="/icons/locationArrow.svg" alt="Location Arrow Icon" />
      </button>
    </InputStyled>
  )
}