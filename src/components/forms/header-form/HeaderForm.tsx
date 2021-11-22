import React from 'react';
import { ReadOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Header from '../../header/Header';
import Container from '../../container/Container';
import { APPLICATION_LOGO, APPLICATION_NAME } from '../../../constants/common';
import Menu from '../../menu/Menu';
import { checkPictureAndGet } from '../../../utils/common';

interface IMenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

type MenuItemsType = Array<IMenuItem>;

const HeaderForm = () => {
  const [cookies] = useCookies();
  const menuItems: MenuItemsType = [
    { icon: <TeamOutlined />, label: 'Пользователи', path: '/users' },
    { icon: <ReadOutlined />, label: 'Посты', path: '/posts' },
  ];
  return (
    <Header>
      <Container>
        <Header.Body>
          <Header.Logo src={APPLICATION_LOGO} text={APPLICATION_NAME} />
          <Menu>
            {menuItems.map((item: IMenuItem, index) => (
              <Link to={item.path} key={index}>
                <Menu.Item>
                  {item.icon}
                  {item.label}
                </Menu.Item>
              </Link>
            ))}
          </Menu>
          <Header.Auth
            authData={
              (cookies.user_id && cookies.user_picture && cookies.user_first_name) && {
                userID: cookies.user_id,
                userAvatarSrc: checkPictureAndGet(cookies.user_picture),
                userFirstName: cookies.user_first_name
              }
            }
          />
        </Header.Body>
      </Container>
    </Header>
  );
};

export default HeaderForm;
