import React from 'react';
import { ReadOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Header from '../../header/Header';
import Container from '../../container/Container';
import { APPLICATION_LOGO, APPLICATION_NAME } from '../../../constants/common';
import Menu from '../../menu/Menu';

const HeaderForm = () => {
  const menuItems = [
    { icon: <TeamOutlined />, label: 'Пользователи', path: 'users' },
    { icon: <ReadOutlined />, label: 'Посты', path: '/posts' },
  ];
  return (
    <Header>
      <Container>
        <Header.Body>
          <Header.Logo src={APPLICATION_LOGO} text={APPLICATION_NAME} />
          <Menu>
            {menuItems.map((item, index) => (
              <Link to={item.path} key={index}>
                <Menu.Item>
                  {item.icon}
                  {item.label}
                </Menu.Item>
              </Link>
            ))}
          </Menu>
          <Header.Auth />
        </Header.Body>
      </Container>
    </Header>
  );
};

export default HeaderForm;
