import axios from 'axios'

import { handleApiError } from '../../services/errorHandler'

export async function getPageviews ({ day, month, year }) {
  const requestConfig = {
    method: 'get',
    url: `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`
  }

  try {
    const response = await axios.request(requestConfig)
    return response
  } catch (e) {
    const errors = handleApiError(e)
    return { error: errors }
  }
}
