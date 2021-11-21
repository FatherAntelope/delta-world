import React, { useEffect } from 'react';
import { Alert, Pagination } from 'antd';
import CardUser from '../../cards/card-user/CardUser';
import '../../flex-grid/FlexGrid.css';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IResponseUserPreview } from '../../../types/api/dumMyApi';
import { useActions } from '../../../hooks/useActions';
import { checkPictureAndGet, getUserFullName } from '../../../utils/common';
import Preloader from '../../preloader/Preloader';

const UsersForm = () => {
  const { users, isLoading, error } = useTypedSelector((state) => state.usersForm);
  const { loadUsersFormAC } = useActions();

  useEffect(() => {
    loadUsersFormAC(0, 6);
  }, []);

  const handlePaginationChange = (e: any) => {
    loadUsersFormAC(e - 1, 6);
  };

  if (isLoading) {
    return <Preloader />;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <>
      <div className="row">
        {users.data.map((item: IResponseUserPreview) => (
          <div className="col-4" key={item.id}>
            <CardUser
              imageURL={checkPictureAndGet(item.picture)}
              fullName={getUserFullName(item.title, item.firstName, item.lastName)}
            />
          </div>
        ))}
      </div>
      <div className="row row__justify_end">
        <Pagination
          pageSize={users.limit}
          total={users.total}
          current={users.page + 1}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default UsersForm;
