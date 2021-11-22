import { Dispatch } from 'redux';
import { fetchUserFullForm } from '../utils/fetchDumMyApi';
import { LOADING_EMULATION_TIME } from '../constants/common';
import { LoginUserFormAC, LoginUserFormACTypes } from '../types/redux/loginUserForm';

const loginUserFormAC = (id: string) => async (dispatch: Dispatch<LoginUserFormAC>) => {
  dispatch({
    type: LoginUserFormACTypes.LOGIN_USER_FORM
  });

  try {
    const response = await fetchUserFullForm(id);
    const loginUser = await response.json();

    if (response.ok) {
      setTimeout(() => {
        dispatch({
          type: LoginUserFormACTypes.LOGIN_USER_FORM_SUCCESS,
          payload: loginUser
        });
      }, LOADING_EMULATION_TIME);
    } else {
      throw new Error(`${response.status.toString()} – ${loginUser.error}`);
    }
  } catch (e) {
    dispatch({
      type: LoginUserFormACTypes.LOGIN_USER_FORM_ERROR,
      payload: String(e)
    });
  }
};

const logoutUserFormAC = () => (dispatch: Dispatch<LoginUserFormAC>) => {
  dispatch({
    type: LoginUserFormACTypes.LOGIN_USER_FORM_CLEAR,
    payload: { id: '', picture: '', firstName: '' }
  });
};

export { loginUserFormAC, logoutUserFormAC };
