import styled from 'styled-components'

const StyledOperator = styled.div`
  width: 3em;
  height: 3em;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IOperatorProps {
  operator: string
}
const Operator: React.FC<IOperatorProps> = ({ operator }) => {
  return <StyledOperator>{operator}</StyledOperator>
}

export default Operator
