import { combineReducers } from 'redux'

import wikipedia from './wikipedia'

const { reducer: wikipediaReducer } = wikipedia

const reducers = combineReducers({
  wikipedia: wikipediaReducer
})

export default reducers
