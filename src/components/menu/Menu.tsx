import React from 'react';
import './Menu.css';

interface IProps {
  children: Array<JSX.Element> | JSX.Element;
}

interface IPropItem {
  children: any;
}

const Menu = ({ children }: IProps) => (
  <div className="menu">
    {Array.isArray(children) ? children.map((item: JSX.Element) => item) : children}
  </div>
);

Menu.Item = ({ children }: IPropItem) => (
  <div className="menu__item">{children}</div>
);

export default Menu;
