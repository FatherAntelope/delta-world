import { EMPTY_STRING } from '../constants/common';
import { ILoginUserFormState, LoginUserFormAC, LoginUserFormACTypes } from '../types/redux/loginUserForm';

const initialState: ILoginUserFormState = {
  user: {
    id: EMPTY_STRING,
    picture: EMPTY_STRING,
    firstName: EMPTY_STRING,
  },
  isLoading: true
};

const loginUserFormReducer = (state = initialState, action: LoginUserFormAC): ILoginUserFormState => {
  switch (action.type) {
    case LoginUserFormACTypes.LOGIN_USER_FORM:
      return { isLoading: true, user: state.user };
    case LoginUserFormACTypes.LOGIN_USER_FORM_SUCCESS:
      return { isLoading: false, user: action.payload };
    case LoginUserFormACTypes.LOGIN_USER_FORM_ERROR:
      return { isLoading: false, user: state.user, error: action.payload };
    case LoginUserFormACTypes.LOGIN_USER_FORM_CLEAR:
      return { isLoading: false, user: action.payload };
    default:
      return state;
  }
};

export default loginUserFormReducer;
