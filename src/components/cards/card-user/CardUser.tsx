import React from 'react';
import './CardUser.css';

interface IProps {
  imageURL: string;
  fullName: string;
}

const CardUser = ({ imageURL, fullName }: IProps) => (
  <div className="card-user">
    <div className="card-user__image">
      <img src={imageURL} alt="img" />
    </div>
    <p className="card-user__text">
      {fullName}
    </p>
  </div>
);

export default CardUser;
