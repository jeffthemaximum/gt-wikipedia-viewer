import lodashCloneDeep from 'lodash/cloneDeep'

import * as actionTypes from './actionTypes'

export default function wikipedia (state = { articles: [] }, action) {
  switch (action.type) {
    case actionTypes.GET_PAGEVIEWS:
      state = lodashCloneDeep(state)

      return {
        ...state,
        articles: [],
        error: false,
        loading: true,
        success: false
      }
    case actionTypes.GET_PAGEVIEWS_ERROR:
      state = lodashCloneDeep(state)

      return {
        ...state,
        articles: [],
        error: true,
        loading: false,
        success: false
      }
    case actionTypes.GET_PAGEVIEWS_SUCCESS:
      state = lodashCloneDeep(state)

      return {
        ...state,
        articles: action.articles,
        error: false,
        loading: false,
        success: true
      }
    default:
      return state
  }
}
