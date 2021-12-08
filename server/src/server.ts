import express, { Express, NextFunction, Request, Response } from 'express';
import { getServerConfigs, IHttpHeader } from './utils/configServer';
import { v4 as generateUUID } from 'uuid';
import routes from './routes';
import logger from "./logger";
const context = require('request-context');

const { host, port, httpHeaders } = getServerConfigs();
const app: Express = express();

app.use(express.json()).use(context.middleware('request'));
app.use((req: Request, res: Response, next: NextFunction) => {
  context.set('uuid', generateUUID());
  res.type('text/plain');
  httpHeaders.forEach((httpHeader: IHttpHeader) => res.set(httpHeader.option, httpHeader.value));
  next();
});
app.use('/api', routes);

app.listen(port, host, () => {
  const message: string = `The server is started on http://${host}:${port}`;
  console.log(message);
  logger.message(message);
});

process.on('SIGINT', () => {
  const message: string = 'The server is turned off';
  console.log(message);
  logger.message(message);
});
