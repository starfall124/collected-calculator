import { useMemo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NumberInput, Operator, Button } from '../../components'
import { StyledCard } from './components/card.styled'
import {
  setOperand,
  addOperand,
  clearOperand,
} from '../../store/actions/calculator.action'
import { IState } from '../../types/state'

const Card = () => {
  const dispatch = useDispatch()
  const firstInput = useRef<HTMLInputElement>(null)
  const calculator = useSelector((state: IState) => state.calculator)

  const buttonDisabled = useMemo(() => {
    if (calculator.input1Value === '' && calculator.input2Value === '')
      return true
    return false
  }, [calculator.input1Value, calculator.input2Value])

  const handleChangeOperand = (
    order: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newOperand = e.target.value
    const checkedOperand = newOperand.replace(/[^\d]/g, '')

    if (checkedOperand) dispatch(setOperand({ order, value: +checkedOperand }))
    else dispatch(setOperand({ order, value: '' }))
  }
  const handleAddOperand = () => {
    dispatch(addOperand())
  }
  const handleClearOperand = () => {
    firstInput.current?.focus()
    dispatch(clearOperand())
  }

  return (
    <StyledCard>
      <div className="card__body">
        <NumberInput
          value={calculator.input1Value}
          handleChangeOperand={handleChangeOperand}
          order="first"
          firstInput={firstInput}
        />
        <Operator operator="+" />
        <NumberInput
          value={calculator.input2Value}
          handleChangeOperand={handleChangeOperand}
          order="second"
        />
        <Operator operator="=" />
        <NumberInput
          value={calculator.calculatedValue}
          handleChangeOperand={handleChangeOperand}
          disabled={true}
        />
      </div>
      <div className="card__buttons">
        <Button
          text="Clear"
          disabled={buttonDisabled}
          onClickHandler={handleClearOperand}
        />
        <Button
          text="Add"
          disabled={buttonDisabled}
          onClickHandler={handleAddOperand}
        />
      </div>
    </StyledCard>
  )
}

export default Card
