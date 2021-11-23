import * as UsersFormAC from './usersFormAction';
import * as PostsFormAC from './postsFormAction';
import * as UserFullFormAC from './userFullFormAction';
import * as UserPostsFormAC from './userPostsAction';
import * as LoginUserFormAC from './loginUserFormAction';
import * as RegisterUserFormAC from './sendUserFormAction';
import * as ModalFormAC from './modalFormAction';
import * as PostCommentsFormAC from './postCommentsAction';
import * as PostFormAC from './postFormAction';

export default {
  ...UsersFormAC,
  ...PostsFormAC,
  ...UserFullFormAC,
  ...UserPostsFormAC,
  ...LoginUserFormAC,
  ...RegisterUserFormAC,
  ...ModalFormAC,
  ...PostCommentsFormAC,
  ...PostFormAC
};
