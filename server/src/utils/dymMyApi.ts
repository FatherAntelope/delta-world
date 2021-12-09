import axios from 'axios';
import { API_HEADS, API_POINTS, BASE_URL } from "../constants/api/dumMyApi";
import { getApiKeysConfigs } from "./configServer";

const { dummyapi } = getApiKeysConfigs();

const fetchUsers = (page: number, limit: number) => axios.get(BASE_URL + API_POINTS.USER, {
  headers: {
    [API_HEADS.APP_ID]: dummyapi
  },
  params: {
    page: page,
    limit: limit
  }
}).then(data => data).catch(reason => reason);

export { fetchUsers };
