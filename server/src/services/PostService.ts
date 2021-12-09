import { IResponseList, IResponsePostPreview } from '../types/api/dumMyApi';
import logger from '../logger';
import format from 'string-format';
import loggerMessages from '../constants/loggerMessages';
import { fetchPosts } from '../utils/dymMyApi';
import PostMapper from '../mapper/postMapper';

class PostService {
  async getPosts(page: number, limit: number): Promise<IResponseList<IResponsePostPreview>> {
    const response = await fetchPosts(page, limit);
    if (response.status === 200) {
      logger.info(format(loggerMessages.GET_POST_LIST.FETCH.SUCCESS, response.status));
      return PostMapper.getPostsFullNameAndPublishDate(await response.data);
    } else {
      logger.error(format(loggerMessages.GET_POST_LIST.FETCH.ERROR, response.status, response.statusText));
      throw new Error(loggerMessages.GET_POST_LIST.FETCH.ERROR);
    }
  }
}

export default new PostService();
