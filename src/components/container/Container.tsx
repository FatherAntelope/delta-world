import React from 'react';
import './Container.css';

interface IProps {
  children: Array<JSX.Element> | JSX.Element;
}

const Container = ({ children }: IProps) => (
  <div className="container">
    {Array.isArray(children) ? children.map((item: JSX.Element) => item) : children}
  </div>
);

export default Container;
