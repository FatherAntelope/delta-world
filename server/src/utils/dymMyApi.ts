import axios, { AxiosRequestConfig, Method } from 'axios';
import { API_HEADS, API_POINTS, BASE_URL } from '../constants/api/dumMyApi';
import { getApiKeysConfigs } from './configServer';

const { dummyapi } = getApiKeysConfigs();

const fetchBase = (url: string, method: Method, params?: object, body?: object) => {
  let config: AxiosRequestConfig = {
    method,
    headers: {
      [API_HEADS.APP_ID]: dummyapi
    }
  };

  if (params) config = { ...config, params };
  if (body) config = { ...config, data: body };

  return axios(url, config).then(data => data).catch(reason => reason.response);
}

const fetchUsers = (page: number, limit: number) => fetchBase(
  BASE_URL + API_POINTS.USER, 'GET', { page, limit }
);

const fetchUser = (id: string) => fetchBase(BASE_URL + API_POINTS.USER + `/${id}`, 'GET');

const fetchUpdateUser = (id: string, body: object) => fetchBase(
  BASE_URL + API_POINTS.USER + `/${id}`, 'PUT',undefined, body
);

const fetchCreateUser = (body: object) => fetchBase(
  BASE_URL + API_POINTS.USER_CREATE, 'POST', undefined, body
);

const fetchPosts = (page: number, limit: number) => fetchBase(
  BASE_URL + API_POINTS.POST, 'GET', { page, limit }
);

const fetchPost = (id: string) => fetchBase(BASE_URL + API_POINTS.POST + `/${id}`, 'GET');

const fetchPostsByUser = (id: string, page: number, limit: number) => fetchBase(
  BASE_URL + API_POINTS.USER + `/${id}` + API_POINTS.POST, 'GET', { page, limit }
);

const fetchCommentsByPost = (id: string, page: number, limit: number) => fetchBase(
  BASE_URL + API_POINTS.POST + `/${id}` + API_POINTS.COMMENT, 'GET', { page, limit }
);

export {
  fetchUsers, fetchUser, fetchPosts, fetchPost, fetchPostsByUser, fetchCommentsByPost, fetchCreateUser, fetchUpdateUser
};
