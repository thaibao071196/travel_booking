import { combineReducers } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { connectRouter } from 'connected-react-router';
import { configureStore } from '@reduxjs/toolkit';

import history from './history';

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const runSaga = sagaMiddleware.run;

  const injectEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga,
  });

  const store = configureStore({
    reducer: createReducer(),
    middleware: [sagaMiddleware],
    enhancers: [injectEnhancer],
  });

  store.injectedReducers = {};

  return store;
};
