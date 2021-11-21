import React, { useEffect } from 'react';
import { Alert, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import CardUser from '../../cards/card-user/CardUser';
import '../../flex-grid/FlexGrid.css';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IResponseUserPreview } from '../../../types/api/dumMyApi';
import { useActions } from '../../../hooks/useActions';
import { checkPictureAndGet, getUserFullName } from '../../../utils/common';
import Preloader from '../../preloader/Preloader';
import { FORM_LIMIT_USERS } from '../../../constants/common';
import Tooltip from '../../tooltip/Tooltip';

const UsersForm = () => {
  const { users, isLoading, error } = useTypedSelector((state) => state.usersForm);
  const { loadUsersFormAC } = useActions();

  useEffect(() => {
    loadUsersFormAC(0, FORM_LIMIT_USERS);
  }, []);

  const handlePaginationChange = (e: any) => {
    loadUsersFormAC(e - 1, FORM_LIMIT_USERS);
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
            <CardUser.Preview
              imageURL={checkPictureAndGet(item.picture)}
              fullName={(
                <Tooltip textInfo={item.id}>
                  <Link to={`/user/${item.id}`}>
                    {getUserFullName(item.title, item.firstName, item.lastName)}
                  </Link>
                </Tooltip>
              )}
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
