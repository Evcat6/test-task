import { FC } from 'react';
import { InputFilterProps } from '../../interfaces/InputFilter';
import styles from './InputFilter.module.scss';

const InputFilter: FC<InputFilterProps> = ({label, value, onChange, placeholder}) => {
    const blockInvalidChar = (e: any): void => {
        const charArray = ['e', 'E', '+', '-', "ArrowUp", "ArrowDown", ',', '.'];
        charArray.includes(e.key) && e.preventDefault();
    };
    return (
        <div className={styles.input_container} >
            <label className={styles.label} >{label}</label>
            <input
                onKeyDown={blockInvalidChar}
                className={styles.input} 
                value={value} 
                onChange={e => onChange(e.target.value)} 
                type='number'
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputFilter;