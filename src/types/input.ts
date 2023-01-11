export enum InputActionTypes {
    SET_INPUT = "SET_INPUT"
}


interface SetInputAction {
    type: InputActionTypes.SET_INPUT;
    payload: string;
}

export interface InitState {
    input: string;
}

export type InputAction = SetInputAction;