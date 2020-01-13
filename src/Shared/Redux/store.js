import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import empListReducer from './empList/reducer'
import rootSaga from "./empList/saga"


const sagaMiddleware = createSagaMiddleware()
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose

const store = createStore(
    empListReducer,
   
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )

  export default store
  sagaMiddleware.run(rootSaga)