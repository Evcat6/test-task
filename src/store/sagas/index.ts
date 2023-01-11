import { all } from 'redux-saga/effects';
import productsWorker from './productSaga';

export default function* rootWatcher() {
    yield all([productsWorker()]);
}