import { Response, Request } from 'express';
import logger from '../logger';
import format from 'string-format';
import LOGGER_MESSAGES from '../constants/loggerMessages';
import { LimitOptions, PageOptions } from '../constants/api/dumMyApi';
import HttpStatuses from '../constants/httpStatuses';
import CommentService from '../services/CommentService';

class CommentController {
  static async getCommentsByPost(req: Request, res: Response) {
    logger.info(format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.REQUEST, JSON.stringify(
      { ...req.query, ...req.params })
    ));

    const page: number = req.query.page ? Number(req.query.page) : PageOptions.MIN;
    const limit: number = req.query.limit ? Number(req.query.limit) : LimitOptions.MAX;

    if (page < PageOptions.MIN) {
      const message = `Minimum page size ${PageOptions.MIN}`;
      logger.error(
        format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message)
      );
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    if (limit < LimitOptions.MIN || limit > LimitOptions.MAX) {
      const message = `Minimum limit size ${LimitOptions.MIN} and maximum ${LimitOptions.MAX}`;
      logger.error(
        format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.ERROR, String(HttpStatuses.BAD_REQUEST), message)
      );
      return res.status(HttpStatuses.BAD_REQUEST).json({
        status: HttpStatuses.BAD_REQUEST,
        error: { message }
      });
    }

    try {
      const responseBody = JSON.stringify({
        status: HttpStatuses.OK,
        ...await CommentService.getCommentsByPost(req.params.id, page, limit)
      });
      logger.info(format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.SUCCESS, responseBody));
      res.status(HttpStatuses.OK).send(responseBody);
    } catch (e) {
      const message = 'Internal server error';
      logger.error(
        format(LOGGER_MESSAGES.GET_COMMENTS_BY_POST.RESPONSE.ERROR, String(HttpStatuses.SERVER_ERROR), message)
      );
      res.status(HttpStatuses.SERVER_ERROR).json({
        status: HttpStatuses.SERVER_ERROR,
        error: { message }
      });
    }
  }
}

export default CommentController;
