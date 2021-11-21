import React from 'react';
import './CardUserFull.css';
import { EditOutlined } from '@ant-design/icons';

interface IProps {
  id: string;
  imageURL: string;
  fullName: React.ReactNode;
  gender: string;
  dateOfBirth: string;
  dateOfRegister: string;
  email: string;
  phone: string;
  isEdit: boolean;
}

const CardUserFull = ({
  id, imageURL, fullName, gender, dateOfRegister, dateOfBirth, email, phone, isEdit
}: IProps) => (
  <div className="card-user-full">
    <div className="card-user-full__body">
      <div className="card-user-full__image">
        <img src={imageURL} alt="img-user" />
      </div>
      <div className="card-user-full__content">
        <div>
          <h2 className="card-user-full__title">{fullName}</h2>
          <div className="card-user-full__info">
            <p className="card-user-full__text">
              <b>Пол: </b>
              {gender}
            </p>
            <p className="card-user-full__text">
              <b>Дата рождения: </b>
              {dateOfBirth}
            </p>
            <p className="card-user-full__text">
              <b>Дата регистрации: </b>
              {dateOfRegister}
            </p>
            <p className="card-user-full__text">
              <b>Email: </b>
              {email}
            </p>
            <p className="card-user-full__text">
              <b>Телефон: </b>
              {phone}
            </p>
          </div>
        </div>
        <div>
          <p className="card-user-full__text">
            <b>ID: </b>
            {id}
          </p>
        </div>
      </div>
    </div>
    {isEdit && (
      <div className="card-user-full__edit">
        <EditOutlined />
        <span>Редактировать</span>
      </div>
    )}
  </div>
);

export default CardUserFull;
