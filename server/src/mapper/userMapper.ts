import { IResponseList, IResponseUserPreview, IResponseUserPreviewFullName } from '../types/api/dumMyApi';
import { getConvertUserFullName } from '../utils/common';

class UserMapper {
  getUsersFullName(userList: IResponseList<IResponseUserPreview>): IResponseList<IResponseUserPreviewFullName> {
    const data = userList.data.map((item: IResponseUserPreview) => this.getUserFullName(item));
    const { page, limit, total } = userList;
    return { data, page, limit, total };
  }

  getUserFullName(user: any): IResponseUserPreviewFullName {
    return {
      id: user.id,
      fullName: getConvertUserFullName(user.firstName, user.lastName),
      picture: user.picture,
      title: user.title
    };
  }
}

export default new UserMapper();
