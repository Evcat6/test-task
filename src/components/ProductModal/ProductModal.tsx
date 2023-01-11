import { FC } from 'react';
import styles from './ProductModal.module.scss';
import { ProductModalItem } from '..';
import { useTypedSelector } from '../../hooks/index';

const ProductModal: FC = () => {

    const open = useTypedSelector(state => state.modal.modalState);

    return (
        <dialog
            className={styles.dialog}
            open={open}
        >
            <div className={styles.modal_container} >
                <ProductModalItem/>
            </div>
        </dialog>
    )
}

export default ProductModal;