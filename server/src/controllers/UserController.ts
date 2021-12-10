import { Request, Response } from 'express';
import UserService from '../services/UserService';
import httpStatuses from '../constants/httpStatuses';
import { LIMIT_OPTIONS, PAGE_OPTIONS } from '../constants/api/dumMyApi';
import logger from '../logger';
import format from 'string-format';
import LOGGER_MESSAGES from '../constants/loggerMessages';

class UserController {
  async loginUser(req: Request, res: Response) {
    if (!req.params.id) {
      const message = 'ID parameter not passed';
      logger.error(format(LOGGER_MESSAGES.GET_USER_LOGIN.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: httpStatuses.OK, data: {...await UserService.loginUser(req.params.id)}
      });
      logger.info(format(LOGGER_MESSAGES.GET_USER_ID.RESPONSE.SUCCESS, responseBody));
      res.status(httpStatuses.OK).send(responseBody);
    } catch (e: any) {
      const message = (e.message === '400') ? 'ID not valid' : 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_USER_ID.RESPONSE.ERROR, String(httpStatuses.SERVER_ERROR), message));
      res.status(httpStatuses.SERVER_ERROR).json({
        status: (e.message === '400') ?  httpStatuses.BAD_REQUEST : httpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  async getUser(req: Request, res: Response) {
    if (!req.params.id) {
      const message = 'ID parameter not passed';
      logger.error(format(LOGGER_MESSAGES.GET_USER_ID.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: httpStatuses.OK, data: {...await UserService.getUser(req.params.id)}
      });
      logger.info(format(LOGGER_MESSAGES.GET_USER_ID.RESPONSE.SUCCESS, responseBody));
      res.status(httpStatuses.OK).send(responseBody);
    } catch (e) {
      const message = 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_USER_ID.RESPONSE.ERROR, String(httpStatuses.SERVER_ERROR), message));
      res.status(httpStatuses.SERVER_ERROR).json({
        status: httpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  async getUsers(req: Request, res: Response) {
    const page: number = req.query.page ? Number(req.query.page) : PAGE_OPTIONS.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LIMIT_OPTIONS.MAX;
    logger.info(format(LOGGER_MESSAGES.GET_USER_LIST.REQUEST, JSON.stringify(req.query)));

    if (page < PAGE_OPTIONS.MIN) {
      const message = `Minimum page size ${PAGE_OPTIONS.MIN}`;
      logger.error(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LIMIT_OPTIONS.MIN || limit > LIMIT_OPTIONS.MAX) {
      const message = `Minimum limit size ${LIMIT_OPTIONS.MIN} and maximum ${LIMIT_OPTIONS.MAX}`;
      logger.error(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: httpStatuses.OK, ...await UserService.getUsers(page, limit)
      });
      logger.info(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.SUCCESS, responseBody));
      res.status(httpStatuses.OK).send(responseBody);
    } catch (e) {
      const message = 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.ERROR, String(httpStatuses.SERVER_ERROR), message));
      res.status(httpStatuses.SERVER_ERROR).json({
        status: httpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }
}

export default new UserController();
