    import { createStore as createReduxStore, applyMiddleware, compose, combineReducers } from 'redux'
    import { connectRouter } from 'connected-react-router'
    import { routerMiddleware } from '@vslutov/router-middleware'
    import { batch, batching } from 'redux-batch-middleware'

    createRootReducer = (history) => batching combineReducers
      router: connectRouter history

    composeEnhancers = (window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

    export createStore = ({ history, preloadedState }) =>
      reduxMiddlewares = composeEnhancers(
        applyMiddleware batch, routerMiddleware(history)
      )

      rootReducer = createRootReducer history

      result = (if preloadedState?
      then createReduxStore(rootReducer, preloadedState, reduxMiddlewares)
      else createReduxStore(rootReducer, reduxMiddlewares)
      )

      return result
