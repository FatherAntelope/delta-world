import { combineReducers } from 'redux';
import usersFormReducer from './usersFormReducer';
import postsFormReducer from './postsFormReducer';
import userFullFormReducer from './userFullFormReducer';
import userPostsFormReducer from './userPostsFormReducer';

export const rootReducer = combineReducers({
  usersForm: usersFormReducer,
  postsForm: postsFormReducer,
  userFullForm: userFullFormReducer,
  userPostsForm: userPostsFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;
