import { InitState, InputAction, InputActionTypes } from '../../types/input';

const initialState: InitState = {
    input: ""
}

export const inputReducer = (state = initialState, action: InputAction) => {
    switch(action.type) {
        case InputActionTypes.SET_INPUT:
            return {...state, input: action.payload}
        default: 
            return state;
    }
}