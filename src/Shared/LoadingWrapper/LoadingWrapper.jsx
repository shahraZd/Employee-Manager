/**
 *
 * LoadingWrapper
 *
 */

import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Skeleton, message } from 'antd'
import { isEmpty } from 'lodash'
import UnavailableData from '../UnavailableData'
import { renderArrayErrors } from '../utils/errors.helper'
import './loading-wrapper.scss'

function LoadingWrapper({
  children,
  className,
  errorTypeGet,
  errorTypePost,
  skeletonConfig,
  errorIconType,
  renderErrorUi,
  displayAlert,
}) {
  const alert = body => {
    message.error(body)
  }
  const renderGetErrors = () => {
    if (!isEmpty(errorTypeGet)) {
      const errorUi = renderErrorUi || (
        <UnavailableData message={errorTypeGet} iconType={errorIconType} />
      )
      return (
        <div className="unavailableData-holder global-flex-vertical-horizontal-center">
          {errorUi}
        </div>
      )
    }
    return children
  }

  const renderPostErrorsMessage = () => {
    if (!isEmpty(errorTypePost)) {
      return (
        <div className={`x-error-message ${className}`}>
          {renderArrayErrors(errorTypePost)}
        </div>
      )
    }
    return <Fragment />
  }
  const errorBody = () => {
    if (!isEmpty(errorTypeGet)) {
      return errorTypeGet
    }
    if (!isEmpty(errorTypePost)) {
      return errorTypePost
    }
    return []
  }

  if (displayAlert) {
    const body = errorBody()
    if (!isEmpty(body)) {
      alert(body)
    }

    return children
  }
  return (
    <Fragment>
      <Skeleton {...skeletonConfig}>{renderGetErrors()}</Skeleton>
      {renderPostErrorsMessage()}
    </Fragment>
  )
}

LoadingWrapper.propTypes = {
  renderErrorUi: PropTypes.any,
  children: PropTypes.node,
  errorTypeGet: PropTypes.any,
  errorTypePost: PropTypes.any,
  skeletonConfig: PropTypes.object,
  errorIconType: PropTypes.string,
  displayAlert: PropTypes.bool,
  className: PropTypes.string,
}
LoadingWrapper.defaultProps = {
  skeletonConfig: { loading: false },
  errorTypeGet: [],
  errorTypePost: [],
  displayAlert: false,
  children: <Fragment />,
  className: '',
}

export default memo(LoadingWrapper)
