import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './rootReducer'
import rootSaga from './rootSaga'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  
  const store = createStore(
    createRootReducer(),
    {},
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware
      )
    )
  )
  
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
