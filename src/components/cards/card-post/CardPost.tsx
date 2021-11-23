import React from 'react';
import { Avatar } from 'antd';
import './CardPost.css';

interface IPropsCardPreview {
  text: string;
  userAvatarURL: string;
  userFullName: React.ReactNode;
  dateOfPublication: string;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

interface IPropsCardBig {
  text: string;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

interface IPropsHeaderBig {
  userAvatarURL: string;
  userFullName: React.ReactNode;
  dateOfPublication: string;
}

interface IPropsImage {
  imageURL: string;
}

interface IPropsCardMini {
  text: string;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

const CardPost = () => undefined;

CardPost.Big = ({
  text, children
}: IPropsCardBig) => (
  <div className="card-post card-post_big">
    {children}
    <p className="card-post__text_big">
      {text}
    </p>
  </div>
);

CardPost.Preview = ({
  text, userAvatarURL, userFullName, dateOfPublication, children
}: IPropsCardPreview) => (
  <div className="card-post">
    <div className="card-post__header">
      <Avatar src={userAvatarURL} />
      <div className="card-post__info">
        <div className="card-post__title">{userFullName}</div>
        <p className="card-post__subtitle">{dateOfPublication}</p>
      </div>
    </div>
    {children}
    <p className="card-post__text">
      {text}
    </p>
  </div>
);

CardPost.Image = ({ imageURL }: IPropsImage) => (
  <div className="card-post__image">
    <img src={imageURL} alt="img" />
  </div>
);

CardPost.ImageBig = ({ imageURL }: IPropsImage) => (
  <div className="card-post__image card-post__image_big">
    <img src={imageURL} alt="img" />
  </div>
);

CardPost.HeaderBig = ({ userAvatarURL, userFullName, dateOfPublication }: IPropsHeaderBig) => (
  <div className="card-post__header">
    <Avatar src={userAvatarURL} style={{ width: 32 }} />
    <div className="card-post__info card-post__info_big">
      <div className="card-post__title card-post__title_big">{userFullName}</div>
      <p className="card-post__subtitle card-post__subtitle_big">{dateOfPublication}</p>
    </div>
  </div>
);

CardPost.Mini = ({ text, children }: IPropsCardMini) => (
  <div className="card-post">
    {children}
    <p className="card-post__text">
      {text}
    </p>
  </div>
);

export default CardPost;
