import React from 'react';
import { Avatar } from 'antd';
import './CardPost.css';

interface IProps {
  imageURL: string;
  text: string;
  userAvatarURL: string;
  userFullName: string;
  dateOfPublication: string;
}

const CardPost = ({
  imageURL, text, userAvatarURL, userFullName, dateOfPublication
}: IProps) => (
  <div className="card-post">
    <div className="card-post__header">
      <Avatar src={userAvatarURL} />
      <div className="card-post__info">
        <p className="card-post__title">{userFullName}</p>
        <p className="card-post__subtitle">{dateOfPublication}</p>
      </div>
    </div>
    <div className="card-post__image">
      <img src={imageURL} alt="img" />
    </div>
    <p className="card-post__text">
      {text}
    </p>
  </div>
);

export default CardPost;
