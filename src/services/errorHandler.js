import lodashGet from 'lodash/get'
import lodashIsPlainObject from 'lodash/isPlainObject'

const DEFAULT_ERROR = 'Sorry, something went wrong. Please try again.'

export function handleApiError (error) {
  let errors = lodashGet(error, 'response.data.errors')

  if (!lodashIsPlainObject(errors)) {
    errors = { default: [DEFAULT_ERROR] }
  }

  for (const field of Object.keys(errors)) {
    for (const errorString of errors[field]) {
      console.log({ field, errorString })
    }
  }

  return errors
}
