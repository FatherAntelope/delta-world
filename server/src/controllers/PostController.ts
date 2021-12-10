import { Request, Response } from 'express';
import { LIMIT_OPTIONS, PAGE_OPTIONS } from '../constants/api/dumMyApi';
import logger from '../logger';
import format from 'string-format';
import LOGGER_MESSAGES from '../constants/loggerMessages';
import httpStatuses from '../constants/httpStatuses';
import PostService from '../services/PostService';

class PostController {
  static async getPostsByUser(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.REQUEST, JSON.stringify(
      { ...req.query, ...req.params })
    ));

    const page: number = req.query.page ? Number(req.query.page) : PAGE_OPTIONS.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LIMIT_OPTIONS.MAX;

    if (page < PAGE_OPTIONS.MIN) {
      const message = `Minimum page size ${PAGE_OPTIONS.MIN}`;
      logger.error(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LIMIT_OPTIONS.MIN || limit > LIMIT_OPTIONS.MAX) {
      const message = `Minimum limit size ${LIMIT_OPTIONS.MIN} and maximum ${LIMIT_OPTIONS.MAX}`;
      logger.error(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
          status: httpStatuses.OK,
          data: {...await PostService.getPostsByUser(req.params.id, page, limit)
        }
      });
      logger.info(format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.SUCCESS, responseBody));
      res.status(httpStatuses.OK).send(responseBody);
    } catch (e:any) {
      const message = (e.message === String(httpStatuses.BAD_REQUEST)) ? 'User not found' : 'Internal server error';
      logger.error(
        format(LOGGER_MESSAGES.GET_POSTS_BY_USER.RESPONSE.ERROR, String(httpStatuses.SERVER_ERROR), message)
      );
      res.status(httpStatuses.SERVER_ERROR).json({
        status: (e.message === String(httpStatuses.BAD_REQUEST)) ? httpStatuses.BAD_REQUEST : httpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  static async getPost(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_POST_ID.REQUEST, JSON.stringify(req.params)));

    try {
      const responseBody = JSON.stringify({
        status: httpStatuses.OK, data: {...await PostService.getPost(req.params.id)}
      });
      logger.info(format(LOGGER_MESSAGES.GET_POST_ID.RESPONSE.SUCCESS, responseBody));
      res.status(httpStatuses.OK).send(responseBody);
    } catch (e:any) {
      const message = (e.message === String(httpStatuses.BAD_REQUEST)) ? 'Post not found' : 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_POST_ID.RESPONSE.ERROR, String(httpStatuses.SERVER_ERROR), message));
      res.status(httpStatuses.SERVER_ERROR).json({
        status: (e.message === String(httpStatuses.BAD_REQUEST)) ? httpStatuses.BAD_REQUEST : httpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }

  static async getPosts(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_POST_LIST.REQUEST, JSON.stringify(req.query)));
    const page: number = req.query.page ? Number(req.query.page) : PAGE_OPTIONS.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LIMIT_OPTIONS.MAX;

    if (page < PAGE_OPTIONS.MIN) {
      const message = `Minimum page size ${PAGE_OPTIONS.MIN}`;
      logger.error(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LIMIT_OPTIONS.MIN || limit > LIMIT_OPTIONS.MAX) {
      const message = `Minimum limit size ${LIMIT_OPTIONS.MIN} and maximum ${LIMIT_OPTIONS.MAX}`;
      logger.error(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message));
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: httpStatuses.OK, ...await PostService.getPosts(page, limit)
      });
      logger.info(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.SUCCESS, responseBody));
      res.status(httpStatuses.OK).send(responseBody);
    } catch (e) {
      const message = 'Internal server error';
      logger.error(format(LOGGER_MESSAGES.GET_POST_LIST.RESPONSE.ERROR, String(httpStatuses.SERVER_ERROR), message));
      res.status(httpStatuses.SERVER_ERROR).json({
        status: httpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }
}

export default PostController;
