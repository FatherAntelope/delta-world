import { IModalFormState, ModalFormAC, ModalFormACTypes } from '../types/redux/modalForm';

const initialState: IModalFormState = {
  modalData: {},
  isActive: false
};

const modalFormReducer = (state = initialState, action: ModalFormAC): IModalFormState => {
  switch (action.type) {
    case ModalFormACTypes.OPEN_MODAL_FORM:
      return { isActive: true, modalData: action.payload };
    case ModalFormACTypes.CLOSE_MODAL_FORM:
      return { isActive: false, modalData: action.payload };
    default:
      return state;
  }
};

export default modalFormReducer;
