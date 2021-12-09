import Router, { Express } from 'express';
import httpStatuses from "../constants/httpStatuses";
import userRouter from "./userRouter";

const routes: Express = Router();

routes.use('', userRouter);
routes.use('*', (req, res) => {
  res.status(httpStatuses.NOT_FOUND).json({
    status: httpStatuses.NOT_FOUND,
    message: 'Not found'
  });
});

export default routes;
