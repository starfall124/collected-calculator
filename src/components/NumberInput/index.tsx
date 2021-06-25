import React from 'react'
import styled from 'styled-components'

const StyledNumberInput = styled.input`
  width: 6em;
  height: 6em;
  padding-left: 1em;
  padding-right: 1em;
  font-size: 1em;
  font-weight: bold;
  background-color: #f3f4f5;
  border-radius: 4px;
  border: none;
  outline: none;
  text-align: center;

  &:focus {
    border: 1px solid rgb(25, 145, 235);
  }
`

interface INumberInputProps {
  value: number | ''
  handleChangeOperand: (
    order: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  disabled?: boolean
  order?: string
  firstInput?: React.RefObject<HTMLInputElement>
}
const NumberInput: React.FC<INumberInputProps> = ({
  value,
  handleChangeOperand,
  disabled,
  order,
  firstInput,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    handleChangeOperand(order ?? '', e)
  }

  return (
    <StyledNumberInput
      ref={firstInput}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default NumberInput
