import React from 'react';
import { Avatar } from 'antd';
import './CardPost.css';

interface IPropsCardPreview {
  imageURL: string;
  text: string;
  userAvatarURL: string;
  userFullName: React.ReactNode;
  dateOfPublication: string;
}

interface IPropsCardMini {
  imageURL: string;
  text: string;
}

const CardPost = () => undefined;

CardPost.Preview = ({
  imageURL, text, userAvatarURL, userFullName, dateOfPublication
}: IPropsCardPreview) => (
  <div className="card-post">
    <div className="card-post__header">
      <Avatar src={userAvatarURL} />
      <div className="card-post__info">
        <div className="card-post__title">{userFullName}</div>
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

CardPost.Mini = ({
  imageURL, text
}: IPropsCardMini) => (
  <div className="card-post">
    <div className="card-post__image">
      <img src={imageURL} alt="img" />
    </div>
    <p className="card-post__text">
      {text}
    </p>
  </div>
);

export default CardPost;
