import { call, put, takeLatest } from 'redux-saga/effects'
import lodashGet from 'lodash/get'

import * as wikipediaActionTypes from './actionTypes'
import * as wikipediaApi from './api'

function * getPageviews (action) {
  const { day, month, year } = action

  const response = yield call(wikipediaApi.getPageviews, {
    day,
    month,
    year
  })

  const { data, error } = response

  if (error) {
    yield put({ type: wikipediaActionTypes.GET_PAGEVIEWS_ERROR, error })
  } else {
    const articles = lodashGet(data, 'items[0].articles')
    yield put({ type: wikipediaActionTypes.GET_PAGEVIEWS_SUCCESS, articles })
  }
}

const watchers = [
  takeLatest(wikipediaActionTypes.GET_PAGEVIEWS, getPageviews)
]

export { watchers }
