import { Dispatch } from 'redux';
import { fetchUserFullForm } from '../utils/fetchDumMyApi';
import { LoginUserFormAC, LoginUserFormACTypes } from '../types/redux/loginUserForm';

const loginUserFormAC = (id: string) => async (dispatch: Dispatch<LoginUserFormAC>) => {
  dispatch({
    type: LoginUserFormACTypes.LOGIN_USER_FORM
  });

  try {
    const response = await fetchUserFullForm(id);
    const loginUser = await response.json();

    if (response.ok) {
      dispatch({
        type: LoginUserFormACTypes.LOGIN_USER_FORM_SUCCESS,
        payload: loginUser
      });
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

const loginUserSetValuesFormAC = (
  id: string, picture: string, firstName: string
) => (dispatch: Dispatch<LoginUserFormAC>) => {
  dispatch({
    type: LoginUserFormACTypes.LOGIN_USER_FORM_CLEAR,
    payload: { id, picture, firstName }
  });
};

export { loginUserFormAC, logoutUserFormAC, loginUserSetValuesFormAC };
