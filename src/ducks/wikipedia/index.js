import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as api from './api'
import * as sagas from './sagas'
import * as selectors from './selectors'
import reducer from './reducer'

const duck = {
  actions,
  actionTypes,
  api,
  reducer,
  sagas,
  selectors
}

export default duck
