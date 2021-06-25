import { createStore } from 'redux'

import { rootReducer } from './reducers'

const configureStore = () => {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

export default configureStore
