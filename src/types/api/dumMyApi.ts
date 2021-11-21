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

export interface IResponsePostPreview {
  id: string;
  text: string;
  image: string;
  likes?: number;
  tags?: Array<string>;
  publishDate: string;
  owner: IResponseUserPreview;
}
