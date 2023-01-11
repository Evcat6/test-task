import styled from 'styled-components';

export const ProductItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid ${props => props.color};
    box-shadow: 5px 5px 3px ${props => props.color};
    &:hover {
        box-shadow: 7px 7px 4px ${props => props.color};
    }
    transition: 0.07s ease-in-out;
`;