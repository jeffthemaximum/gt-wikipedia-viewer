import { all } from 'redux-saga/effects'

import wikipedia from './wikipedia'

export default function * root () {
  yield all([
    ...wikipedia.sagas.watchers
  ])
}
