import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../ducks/sagas'
import reducers from '../ducks/reducers'

// REDUX-SAGA
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

const Redux = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default Redux
