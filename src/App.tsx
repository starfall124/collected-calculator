import styled from 'styled-components'
import { Provider } from 'react-redux'

import { Card } from './containers'
import createStore from './store/store'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f1f0f0;
`
const store = createStore()

export const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Card />
      </AppWrapper>
    </Provider>
  )
}
