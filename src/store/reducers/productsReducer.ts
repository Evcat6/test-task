import { InitState, ProductsActionTypes, ProductsAction } from '../../types/products'

const initialState: InitState = {
    products: [],
    error: null,
    page: 1,
    totalPages: NaN,
}

export const productsReducer = (state = initialState, action: ProductsAction): InitState => {
    switch(action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS: 
            return {...state, products: action.payload}
        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            return {...state, error: action.payload, products: []}
        case ProductsActionTypes.UPDATE_PAGE_STATE:
            return {...state, page: action.payload}
        case ProductsActionTypes.SET_TOTAL_PAGE_STATE: {
            return {...state, totalPages: action.payload}
        }
        default: 
            return state
    }
}