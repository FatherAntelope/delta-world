import Router from 'express';
import UserController from '../controllers/UserController';
const userRouter = Router();

userRouter.get('/user', UserController.getUsers);
userRouter.get('/user/:id', UserController.getUser);
userRouter.get('/user/:id/login', UserController.loginUser);

export default userRouter;
