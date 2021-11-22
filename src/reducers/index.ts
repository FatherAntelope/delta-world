import { combineReducers } from 'redux';
import usersFormReducer from './usersFormReducer';
import postsFormReducer from './postsFormReducer';
import userFullFormReducer from './userFullFormReducer';
import userPostsFormReducer from './userPostsFormReducer';
import loginUserFormReducer from './loginUserFormReducer';
import registerUserFormReducer from './registerUserFormReducer';

export const rootReducer = combineReducers({
  usersForm: usersFormReducer,
  postsForm: postsFormReducer,
  userFullForm: userFullFormReducer,
  userPostsForm: userPostsFormReducer,
  loginUserForm: loginUserFormReducer,
  registerUserForm: registerUserFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;
