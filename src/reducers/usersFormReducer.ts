import { IUsersFormState, UsersFormAC, UsersFormACTypes } from '../types/redux/usersForm';

const initialState: IUsersFormState = {
  users: {
    data: [], total: 0, limit: 6, page: 0
  },
  isLoading: true
};

const usersFormReducer = (state = initialState, action: UsersFormAC): IUsersFormState => {
  switch (action.type) {
    case UsersFormACTypes.LOAD_USERS_FORM:
      return { isLoading: true, users: state.users };
    case UsersFormACTypes.LOAD_USERS_FORM_SUCCESS:
      return { isLoading: false, users: action.payload };
    case UsersFormACTypes.LOAD_USERS_FORM_ERROR:
      return { isLoading: false, users: state.users, error: action.payload };
    default:
      return state;
  }
};

export default usersFormReducer;
