import { combineReducers } from 'redux';
import usersFormReducer from './usersFormReducer';
import postsFormReducer from './postsFormReducer';
import userFullFormReducer from './userFullFormReducer';

export const rootReducer = combineReducers({
  usersForm: usersFormReducer,
  postsForm: postsFormReducer,
  userFullForm: userFullFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;
