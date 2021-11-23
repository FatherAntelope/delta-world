import React from 'react';
import './Header.css';
import { Avatar } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { EMPTY_STRING } from '../../constants/common';
import { useActions } from '../../hooks/useActions';

interface IProps {
  children: React.ReactNode;
}

interface IPropsBody {
  children: React.ReactNode;
}

interface IPropsIcon {
  src: string;
  text: string;
}

interface IAuthData {
  userID: string;
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
    {children}
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
  const [cookies, setCookies] = useCookies();
  const { logoutUserFormAC } = useActions();
  const localeHistory = useHistory();

  const handleExitClick = () => {
    setCookies('user_id', EMPTY_STRING, { maxAge: -1 });
    setCookies('user_picture', EMPTY_STRING, { maxAge: -1 });
    setCookies('user_first_name', EMPTY_STRING, { maxAge: -1 });
    logoutUserFormAC();
    localeHistory.push('/login');
  };

  const handleGoProfileClick = () => {
    localeHistory.push(`/user/${cookies.user_id}`);
  };

  if (authData) {
    return (
      <div className="header__auth">
        <div className="header__auth-avatar">
          <Avatar src={authData.userAvatarSrc} alt="user-avatar" />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <p className="header__auth-text" onClick={handleGoProfileClick}>{authData.userFirstName}</p>
        </div>
        <div className="header__auth-divider" />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <p className="header__auth-text header__auth-text_active" onClick={handleExitClick}>Выход</p>
      </div>
    );
  }
  return (
    <div className="header__auth">
      <Link to="/login"><p className="header__auth-text">Вход</p></Link>
      <div className="header__auth-divider" />
      <Link to="/register"><p className="header__auth-text">Регистрация</p></Link>
    </div>
  );
};

export default Header;
