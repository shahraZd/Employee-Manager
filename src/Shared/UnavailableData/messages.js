/*
 * UnavailableData Messages
 *
 * This contains all the text for the UnavailableData component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.UnavailableData'

export default defineMessages({
  trackFailureMessage: {
    id: `${scope}.trackFailureMessage`,
    defaultMessage: 'No data available for now',
  },
  backDashboard: {
    id: `${scope}.backDashboard`,
    defaultMessage: 'Back to Dashboard',
  },
})
