import Router from 'express';
import UserController from "../controllers/UserController";
const userRouter = Router();

userRouter.get('/user', UserController.getUsers);

export default userRouter;
