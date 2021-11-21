import { combineReducers } from 'redux';
import usersFormReducer from './usersFormReducer';
import postsFormReducer from './postsFormReducer';

export const rootReducer = combineReducers({
  usersForm: usersFormReducer,
  postsForm: postsFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;
