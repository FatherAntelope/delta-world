import React from 'react';
import './Header.css';
import { Avatar } from 'antd';

interface IProps {
  children: JSX.Element;
}

interface IPropsBody {
  children: Array<JSX.Element> | JSX.Element;
}

interface IPropsIcon {
  src: string;
  text: string;
}

interface IAuthData {
  userAvatarSrc: string;
  userFirstName: string;
}

interface IPropsAuth {
  // eslint-disable-next-line react/require-default-props
  authData?: IAuthData;
}

const Header = ({ children }: IProps) => (
  <header className="header">
    {children}
  </header>
);

Header.Body = ({ children }: IPropsBody) => (
  <div className="header__body">
    {Array.isArray(children) ? children.map((item: JSX.Element) => item) : children}
  </div>
);

Header.Logo = ({ src, text }: IPropsIcon) => (
  <div className="header__logo">
    <div className="header__logo-img">
      <img src={src} alt="main-icon" />
    </div>
    <p className="header__logo-text">{text}</p>
  </div>
);

Header.Auth = ({ authData }: IPropsAuth) => {
  if (authData) {
    return (
      <div className="header__auth">
        <div className="header__auth-avatar">
          <Avatar src={authData.userAvatarSrc} alt="user-avatar" />
          <p className="header__auth-text">{authData.userFirstName}</p>
        </div>
        <div className="header__auth-divider" />
        <p className="header__auth-text header__auth-text_active">Выход</p>
      </div>
    );
  }
  return (
    <div className="header__auth">
      <p className="header__auth-text">Вход</p>
      <div className="header__auth-divider" />
      <p className="header__auth-text">Регистрация</p>
    </div>
  );
};

export default Header;
