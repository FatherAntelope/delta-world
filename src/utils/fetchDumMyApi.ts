import {
  API_HEADS, API_KEY, API_POINT_POST, API_POINT_USER, BASE_URL
} from '../constants/api/dumMyApi';

const fetchBase = (baseURL: string, apiPoint: string, searchParams?: Record<string, any>) => {
  let url = baseURL + apiPoint;
  url += searchParams ? `?${new URLSearchParams(searchParams)}` : '';

  return fetch(url.toString(), {
    method: 'GET',
    headers: new Headers({
      [API_HEADS.APP_ID]: API_KEY
    })
  });
};

const fetchUsersForm = (page: number, limit: number) => fetchBase(BASE_URL, API_POINT_USER, { page, limit });
const fetchUserFullForm = (id: string) => fetchBase(BASE_URL, `${API_POINT_USER}/${id}`);
const fetchUserPostsForm = (id: string, page: number, limit: number) => fetchBase(
  BASE_URL, `${API_POINT_USER}/${id}${API_POINT_POST}`, { page, limit }
);
const fetchPostsForm = (page: number, limit: number) => fetchBase(BASE_URL, API_POINT_POST, { page, limit });

export {
  fetchUsersForm, fetchPostsForm, fetchUserFullForm, fetchUserPostsForm
};
