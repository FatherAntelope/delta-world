interface IApiHeads {
  APP_ID: string;
}

const API_KEY: string = '617d424dbe5f9771bd07c1b0';

const BASE_URL: string = 'https://dummyapi.io/data/v1';

const API_POINT_USER: string = '/user';
const API_POINT_POST: string = '/post';

const API_HEADS: IApiHeads = {
  APP_ID: 'app-id'
};

export {
  BASE_URL, API_KEY, API_HEADS, API_POINT_USER, API_POINT_POST
};
