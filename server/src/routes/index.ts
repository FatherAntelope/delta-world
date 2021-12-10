import Router, { Express } from 'express';
import httpStatuses from '../constants/httpStatuses';
import userRouter from './userRouter';
import postRouter from './postRouter';
import commentRouter from './commentRouter';

const routes: Express = Router();

routes.use('', userRouter);
routes.use('', postRouter);
routes.use('', commentRouter);

routes.use('*', (req, res) => {
  res.status(httpStatuses.NOT_FOUND).json({
    status: httpStatuses.NOT_FOUND,
    error: { message: 'Not found' }
  });
});

export default routes;
