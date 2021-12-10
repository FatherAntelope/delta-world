import { IResponseCommentPreviewConvert, IResponseList } from '../types/api/dumMyApi';
import { fetchCommentsByPost } from '../utils/dymMyApi';
import logger from '../logger';
import format from 'string-format';
import loggerMessages from '../constants/loggerMessages';
import CommentMapper from '../mapper/commentMapper';
import httpStatuses from '../constants/httpStatuses';

class CommentService {
  static async getCommentsByPost(
    id: string, page: number, limit: number
  ): Promise<IResponseList<IResponseCommentPreviewConvert>> {
    const response = await fetchCommentsByPost(id, page, limit);
    switch (response.status) {
      case httpStatuses.OK: {
        logger.info(format(loggerMessages.GET_COMMENTS_BY_POST.FETCH.SUCCESS, response.status));
        return CommentMapper.getConvertComments(await response.data);
      }
      default: {
        logger.error(format(loggerMessages.GET_COMMENTS_BY_POST.FETCH.ERROR, response.status, response.statusText));
        throw new Error(loggerMessages.GET_COMMENTS_BY_POST.FETCH.ERROR);
      }
    }
  }
}

export default CommentService;
