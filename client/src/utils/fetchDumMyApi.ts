import axios, { Method, AxiosRequestConfig } from 'axios';
import {
  API_HEADS, API_KEY, API_POINT_USER, ApiPoints, BASE_SERVER_URL, ContentTypes, METHODS_QUERY
} from '../constants/api/dumMyApi';

const fetchBase = (url: string, method: Method, params?: object, body?: object) => {
  let config: AxiosRequestConfig = {
    method,
  };

  if (params) config = { ...config, params };
  if (body) config = { ...config, data: body };

  return axios(url, config).then((data) => data).catch((reason) => reason.response);
};

const fetchBaseSend = (baseURL: string, apiPoint: string, method: string, body?: string) => {
  const url = baseURL + apiPoint;

  return fetch(url.toString(), {
    method,
    headers: new Headers({
      [API_HEADS.APP_ID]: API_KEY,
      [API_HEADS.CONTENT_TYPE]: ContentTypes.JSON
    }),
    body
  });
};

const fetchUsersForm = (page: number, limit: number) => fetchBase(
  BASE_SERVER_URL + ApiPoints.USER, 'GET', { page, limit }
);
const fetchPostsForm = (page: number, limit: number) => fetchBase(
  BASE_SERVER_URL + ApiPoints.POST, 'GET', { page, limit }
);
const fetchPostForm = (id: string) => fetchBase(`${BASE_SERVER_URL + ApiPoints.POST}/${id}`, 'GET');
const fetchUserFullForm = (id: string) => fetchBase(`${BASE_SERVER_URL + ApiPoints.USER}/${id}`, 'GET');
const fetchUserLoginForm = (id: string) => fetchBase(`${BASE_SERVER_URL + ApiPoints.USER}/${id}/login`, 'GET');
const fetchUserPostsForm = (id: string, page: number, limit: number) => fetchBase(
  `${BASE_SERVER_URL + ApiPoints.USER}/${id}${ApiPoints.POST}`, 'GET', { page, limit }
);
const fetchPostCommentsForm = (id: string, page: number, limit: number) => fetchBase(
  `${BASE_SERVER_URL + ApiPoints.POST}/${id}${ApiPoints.COMMENT}`, 'GET', { page, limit }
);

const fetchRegisterUser = (body: object) => fetchBase(
  BASE_SERVER_URL + ApiPoints.USER_CREATE, 'POST', undefined, body
);
const fetchUpdateUser = (id:string, body: string) => fetchBaseSend(
  BASE_SERVER_URL, `${API_POINT_USER}/${id}`, METHODS_QUERY.PUT, body
);

export {
  fetchUsersForm, fetchPostsForm, fetchUserFullForm, fetchUserPostsForm, fetchRegisterUser, fetchPostCommentsForm,
  fetchPostForm, fetchUpdateUser, fetchUserLoginForm
};
