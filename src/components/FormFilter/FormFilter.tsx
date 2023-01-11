import { FC, useState } from "react";
import { InputFilter, ButtonFilter } from '..'
import styles from './FormFilter.module.scss';
import { useDispatch } from 'react-redux';
import { InputActionTypes } from '../../types/input';

const FormFilter: FC = () => {
    const [ value, setValue ] = useState<string>('');
    const dispatch = useDispatch();
    const updateInputValue = (e: any) => {
        e.preventDefault();
        dispatch({type: InputActionTypes.SET_INPUT, payload: value});
    }
    return (
        <form className={styles.form} onSubmit={(e) => updateInputValue(e)} >
            <InputFilter
                label='find product by id' 
                value={value} 
                onChange={setValue} 
                placeholder='Enter number value'
            />
            <div className={styles.button_container} >
            <ButtonFilter >Search</ButtonFilter>
            </div>
        </form>
    )
}

export default FormFilter