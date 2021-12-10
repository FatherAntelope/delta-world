import {
  IResponseList,
  IResponsePostConvert,
  IResponsePostPreviewConvert
} from '../types/api/dumMyApi';
import logger from '../logger';
import format from 'string-format';
import loggerMessages from '../constants/loggerMessages';
import {fetchPosts, fetchPost, fetchPostsByUser} from '../utils/dymMyApi';
import PostMapper from '../mapper/postMapper';
import httpStatuses from '../constants/httpStatuses';

class PostService {
  static async getPostsByUser(
    id: string, page: number, limit: number
  ): Promise<IResponseList<IResponsePostPreviewConvert>> {
    const response = await fetchPostsByUser(id, page, limit);
    if (response.status === 200) {
      logger.info(format(loggerMessages.GET_POSTS_BY_USER.FETCH.SUCCESS, response.status));
      return PostMapper.getConvertPosts(await response.data);
    } else {
      logger.error(format(loggerMessages.GET_POSTS_BY_USER.FETCH.ERROR, response.status, response.statusText));
      throw new Error(loggerMessages.GET_POST_ID.FETCH.ERROR);
    }
  }

  static async getPost(id: string): Promise<IResponsePostConvert> {
    const response = await fetchPost(id);
    if (response.status === httpStatuses.OK) {
      logger.info(format(loggerMessages.GET_POST_ID.FETCH.SUCCESS, response.status));
      return PostMapper.getConvertPost(await response.data);
    } else {
      logger.error(format(loggerMessages.GET_POST_ID.FETCH.ERROR, response.status, response.statusText));
      throw new Error(loggerMessages.GET_POST_ID.FETCH.ERROR);
    }
  }

  static async getPosts(page: number, limit: number): Promise<IResponseList<IResponsePostPreviewConvert>> {
    const response = await fetchPosts(page, limit);
    if (response.status === httpStatuses.OK) {
      logger.info(format(loggerMessages.GET_POST_LIST.FETCH.SUCCESS, response.status));
      return PostMapper.getConvertPosts(await response.data);
    } else {
      logger.error(format(loggerMessages.GET_POST_LIST.FETCH.ERROR, response.status, response.statusText));
      throw new Error(loggerMessages.GET_POST_LIST.FETCH.ERROR);
    }
  }
}

export default PostService;
