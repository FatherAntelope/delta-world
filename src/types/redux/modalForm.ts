export interface IModalData {
  [key: string]: any
}

export interface IModalFormState {
  modalData?: IModalData;
  isActive: boolean;
}

export enum ModalFormACTypes {
  OPEN_MODAL_FORM = 'MODAL_FORM/OPEN_MODAL_FORM',
  CLOSE_MODAL_FORM = 'MODAL_FORM/LOAD_POSTS_FORM_SUCCESS'
}

interface IOpenModalFormAC {
  type: ModalFormACTypes.OPEN_MODAL_FORM;
  payload: IModalData;
}

interface ICloseModalFormAC {
  type: ModalFormACTypes.CLOSE_MODAL_FORM;
  payload: IModalData;
}

export type ModalFormAC = IOpenModalFormAC | ICloseModalFormAC;
