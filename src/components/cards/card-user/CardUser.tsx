import React from 'react';
import './CardUser.css';

interface IProps {
  imageURL: string;
  fullName: React.ReactNode;
}

const CardUser = ({ imageURL, fullName }: IProps) => (
  <div className="card-user">
    <div className="card-user__image">
      <img src={imageURL} alt="img" />
    </div>
    <div className="card-user__text">
      {fullName}
    </div>
  </div>
);

export default CardUser;
