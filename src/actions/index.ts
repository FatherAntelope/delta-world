import * as UsersFormAC from './usersFormAction';
import * as PostsFormAC from './postsFormAction';
import * as UserFullFormAC from './userFullFormAction';

export default {
  ...UsersFormAC,
  ...PostsFormAC,
  ...UserFullFormAC
};
