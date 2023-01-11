import { FC } from 'react';
import { ProductItemProps } from '../../interfaces/ProductItem';
import styles from './ProductItem.module.scss';
import { ProductItemContainer } from '../Styled/ProductItemContainer';

const ProductItem: FC<ProductItemProps> = ({name, year, color, id, onClick}) => {

    return (
        <ProductItemContainer color={color} onClick={onClick} >
            <p className={styles.item}>id: {id}</p>
            <p className={styles.item}>name: <span style={{color: `${color}`}} >{name}</span></p>
            <p className={styles.item}>year: {year}</p>
        </ProductItemContainer>
    )
}

export default ProductItem;