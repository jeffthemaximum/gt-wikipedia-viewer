import * as actionTypes from './actionTypes'

export default function wikipedia (state = { articles: [] }, action) {
  switch (action.type) {
    case actionTypes.GET_PAGEVIEWS:
      return {
        ...state,
        error: false,
        loading: true
      }
    case actionTypes.GET_PAGEVIEWS_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case actionTypes.GET_PAGEVIEWS_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        error: false,
        loading: false
      }
    default:
      return state
  }
}