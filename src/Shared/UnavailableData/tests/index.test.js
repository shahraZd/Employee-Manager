import React from 'react'
import { render } from 'react-testing-library'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { browserHistory, BrowserRouter } from 'react-router-dom'

import UnavailableDataIndex from '../index'
import UnavailableData from '../UnavailableData'
import { DEFAULT_LOCALE } from '../../../../i18n'
import configureStore from '../../../../configureStore'
import 'jest-prop-type-error'

const initialProps = {}

describe('<UnavailableDataIndex />', () => {
  let store
  beforeAll(() => {
    store = configureStore({}, browserHistory)
  })

  it('Expect to crash if propTypes failed', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <IntlProvider locale={DEFAULT_LOCALE}>
            <UnavailableDataIndex {...initialProps} />
          </IntlProvider>
        </BrowserRouter>
      </Provider>,
    )
  })

  it('Expect to not log in console', () => {
    const spy = jest.spyOn(global.console, 'log')
    render(
      <Provider store={store}>
        <BrowserRouter>
          <IntlProvider locale={DEFAULT_LOCALE}>
            <UnavailableDataIndex {...initialProps} />
          </IntlProvider>
        </BrowserRouter>
      </Provider>,
    )
    expect(spy).not.toHaveBeenCalled()
  })

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    render(
      <Provider store={store}>
        <BrowserRouter>
          <IntlProvider locale={DEFAULT_LOCALE}>
            <UnavailableDataIndex {...initialProps} />
          </IntlProvider>
        </BrowserRouter>
      </Provider>,
    )
    expect(spy).not.toHaveBeenCalled()
  })
})

describe('<UnavailableData/>', () => {
  let store
  beforeAll(() => {
    store = configureStore({}, browserHistory)
  })

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <BrowserRouter>
          <IntlProvider locale={DEFAULT_LOCALE}>
            <UnavailableData {...initialProps} />
          </IntlProvider>
        </BrowserRouter>
      </Provider>,
    )
    expect(firstChild).toMatchSnapshot()
  })
})
