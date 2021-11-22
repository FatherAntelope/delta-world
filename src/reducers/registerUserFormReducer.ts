import { EMPTY_STRING } from '../constants/common';
import { IRegisterUserFormState, RegisterUserFormAC, RegisterUserFormACTypes } from '../types/redux/registerUserForm';

const initialState: IRegisterUserFormState = {
  registerUser: {
    id: EMPTY_STRING,
    picture: EMPTY_STRING,
    firstName: EMPTY_STRING,
  },
  isLoading: false
};

const registerUserFormReducer = (
  state = initialState, action: RegisterUserFormAC
): IRegisterUserFormState => {
  switch (action.type) {
    case RegisterUserFormACTypes.REGISTER_USER_FORM:
      return { isLoading: true, registerUser: state.registerUser };
    case RegisterUserFormACTypes.REGISTER_USER_FORM_SUCCESS:
      return { isLoading: false, registerUser: action.payload };
    case RegisterUserFormACTypes.REGISTER_USER_FORM_ERROR:
      return { isLoading: false, registerUser: state.registerUser, error: action.payload };
    default:
      return state;
  }
};

export default registerUserFormReducer;
