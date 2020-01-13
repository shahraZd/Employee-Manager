/**
 *
 * UnavailableData
 *
 */
// @eslint
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Icon, Button } from 'antd'
import { FormattedMessage } from 'react-intl'
import { renderErrorMessage } from './helper'
import messages from './messages'

import './unavailable-data.scss'

function UnavailableData({ iconType, message }) {
  return (
    <div
      className="unavailable-data global-flex-vertical-horizontal-center "
      data-test-id="unreachable-service"
    >
      <Row className="tracks-failure-message ">
        <Col
          className=" unavailable-data-icon "
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          <Icon type={iconType} />
        </Col>
        <Col
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className="unavailable-data-message"
        >
          {renderErrorMessage(message)}
        </Col>
        <Col
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className="global-flex-vertical-horizontal-center"
        >
          <Button className="unavailable-data-btn">
            <Link to="/">
              <FormattedMessage {...messages.backDashboard} />
            </Link>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

UnavailableData.propTypes = {}

UnavailableData.defaultProps = {
  iconType: 'info-circle',
  message: <FormattedMessage {...messages.trackFailureMessage} />,
}
export default memo(UnavailableData)
