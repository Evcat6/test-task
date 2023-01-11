import { FC } from "react";
import { ButtonFilterProps } from '../../interfaces/ButtonFilter';
import styles from './ButtonFilter.module.scss';

const ButtonFilter: FC<ButtonFilterProps> = ({children}) => {
    return (
        <button className={styles.button} >{children}</button>
    )
}

export default ButtonFilter;