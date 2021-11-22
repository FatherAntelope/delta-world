import * as UsersFormAC from './usersFormAction';
import * as PostsFormAC from './postsFormAction';
import * as UserFullFormAC from './userFullFormAction';
import * as UserPostsFormAC from './userPostsAction';
import * as LoginUserFormAC from './loginUserFormAction';
import * as RegisterUserFormAC from './registerUserFormAction';

export default {
  ...UsersFormAC,
  ...PostsFormAC,
  ...UserFullFormAC,
  ...UserPostsFormAC,
  ...LoginUserFormAC,
  ...RegisterUserFormAC
};
