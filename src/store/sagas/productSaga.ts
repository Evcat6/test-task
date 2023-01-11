import { put, call, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';
import { ProductsActionTypes, SagaSelectType } from '../../types/products'

export const getState = (state: SagaSelectType): number => state.products.page;
const fetcher = (page: number) => axios.get(`${import.meta.env.VITE_API_REST_KEY}?per_page=5&page=${page}`)

function* productsWorker () {
    try {
        let page: number = yield select(getState);
        const { data } = yield call(() => fetcher(page));
        yield put({type: ProductsActionTypes.FETCH_PRODUCTS, payload: data.data});
        yield put({type: ProductsActionTypes.SET_TOTAL_PAGE_STATE, payload: data.total_pages});
    }catch (err: any) {
        yield put({type: ProductsActionTypes.FETCH_PRODUCTS_ERROR, payload: err.message});
    }
}


export default function* productsWatcher () {
    yield takeEvery(ProductsActionTypes.FETCH_ASYNC_PRODUCTS, productsWorker);
}