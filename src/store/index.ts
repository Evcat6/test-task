import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootWatcher from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);