export enum ModalActionTypes {
    UPDATE_MODAL_STATE = 'UPDATE_MODAL_STATE',
    UPDATE_MODAL_DATA = 'UPDATE_MODAL_DATA',
    CLEAR_MODAL_DATA = 'CLEAR_MODAL_DATA'
}

export interface ModalData {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export interface InitState {
    modalState: boolean;
    modalData: ModalData;
}

interface UpdateModalState {
    type: ModalActionTypes.UPDATE_MODAL_STATE
}

interface ClearModalData {
    type: ModalActionTypes.CLEAR_MODAL_DATA
}

interface UpdateModalData {
    type: ModalActionTypes.UPDATE_MODAL_DATA;
    payload: ModalData;
}


export type ModalAction = UpdateModalState | ClearModalData | UpdateModalData;