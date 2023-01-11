import { FC } from 'react';
import styles from './ProductModalItem.module.scss';
import { useTypedSelector } from '../../hooks'
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { ModalActionTypes } from '../../types/modal';

const ProductModalItem: FC = () => {

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({type: ModalActionTypes.UPDATE_MODAL_STATE});
        dispatch({type: ModalActionTypes.CLEAR_MODAL_DATA});
    }
    const {id, name, year, color, pantone_value} = useTypedSelector(state => state.modal.modalData);

    return (
        <div className={styles.container} >
            <MdClose className={styles.close_icon} onClick={closeModal} />
            <div className={styles.items} >
                <p className={styles.text_item} >id: {id}</p>
                <p className={styles.text_item} >name: {name}</p>
                <p className={styles.text_item} >year: {year}</p>
                <p className={styles.text_item} >color: {color}</p>
                <p className={styles.text_item} >pantone_value: {pantone_value}</p>
            </div>
        </div>
    )
}

export default ProductModalItem;