import * as actionTypes from './actionTypes'

export function getPageviews ({ day, month, year }) {
  return {
    type: actionTypes.GET_PAGEVIEWS,
    day,
    month,
    year
  }
}
