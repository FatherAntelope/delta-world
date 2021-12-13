import express, { Express, NextFunction, Request, Response } from 'express';
import { getServerConfigs, IHttpHeader } from './utils/configServer';
import { v4 as generateUUID } from 'uuid';
import format from 'string-format';
import routes from './routes';
import logger from './logger';
import LOGGER_MESSAGES from './constants/loggerMessages';
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
  console.log(format(LOGGER_MESSAGES.SERVER.ON, host, String(port)));
  logger.message(format(LOGGER_MESSAGES.SERVER.ON, host, String(port)));
});

process.on('SIGINT', () => {
  console.log(LOGGER_MESSAGES.SERVER.OFF);
  logger.message(LOGGER_MESSAGES.SERVER.OFF);
});
