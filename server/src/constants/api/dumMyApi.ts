interface IApiHeads {
  APP_ID: string;
  CONTENT_TYPE: string
}

const BASE_URL: string = 'https://dummyapi.io/data/v1';

enum API_POINTS {
  USER = '/user',
  POST = '/post',
  COMMENT = '/comment',
  USER_CREATE = '/user/create'
}

enum PAGE_OPTIONS {
  MIN = 0
}

enum LIMIT_OPTIONS {
  MAX = 20,
  MIN = 5
}

const API_HEADS: IApiHeads = {
  APP_ID: 'app-id',
  CONTENT_TYPE: 'Content-Type'
};

enum ContentTypes {
  JSON = 'application/json;charset=utf-8',
}

export {
  BASE_URL, API_HEADS, ContentTypes, API_POINTS, PAGE_OPTIONS, LIMIT_OPTIONS
};
