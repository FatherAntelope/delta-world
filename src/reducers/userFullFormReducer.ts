import { IUserFullFormState, UserFullFormAC, UserFullFormACTypes } from '../types/redux/userFullForm';

const initialState: IUserFullFormState = {
  user: {
    id: '-',
    gender: '-',
    phone: '-',
    picture: '',
    email: '-',
    registerDate: '-',
    dateOfBirth: '-',
    firstName: '-',
    lastName: '-',
    title: '-'
  },
  isLoading: true
};

const userFullFormReducer = (state = initialState, action: UserFullFormAC): IUserFullFormState => {
  switch (action.type) {
    case UserFullFormACTypes.LOAD_USER_FULL_FORM:
      return { isLoading: true, user: state.user };
    case UserFullFormACTypes.LOAD_USER_FULL_FORM_SUCCESS:
      return { isLoading: false, user: action.payload };
    case UserFullFormACTypes.LOAD_USER_FULL_FORM_ERROR:
      return { isLoading: false, user: state.user, error: action.payload };
    default:
      return state;
  }
};

export default userFullFormReducer;
