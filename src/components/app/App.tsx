import React from 'react';
import './App.css';
import {
  ReadOutlined, TeamOutlined
} from '@ant-design/icons';
import { Switch } from 'antd';
import Wrapper from '../wrapper/Wrapper';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Container from '../container/Container';
import Menu from '../menu/Menu';
import {
  APPLICATION_COPYRIGHT_SYMBOL, APPLICATION_LOGO,
  APPLICATION_NAME,
  APPLICATION_YEAR_CURRENT, APPLICATION_YEAR_FOUNDATION
} from '../../constants/common';

function App() {
  const menuItems = [
    { icon: <TeamOutlined />, label: 'Пользователи' },
    { icon: <ReadOutlined />, label: 'Посты' },
  ];
  return (
    <div className="App">
      <Wrapper>
        <Header>
          <Container>
            <Header.Body>
              <Header.Logo src={APPLICATION_LOGO} text={APPLICATION_NAME} />
              <Menu>
                {menuItems.map((item, index) => (
                  <Menu.Item key={index}>
                    {item.icon}
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu>
              <Header.Auth authData={{ userAvatarSrc: APPLICATION_LOGO, userFirstName: 'Иванов' }} />
            </Header.Body>
          </Container>
        </Header>
        <Main />
        <Footer>
          <Container>
            <Footer.Body>
              <Footer.Copyright>
                {`
                ${APPLICATION_NAME} 
                ${APPLICATION_COPYRIGHT_SYMBOL} 
                ${APPLICATION_YEAR_FOUNDATION}-${APPLICATION_YEAR_CURRENT}
                `}
              </Footer.Copyright>
              <Switch checkedChildren="Темная" unCheckedChildren="Светлая" />
            </Footer.Body>
          </Container>
        </Footer>
      </Wrapper>
    </div>
  );
}

export default App;
