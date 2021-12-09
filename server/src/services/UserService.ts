import { fetchUsers } from "../utils/dymMyApi";
import { IResponseList, IResponseUserPreviewFullName } from "../types/api/dumMyApi";
import loggerMessages from "../constants/loggerMessages";
import logger from '../logger';
import format from 'string-format';
import UserMapper from '../mapper/userMapper';

class UserService {
  async getUsers(page: number, limit: number): Promise<IResponseList<IResponseUserPreviewFullName>> {
    const response = await fetchUsers(page, limit);
    if (response.status === 200) {
      logger.info(format(loggerMessages.GET_USER_LIST.FETCH.SUCCESS, response.status));
      return UserMapper.getUsersFullName(await response.data);
    } else {
      logger.error(format(loggerMessages.GET_USER_LIST.FETCH.ERROR, response.status, response.statusText));
      throw new Error(loggerMessages.GET_USER_LIST.FETCH.ERROR);
    }
  }
}

export default new UserService();
