import { IResponseList, IResponseUserPreview, IResponseUserPreviewFullName } from "../types/api/dumMyApi";

class UserMapper {
  getUsersFullName(userList: IResponseList<IResponseUserPreview>): IResponseList<IResponseUserPreviewFullName> {
    const data = userList.data.map((item: IResponseUserPreview) => ({
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      picture: item.picture,
      title: item.title
    }));
    const { page, limit, total } = userList;
    return { data, page, limit, total };
  }
}

export default new UserMapper();
