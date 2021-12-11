import { Request, Response } from 'express';
import UserService from '../services/UserService';
import HttpStatuses from '../constants/httpStatuses';
import { LimitOptions, PageOptions } from '../constants/api/dumMyApi';
import logger from '../logger';
import format from 'string-format';
import LOGGER_MESSAGES from '../constants/loggerMessages';

class UserController {
  static async updateUser(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.UPDATE_USER.REQUEST, JSON.stringify(req.params)));

    try {
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, data: {...await UserService.updateUser(req.params.id, req.body)}
      });
      logger.info(format(LOGGER_MESSAGES.UPDATE_USER.RESPONSE.SUCCESS, responseBody));
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e: any) {
      const message = (e.message === String(HttpStatuses.BAD_REQUEST)) ? 'User not found' : 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.UPDATE_USER.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message));
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: (e.message === String(HttpStatuses.BAD_REQUEST)) ? HttpStatuses.BAD_REQUEST : HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const results = await UserService.createUser(req.body);
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, data: { ...results }
      });
      logger.info(format(LOGGER_MESSAGES.CREATE_USER.RESPONSE.SUCCESS, responseBody));
      res
        .cookie(
          'user_first_name', results.firstName,
          { expires: new Date(Date.now() + 700000000), httpOnly: true }
        )
        .cookie(
          'user_id', results.id,
          { expires: new Date(Date.now() + 700000000), httpOnly: true }
        )
        .cookie(
          'user_picture', results.picture,
          { expires: new Date(Date.now() + 700000000), httpOnly: true }
        )
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e: any) {
      const message = e.message;
      logger.error(format(LOGGER_MESSAGES.CREATE_USER.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message));
      res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }
  }

  static async loginUser(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_USER_LOGIN.REQUEST, JSON.stringify(req.params)));

    try {
      const results = await UserService.loginUser(req.params.id);
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, data: { ...results }
      });
      logger.info(format(LOGGER_MESSAGES.GET_USER_LOGIN.RESPONSE.SUCCESS, responseBody));
      res
        .cookie(
          'user_first_name', results.firstName,
          { expires: new Date(Date.now() + 700000000), httpOnly: true }
        )
        .cookie(
          'user_id', results.id,
          { expires: new Date(Date.now() + 700000000), httpOnly: true }
        )
        .cookie(
          'user_picture', results.picture,
          { expires: new Date(Date.now() + 700000000), httpOnly: true }
        )
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e: any) {
      const message = (e.message === String(HttpStatuses.BAD_REQUEST)) ? 'ID not valid' : 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_USER_LOGIN.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message));
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: (e.message === String(HttpStatuses.BAD_REQUEST)) ? HttpStatuses.BAD_REQUEST : HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  static async getUser(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_USER_ID.REQUEST, JSON.stringify(req.params)));

    try {
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, data: {...await UserService.getUser(req.params.id)}
      });
      logger.info(format(LOGGER_MESSAGES.GET_USER_ID.RESPONSE.SUCCESS, responseBody));
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e: any) {
      const message = (e.message === String(HttpStatuses.BAD_REQUEST)) ? 'User not found' : 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_USER_ID.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message));
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: (e.message === String(HttpStatuses.BAD_REQUEST)) ? HttpStatuses.BAD_REQUEST : HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  static async getUsers(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_USER_LIST.REQUEST, JSON.stringify(req.query)));
    const page: number = req.query.page ? Number(req.query.page) : PageOptions.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LimitOptions.MAX;

    if (page < PageOptions.MIN) {
      const message = `Minimum page size ${PageOptions.MIN}`;
      logger.error(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message));
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LimitOptions.MIN || limit > LimitOptions.MAX) {
      const message = `Minimum limit size ${LimitOptions.MIN} and maximum ${LimitOptions.MAX}`;
      logger.error(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message));
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, ...await UserService.getUsers(page, limit)
      });
      logger.info(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.SUCCESS, responseBody));
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e) {
      const message = 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_USER_LIST.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message));
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }
}

export default UserController;
