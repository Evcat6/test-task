import { FC } from 'react';
import styles from './Header.module.scss';
import { FormFilter } from '..';

const Header: FC = () =>  {
    return (
        <header className={styles.header} >
            <FormFilter/>
        </header>
    )
}

export default Header;