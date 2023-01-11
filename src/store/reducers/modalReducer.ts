import { InitState, ModalAction, ModalActionTypes } from '../../types/modal';

const initialState: InitState = {
    modalState: false,
    modalData: {
        id: NaN,
        name: '',
        year: NaN,
        color: '',
        pantone_value: ""
    },
}


export const modalReducer = (state = initialState, action: ModalAction) => {
    switch(action.type) {
        case ModalActionTypes.UPDATE_MODAL_DATA:
            return {...state, modalData: action.payload};
        case ModalActionTypes.CLEAR_MODAL_DATA:
            return {...state, modalData: initialState.modalData};
        case ModalActionTypes.UPDATE_MODAL_STATE:
            return {...state, modalState: !state.modalState}
        default:
            return state;
    }
}