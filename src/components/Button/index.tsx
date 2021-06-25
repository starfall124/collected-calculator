import styled from 'styled-components'

interface IStyledButton {
  disabled: boolean
}
const StyledButton = styled.button<IStyledButton>`
  width: 4em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.disabled ? '#d3d3d3' : '#000000')};
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;

  &:hover {
    opacity: ${(props) => !props.disabled && 0.6};
  }
`

interface IButtonProps {
  text: string
  disabled: boolean
  onClickHandler: () => void
}
const Button: React.FC<IButtonProps> = ({ text, onClickHandler, disabled }) => {
  return (
    <StyledButton onClick={onClickHandler} disabled={disabled}>
      {text}
    </StyledButton>
  )
}

export default Button
