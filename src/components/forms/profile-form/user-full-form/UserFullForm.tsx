import React from 'react';
import { useCookies } from 'react-cookie';
import { Alert } from 'antd';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Preloader from '../../../preloader/Preloader';
import {
  checkPictureAndGet, getDateRU, getUserFullName, getUserGenderRu
} from '../../../../utils/common';
import CardUser from '../../../cards/card-user/CardUser';
import '../../../flex-grid/FlexGrid.css';
import { useActions } from '../../../../hooks/useActions';
import { ModalID } from '../../../../constants/common';

const UserFullForm = () => {
  const [cookies] = useCookies();
  const { user, isLoading, error } = useTypedSelector((state) => state.userFullForm);
  const { openModalsFormAC } = useActions();

  const handleClickOpenModalUpdateUser = () => {
    openModalsFormAC(ModalID.UPDATE_USER, { userID: cookies.user_id });
  };

  if (isLoading) {
    return <div style={{ height: 316 }}><Preloader /></div>;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <div className="row">
      <CardUser.Full
        edit={
          (cookies.user_id === user.id) && (
            <CardUser.Edit onClick={handleClickOpenModalUpdateUser} />
          )
        }
        id={user.id}
        imageURL={checkPictureAndGet(user.picture)}
        fullName={getUserFullName(user.title, user.firstName, user.lastName)}
        gender={getUserGenderRu(user.gender)}
        dateOfBirth={getDateRU(user.dateOfBirth)}
        dateOfRegister={getDateRU(user.registerDate)}
        email={user.email}
        phone={user.phone}
      />
    </div>
  );
};

export default UserFullForm;
