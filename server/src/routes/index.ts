import Router, { Express } from 'express';
import httpStatuses from "../constants/httpStatuses";

const routes: Express = Router();
routes.use('*', (req, res) => {
  res.status(httpStatuses.NOT_FOUND).json({
    status: httpStatuses.NOT_FOUND,
    message: 'Not found'
  });
});

export default routes;
