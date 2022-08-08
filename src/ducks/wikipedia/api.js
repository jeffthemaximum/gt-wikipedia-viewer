import axios from 'axios'

import { handleApiError } from '../../services/errorHandler'

export async function getPageviews ({ country, day, month, year }) {
  let url
  if (country) {
    url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${year}/${month}/${day}`
  } else {
    url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`
  }

  const requestConfig = {
    method: 'get',
    url
  }

  try {
    const response = await axios.request(requestConfig)
    return response
  } catch (e) {
    const errors = handleApiError(e)
    return { error: errors }
  }
}
