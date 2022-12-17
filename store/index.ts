import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import {fork, all} from "@redux-saga/core/effects";

import * as rootReducer from './rootReducer';
import * as rootSaga from './rootSaga';

const reducer = combineReducers(rootReducer)
function* saga() {
    yield all(
        Object.entries(rootSaga).map(([_key, watcher]) => {
            if (watcher) {
                return fork(watcher);
            }
        })
    );
}

export const makeStore = () => {
    // 1: Creating the middleware
    const sagaMiddleware = createSagaMiddleware();

    // 2: Collection configureStore config options and middlewares
    const middleware:any = [sagaMiddleware]
    const storeConfig: any = {
        reducer,
        middleware
    }

    const store: any = configureStore(storeConfig);

    // 3: Run your sagas on server
    store.sagaTask = sagaMiddleware.run(saga);

    // 4: now return the store
    return store;
};

export const StoreWrapper = createWrapper(makeStore);