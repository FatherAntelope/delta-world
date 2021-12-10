import { Response, Request } from 'express';
import logger from '../logger';
import format from 'string-format';
import LOGGER_MESSAGES from '../constants/loggerMessages';
import { LIMIT_OPTIONS, PAGE_OPTIONS } from '../constants/api/dumMyApi';
import httpStatuses from '../constants/httpStatuses';
import CommentService from '../services/CommentService';

class CommentController {
  static async getCommentsByPost(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.REQUEST, JSON.stringify(
      { ...req.query, ...req.params })
    ));

    const page: number = req.query.page ? Number(req.query.page) : PAGE_OPTIONS.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LIMIT_OPTIONS.MAX;

    if (page < PAGE_OPTIONS.MIN) {
      const message = `Minimum page size ${PAGE_OPTIONS.MIN}`;
      logger.error(
        format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message)
      );
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LIMIT_OPTIONS.MIN || limit > LIMIT_OPTIONS.MAX) {
      const message = `Minimum limit size ${LIMIT_OPTIONS.MIN} and maximum ${LIMIT_OPTIONS.MAX}`;
      logger.error(
        format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.ERROR, String(httpStatuses.BAD_REQUEST), message)
      );
      return res.status(httpStatuses.BAD_REQUEST).json({
        status: httpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: httpStatuses.OK,
        data: {...await CommentService.getCommentsByPost(req.params.id, page, limit)
        }
      });
      logger.info(format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.SUCCESS, responseBody));
      res.status(httpStatuses.OK).send(responseBody);
    } catch (e) {
      const message = 'Internal server error';
      logger.error(
        format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.ERROR, String(httpStatuses.SERVER_ERROR), message)
      );
      res.status(httpStatuses.SERVER_ERROR).json({
        status: httpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }
}

export default CommentController;
