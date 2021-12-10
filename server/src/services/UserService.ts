import { fetchUsers, fetchUser } from '../utils/dymMyApi';
import {
  IResponseList, IResponseUserAuth,
  IResponseUserFullConvert,
  IResponseUserPreviewConvert
} from '../types/api/dumMyApi';
import loggerMessages from '../constants/loggerMessages';
import logger from '../logger';
import format from 'string-format';
import UserMapper from '../mapper/userMapper';
import httpStatuses from '../constants/httpStatuses';

class UserService {
  async loginUser(id: string): Promise<IResponseUserAuth> {
    const response = await fetchUser(id);
    switch (response.status) {
      case httpStatuses.OK: {
        logger.info(format(loggerMessages.GET_USER_LOGIN.FETCH.SUCCESS, response.status));
        return UserMapper.getConvertUserAuth(await response.data);
      }
      case httpStatuses.BAD_REQUEST: {
        logger.error(format(loggerMessages.GET_USER_LOGIN.FETCH.ERROR, response.status));
        throw new Error(String(httpStatuses.BAD_REQUEST));
      }
      default: {
        logger.error(format(loggerMessages.GET_USER_LOGIN.FETCH.ERROR, response.status, response.statusText));
        throw new Error(String(httpStatuses.SERVER_ERROR));
      }
    }
  }

  async getUser(id: string): Promise<IResponseUserFullConvert> {
    const response = await fetchUser(id);
    switch (response.status) {
      case httpStatuses.OK: {
        logger.info(format(loggerMessages.GET_USER_ID.FETCH.SUCCESS, response.status));
        return UserMapper.getConvertUser(await response.data);
      }
      case httpStatuses.BAD_REQUEST: {
        logger.error(format(loggerMessages.GET_USER_ID.FETCH.ERROR, response.status));
        throw new Error(String(httpStatuses.BAD_REQUEST));
      }
      default: {
        logger.error(format(loggerMessages.GET_USER_ID.FETCH.ERROR, response.status, response.statusText));
        throw new Error(String(httpStatuses.SERVER_ERROR));
      }
    }
  }

  async getUsers(page: number, limit: number): Promise<IResponseList<IResponseUserPreviewConvert>> {
    const response = await fetchUsers(page, limit);
    switch (response.status) {
      case httpStatuses.OK: {
        logger.info(format(loggerMessages.GET_USER_LIST.FETCH.SUCCESS, response.status));
        return UserMapper.getConvertUsersList(await response.data);
      }
      default: {
        logger.error(format(loggerMessages.GET_USER_LIST.FETCH.ERROR, response.status, response.statusText));
        throw new Error(loggerMessages.GET_USER_LIST.FETCH.ERROR);
      }
    }
  }
}

export default new UserService();
