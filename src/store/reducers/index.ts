import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { inputReducer } from './inputReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    input: inputReducer,
    modal: modalReducer
});


export type RootState = ReturnType<typeof rootReducer>;