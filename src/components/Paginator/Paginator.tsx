import { FC } from 'react';
import styles from './Paginator.module.scss';
import { useTypedSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { ProductsActionTypes } from '../../types/products';
import { PaginatorButton } from '..';

const Paginator: FC = () => {

    const dispatch = useDispatch();
    const { page, totalPages } = useTypedSelector(state => state.products);

    const decrementPageDisabled = page === 1? true : false;
    const incrementPageDisabled = page === totalPages? true : false;

    const updateDecrement = () => {
        dispatch({type: ProductsActionTypes.UPDATE_PAGE_STATE, payload: page - 1 });
        dispatch({type: ProductsActionTypes.FETCH_ASYNC_PRODUCTS});
    }

    const updateIncrement = () => {
        dispatch({type: ProductsActionTypes.UPDATE_PAGE_STATE, payload: page + 1 });
        dispatch({type: ProductsActionTypes.FETCH_ASYNC_PRODUCTS});
    }
    
    return (
        <div className={styles.container} >
            <PaginatorButton disabled={decrementPageDisabled} onClick={updateDecrement} direction='left'/>
            <PaginatorButton disabled={incrementPageDisabled} onClick={updateIncrement} direction='right'/>
        </div>
    )
}

export default Paginator; 