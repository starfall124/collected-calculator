import * as actions from '../types/calculator.type'

const initialState = {
  input1Value: '',
  input2Value: '',
  calculatedValue: '',
}

const calculatorReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case actions.SET_OPERAND: {
      return {
        ...state,
        input1Value:
          action.payload.order === 'first'
            ? action.payload.value
            : state.input1Value,
        input2Value:
          action.payload.order === 'second'
            ? action.payload.value
            : state.input2Value,
      }
    }

    case actions.ADD_OPERAND: {
      if (state.input1Value !== '' && state.input2Value !== '')
        return {
          ...state,
          calculatedValue: +state.input1Value + +state.input2Value,
        }
      else return { ...state, calculatedValue: 0 }
    }

    case actions.CLEAR_OPERAND: {
      return {
        ...state,
        input1Value: '',
        input2Value: '',
        calculatedValue: '',
      }
    }

    default:
      return state
  }
}

export default calculatorReducer
