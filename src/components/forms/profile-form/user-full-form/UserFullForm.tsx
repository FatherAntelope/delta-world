import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'antd';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import Preloader from '../../../preloader/Preloader';
import {
  checkPictureAndGet, getDateRU, getUserFullName, getUserGenderRu
} from '../../../../utils/common';
import CardUser from '../../../cards/card-user/CardUser';
import '../../../flex-grid/FlexGrid.css';

interface ISearchParams {
  id: string;
}

const UserFullForm = () => {
  const searchParams = useParams<ISearchParams>();

  const { user, isLoading, error } = useTypedSelector((state) => state.userFullForm);
  const { loadUserFullFormAC } = useActions();

  useEffect(() => {
    loadUserFullFormAC(searchParams.id);
  }, []);

  if (isLoading) {
    return <div style={{ height: 316 }}><Preloader /></div>;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <div className="row">
      <CardUser.Full
        isEdit
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
