import { Dispatch } from 'redux';
import { IModalData, ModalFormAC, ModalFormACTypes } from '../types/redux/modalForm';

const openModalFormAC = (data: IModalData) => (dispatch: Dispatch<ModalFormAC>) => {
  dispatch({
    type: ModalFormACTypes.OPEN_MODAL_FORM,
    payload: data
  });
};

const closeModalFormAC = () => (dispatch: Dispatch<ModalFormAC>) => {
  dispatch({
    type: ModalFormACTypes.CLOSE_MODAL_FORM,
    payload: {}
  });
};

export { openModalFormAC, closeModalFormAC };
