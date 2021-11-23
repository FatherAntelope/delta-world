export interface IResponseList<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface IResponseUserPreview {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IResponseCommentPreview {
  id: string;
  message: string;
  owner: IResponseUserPreview;
  post: string;
  publishDate: string;
}

export interface IResponseUserFull {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
}

export interface IResponseUserAuth {
  id: string;
  firstName: string;
  picture: string;
}

export interface IResponsePostPreview {
  id: string;
  text: string;
  image: string;
  publishDate: string;
  owner: IResponseUserPreview;
}

export interface ICreateUser {
  title: 'ms' | 'mr';
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  email: string;
  dateOfBirth: string;
  phone: string;
}
