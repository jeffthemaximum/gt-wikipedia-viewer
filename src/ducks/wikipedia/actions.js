import * as actionTypes from './actionTypes'

export function getPageviews ({ country, day, month, year }) {
  return {
    type: actionTypes.GET_PAGEVIEWS,
    country,
    day,
    month,
    year
  }
}
