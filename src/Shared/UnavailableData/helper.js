import React, { Fragment } from 'react'
import { isString, isArray } from 'lodash'

export const renderErrorMessage = message => {
  if (isString(message)) {
    return message
  }
  if (isArray(message)) {
    return message.map(errorMessage => <div>{errorMessage}</div>)
  }
  if (typeof message === 'object') {
    return message
  }
  return <Fragment />
}
