import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fork, all } from "@redux-saga/core/effects";

import * as rootReducer from "./rootReducer";
import * as rootSaga from "./rootSaga";

export const makeStore = () => {
  // Collecting reducers
  const reducer = combineReducers(rootReducer);
  // Collecting sagas
  function* saga() {
    yield all(
      Object.entries(rootSaga).map(
        ([_key, watcher]) => watcher && fork(watcher)
      )
    );
  }

  // 1: Creating the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Collection configureStore config options and middlewares
  const middleware: any = [sagaMiddleware];
  const storeConfig: any = {
    reducer,
    middleware,
  };

  const store: any = configureStore(storeConfig);

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(saga);

  // 4: now return the store
  return store;
};

export const StoreWrapper = createWrapper(makeStore);
