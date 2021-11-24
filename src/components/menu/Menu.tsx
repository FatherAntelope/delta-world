import React from 'react';
import './Menu.css';

interface IProps {
  children: React.ReactNode;
}

interface IPropItem {
  // eslint-disable-next-line react/require-default-props
  isDarkTheme?: boolean;
  // eslint-disable-next-line react/require-default-props
  icon?: React.ReactNode;
  label: string;
}

const Menu = ({ children }: IProps) => (
  <div className="menu">
    {children}
  </div>
);

Menu.Item = ({ isDarkTheme, icon, label }: IPropItem) => (
  <div className={`menu__item ${isDarkTheme ? 'menu__item_theme_dark' : ''} `}>
    {icon}
    <span style={{ marginLeft: 7 }}>{label}</span>
  </div>
);

export default Menu;
