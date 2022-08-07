import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import createSagaMiddleware from 'redux-saga'

import reducers from './ducks/reducers'
import rootSaga from './ducks/sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
