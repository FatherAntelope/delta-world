import * as UsersFormAC from './usersFormAction';
import * as PostsFormAC from './postsFormAction';
import * as UserFullFormAC from './userFullFormAction';
import * as UserPostsFormAC from './userPostsAction';

export default {
  ...UsersFormAC,
  ...PostsFormAC,
  ...UserFullFormAC,
  ...UserPostsFormAC
};
