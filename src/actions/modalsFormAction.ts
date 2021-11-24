import { Dispatch } from 'redux';
import { ModalsFormAC, ModalsFormACTypes, IModalData } from '../types/redux/modalsForm';

const openModalsFormAC = (id: string, data: IModalData) => (dispatch: Dispatch<ModalsFormAC>) => {
  const obj: any = {};
  obj[id] = { isActive: true, modalData: data };
  dispatch({
    type: ModalsFormACTypes.OPEN_MODALS_FORM,
    payload: obj
  });
};

/* Пока что закрывает все попапы (очищает весь объект в store) */
const closeModalsFormAC = () => (dispatch: Dispatch<ModalsFormAC>) => {
  dispatch({
    type: ModalsFormACTypes.CLOSE_MODALS_FORM,
    payload: {}
  });
};

export { openModalsFormAC, closeModalsFormAC };
