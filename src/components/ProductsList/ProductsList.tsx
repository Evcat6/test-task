import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { ProductsActionTypes } from '../../types/products';
import { ModalActionTypes, ModalData } from '../../types/modal';
import { ProductItem, Paginator } from '..';
import styles from './Products.module.scss';

const ProductsList: FC = () => {
    const {products, error} = useTypedSelector(state => state.products);
    const [ productstoRender, setProductsToRender ] = useState<any[]>([]);
    const dispatch = useDispatch()
    const input = useTypedSelector(state => state.input.input);
    const showModal = (product: ModalData) => {
        dispatch({type: ModalActionTypes.UPDATE_MODAL_DATA, payload: product})
        dispatch({type: ModalActionTypes.UPDATE_MODAL_STATE})
    }
    const productFilter = () => {
        if(error !== null) {
            return alert('Some error occurred while fetching');
        }
        if(products.length === 0) {
            dispatch({type: ProductsActionTypes.FETCH_ASYNC_PRODUCTS});
        }
        setProductsToRender(products.filter(item => input? item.id === parseInt(input) : item));
    }
    useEffect(() => {
        productFilter();
    }, [input, products])
    return (
        <>
        <div className={styles.products_container} >
            {productstoRender.length !== 0 ? productstoRender.map((product) => (
            <ProductItem 
                key={product.id} 
                name={product.name}
                year={product.year} 
                color={product.color} 
                id={product.id}
                onClick={() => showModal(product)}
            />)): <h1>No products :((</h1>}
        </div>
        <div className={styles.paginator_container} >
            <Paginator/>
        </div>
        </>
    )
}

export default ProductsList;