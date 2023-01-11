import { FC } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { PaginatorButtonProps } from '../../interfaces/PaginatorButton';
import { Button } from '../Styled/Button';

const PaginatorButton: FC<PaginatorButtonProps> = ({direction, onClick, disabled}) => {
    return <Button disabled={disabled} onClick={onClick} >{direction  === 'left'? <AiOutlineArrowLeft/> : <AiOutlineArrowRight/>}</Button>
}

export default PaginatorButton;