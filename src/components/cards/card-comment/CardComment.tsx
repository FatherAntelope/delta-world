import React from 'react';
import './CardComment.css';
import { Avatar } from 'antd';

interface IProps {
  text: string;
  userAvatarURL: string;
  userFullName: React.ReactNode;
  dateOfPublication: string;
}

const CardComment = ({
  text, userAvatarURL, userFullName, dateOfPublication
}: IProps) => (
  <div className="card-comment">
    <div className="card-comment__content">
      <div className="card-comment__avatar">
        <Avatar src={userAvatarURL} />
      </div>
      <div className="card-comment__body">
        <div className="card-comment__info">
          <div className="card-comment__name">{userFullName}</div>
          <div className="card-comment__date">{dateOfPublication}</div>
        </div>
        <p className="card-comment__text">{text}</p>
      </div>
    </div>
  </div>
);

export default CardComment;
