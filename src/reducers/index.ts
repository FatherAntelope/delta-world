import { combineReducers } from 'redux';
import usersFormReducer from './usersFormReducer';
import postsFormReducer from './postsFormReducer';
import userFullFormReducer from './userFullFormReducer';
import userPostsFormReducer from './userPostsFormReducer';
import loginUserFormReducer from './loginUserFormReducer';
import sendUserFormReducer from './sendUserFormReducer';
import modalFormReducer from './modalFormReducer';
import postCommentsReducer from './postCommentsReducer';
import postFormReducer from './postFormReducer';

export const rootReducer = combineReducers({
  usersForm: usersFormReducer,
  postsForm: postsFormReducer,
  userFullForm: userFullFormReducer,
  userPostsForm: userPostsFormReducer,
  loginUserForm: loginUserFormReducer,
  sendUserForm: sendUserFormReducer,
  modalForm: modalFormReducer,
  postCommentsForm: postCommentsReducer,
  postForm: postFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;
