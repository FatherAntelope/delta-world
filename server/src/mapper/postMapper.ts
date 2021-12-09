import { IResponseList, IResponsePostPreview } from '../types/api/dumMyApi';
import { getConvertDateOfPublish } from "../utils/common";
import UserMapper from './userMapper';

class PostMapper {
  getConvertPosts(postList: IResponseList<IResponsePostPreview>): IResponseList<IResponsePostPreview> {
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
