import {
  API_HEADS, API_KEY, API_POINT_POST, API_POINT_USER, API_POINT_USER_CREATE, BASE_URL, ContentTypes, METHODS_QUERY
} from '../constants/api/dumMyApi';

const fetchBase = (baseURL: string, apiPoint: string, searchParams?: Record<string, any>) => {
  let url = baseURL + apiPoint;
  url += searchParams ? `?${new URLSearchParams(searchParams)}` : '';

  return fetch(url.toString(), {
    method: METHODS_QUERY.GET,
    headers: new Headers({
      [API_HEADS.APP_ID]: API_KEY
    })
  });
};

const fetchBasePost = (baseURL: string, apiPoint: string, body?: string) => {
  const url = baseURL + apiPoint;

  return fetch(url.toString(), {
    method: METHODS_QUERY.POST,
    headers: new Headers({
      [API_HEADS.APP_ID]: API_KEY,
      [API_HEADS.CONTENT_TYPE]: ContentTypes.JSON
    }),
    body
  });
};

const fetchUsersForm = (page: number, limit: number) => fetchBase(BASE_URL, API_POINT_USER, { page, limit });
const fetchUserFullForm = (id: string) => fetchBase(BASE_URL, `${API_POINT_USER}/${id}`);
const fetchUserPostsForm = (id: string, page: number, limit: number) => fetchBase(
  BASE_URL, `${API_POINT_USER}/${id}${API_POINT_POST}`, { page, limit }
);
const fetchPostsForm = (page: number, limit: number) => fetchBase(BASE_URL, API_POINT_POST, { page, limit });

const fetchRegisterUser = (body: string) => fetchBasePost(BASE_URL, API_POINT_USER_CREATE, body);

export {
  fetchUsersForm, fetchPostsForm, fetchUserFullForm, fetchUserPostsForm, fetchRegisterUser
};
