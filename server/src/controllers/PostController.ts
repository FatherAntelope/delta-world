import { Request, Response } from 'express';
import { LimitOptions, PageOptions } from '../constants/api/dumMyApi';
import logger from '../logger';
import format from 'string-format';
import LOGGER_MESSAGES from '../constants/loggerMessages';
import HttpStatuses from '../constants/httpStatuses';
import PostService from '../services/PostService';

class PostController {
  static async getPostsByUser(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.REQUEST, JSON.stringify(
      { ...req.query, ...req.params })
    ));

    const page: number = req.query.page ? Number(req.query.page) : PageOptions.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LimitOptions.MAX;

    if (page < PageOptions.MIN) {
      const message = `Minimum page size ${PageOptions.MIN}`;
      logger.error(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message));
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LimitOptions.MIN || limit > LimitOptions.MAX) {
      const message = `Minimum limit size ${LimitOptions.MIN} and maximum ${LimitOptions.MAX}`;
      logger.error(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message));
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, ...await PostService.getPostsByUser(req.params.id, page, limit)
      });
      logger.info(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.SUCCESS, responseBody));
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e:any) {
      const message = (e.message === String(HttpStatuses.BAD_REQUEST)) ? 'User not found' : 'Internal server error';
      logger.error(
        format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message)
      );
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: (e.message === String(HttpStatuses.BAD_REQUEST)) ? HttpStatuses.BAD_REQUEST : HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  static async getPost(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_POST_ID.REQUEST, JSON.stringify(req.params)));

    try {
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, data: {...await PostService.getPost(req.params.id)}
      });
      logger.info(format(LOGGER_MESSAGES.GET_POST_ID.RESPONSE.SUCCESS, responseBody));
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e:any) {
      const message = (e.message === String(HttpStatuses.BAD_REQUEST)) ? 'Post not found' : 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_POST_ID.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message));
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: (e.message === String(HttpStatuses.BAD_REQUEST)) ? HttpStatuses.BAD_REQUEST : HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  static async getPosts(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_POST_LIST.REQUEST, JSON.stringify(req.query)));
    const page: number = req.query.page ? Number(req.query.page) : PageOptions.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LimitOptions.MAX;

    if (page < PageOptions.MIN) {
      const message = `Minimum page size ${PageOptions.MIN}`;
      logger.error(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message));
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LimitOptions.MIN || limit > LimitOptions.MAX) {
      const message = `Minimum limit size ${LimitOptions.MIN} and maximum ${LimitOptions.MAX}`;
      logger.error(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message));
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK, ...await PostService.getPosts(page, limit)
      });
      logger.info(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.SUCCESS, responseBody));
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e) {
      const message = 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message));
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }
}

export default PostController;
