import {
  IResponseList, IResponsePost, IResponsePostConvert, IResponsePostPreview, IResponsePostPreviewConvert
} from '../types/api/dumMyApi';
import { getConvertDateOfPublish } from "../utils/common";
import UserMapper from './userMapper';

class PostMapper {
  getConvertPost(postList: IResponsePost): IResponsePostConvert {
    return ({
      id: postList.id,
      text: postList.text,
      image: postList.image,
      publishDate: getConvertDateOfPublish(postList.publishDate),
      owner: UserMapper.getConvertUserPreview(postList.owner)
    });
  }

  getConvertPosts(postList: IResponseList<IResponsePostPreview>): IResponseList<IResponsePostPreviewConvert> {
    const data = postList.data.map((item: IResponsePostPreview) => ({
      id: item.id,
      text: item.text,
      image: item.image,
      publishDate: getConvertDateOfPublish(item.publishDate),
      owner: UserMapper.getConvertUserPreview(item.owner)
    }));
    const { page, limit, total } = postList;
    return { data, page, limit, total };
  }
}

export default new PostMapper();
