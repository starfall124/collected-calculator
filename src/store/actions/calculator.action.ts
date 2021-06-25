import * as actions from '../types/calculator.type'
import { ISetOperand } from '../../types/calculator'

export const setOperand = (data: ISetOperand) => ({
  type: actions.SET_OPERAND,
  payload: data,
})

export const addOperand = () => ({
  type: actions.ADD_OPERAND,
})

export const clearOperand = () => ({
  type: actions.CLEAR_OPERAND,
})
