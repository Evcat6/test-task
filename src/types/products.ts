export enum ProductsActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    FETCH_ASYNC_PRODUCTS = "FETCH_ASYNC_PRODUCTS",
    UPDATE_PAGE_STATE = "UPDATE_PAGE_STATE",
    SET_TOTAL_PAGE_STATE = "SET_TOTAL_PAGE_STATE"
}


export interface InitState {
    products: any[];
    error: Error;
    page: number;
    totalPages: number;
}

interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS,
    payload: any[]
}

interface FetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
    payload: Error
}

interface UpdatePageStateAction {
    type: ProductsActionTypes.UPDATE_PAGE_STATE,
    payload: number
}

interface SetTotalPageState {
    type: ProductsActionTypes.SET_TOTAL_PAGE_STATE,
    payload: number
}

export type SagaSelectType = {products: InitState};
type Error = null | string | boolean;
export type ProductsAction = FetchProductsAction | FetchProductsErrorAction | UpdatePageStateAction | SetTotalPageState;