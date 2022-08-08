import { call, put, takeLatest } from 'redux-saga/effects'
import lodashGet from 'lodash/get'

import * as wikipediaActionTypes from './actionTypes'
import * as wikipediaApi from './api'
import * as wikipediaSerializers from './serializers'

function * getPageviews (action) {
  const { country, day, month, year } = action

  const response = yield call(wikipediaApi.getPageviews, {
    country,
    day,
    month,
    year
  })

  const { data, error } = response

  if (error) {
    yield put({ type: wikipediaActionTypes.GET_PAGEVIEWS_ERROR, error })
  } else {
    const articles = lodashGet(data, 'items[0].articles')
      .filter(wikipediaSerializers.filterArticle)
      .map(wikipediaSerializers.deserializeArticle)
      .sort((a, b) => a.rank > b.rank)
    yield put({ type: wikipediaActionTypes.GET_PAGEVIEWS_SUCCESS, articles })
  }
}

const watchers = [
  takeLatest(wikipediaActionTypes.GET_PAGEVIEWS, getPageviews)
]

export { getPageviews, watchers }
