import { Dispatch } from 'redux';
import { RegisterUserFormAC, RegisterUserFormACTypes } from '../types/redux/registerUserForm';
import { fetchRegisterUser } from '../utils/fetchDumMyApi';

const registerUserFormAction = (body: string) => async (dispatch: Dispatch<RegisterUserFormAC>) => {
  dispatch({
    type: RegisterUserFormACTypes.REGISTER_USER_FORM,
  });

  try {
    const response = await fetchRegisterUser(body);
    const userRegister = await response.json();
    if (response.ok) {
      dispatch({
        type: RegisterUserFormACTypes.REGISTER_USER_FORM_SUCCESS,
        payload: userRegister
      });
    } else {
      throw new Error(`${response.status.toString()} – ${userRegister.error}`);
    }
  } catch (e) {
    dispatch({
      type: RegisterUserFormACTypes.REGISTER_USER_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { registerUserFormAction };
