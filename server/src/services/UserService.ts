import {fetchUsers, fetchUser, fetchCreateUser, fetchUpdateUser} from '../utils/dymMyApi';
import {
  IResponseList, IResponseUserAuth,
  IResponseUserFullConvert,
  IResponseUserPreviewConvert
} from '../types/api/dumMyApi';
import loggerMessages from '../constants/loggerMessages';
import logger from '../logger';
import format from 'string-format';
import UserMapper from '../mapper/userMapper';
import HttpStatuses from '../constants/httpStatuses';

class UserService {
  async updateUser(id: string, body: object): Promise<IResponseUserFullConvert> {
    const response = await fetchUpdateUser(id, body);
    switch (response.status) {
      case HttpStatuses.OK: {
        logger.info(format(loggerMessages.UPDATE_USER.FETCH.SUCCESS, response.status));
        return UserMapper.getConvertUser(await response.data);
      }
      case HttpStatuses.BAD_REQUEST: {
        logger.error(format(loggerMessages.UPDATE_USER.FETCH.ERROR, response.status));
        throw new Error(String(HttpStatuses.BAD_REQUEST));
      }
      default: {
        logger.error(format(loggerMessages.UPDATE_USER.FETCH.ERROR, response.status, response.statusText));
        throw new Error(String(HttpStatuses.SERVER_ERROR));
      }
    }
  }

  async createUser(body: object): Promise<IResponseUserAuth> {
    const response = await fetchCreateUser(body);
    switch (response.status) {
      case HttpStatuses.OK: {
        logger.info(format(loggerMessages.CREATE_USER.FETCH.SUCCESS, response.status));
        return UserMapper.getConvertUserAuth(await response.data);
      }
      default: {
        logger.error(format(loggerMessages.CREATE_USER.FETCH.ERROR, response.status, response.statusText));
        throw new Error(String(Object.values(response.data.data)[0]));
      }
    }
  }

  async loginUser(id: string): Promise<IResponseUserAuth> {
    const response = await fetchUser(id);
    switch (response.status) {
      case HttpStatuses.OK: {
        logger.info(format(loggerMessages.GET_USER_LOGIN.FETCH.SUCCESS, response.status));
        return UserMapper.getConvertUserAuth(await response.data);
      }
      case HttpStatuses.BAD_REQUEST: {
        logger.error(format(loggerMessages.GET_USER_LOGIN.FETCH.ERROR, response.status));
        throw new Error(String(HttpStatuses.BAD_REQUEST));
      }
      default: {
        logger.error(format(loggerMessages.GET_USER_LOGIN.FETCH.ERROR, response.status, response.statusText));
        throw new Error(String(HttpStatuses.SERVER_ERROR));
      }
    }
  }

  async getUser(id: string): Promise<IResponseUserFullConvert> {
    const response = await fetchUser(id);
    switch (response.status) {
      case HttpStatuses.OK: {
        logger.info(format(loggerMessages.GET_USER_ID.FETCH.SUCCESS, response.status));
        return UserMapper.getConvertUser(await response.data);
      }
      case HttpStatuses.BAD_REQUEST: {
        logger.error(format(loggerMessages.GET_USER_ID.FETCH.ERROR, response.status));
        throw new Error(String(HttpStatuses.BAD_REQUEST));
      }
      default: {
        logger.error(format(loggerMessages.GET_USER_ID.FETCH.ERROR, response.status, response.statusText));
        throw new Error(String(HttpStatuses.SERVER_ERROR));
      }
    }
  }

  async getUsers(page: number, limit: number): Promise<IResponseList<IResponseUserPreviewConvert>> {
    const response = await fetchUsers(page, limit);
    switch (response.status) {
      case HttpStatuses.OK: {
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
