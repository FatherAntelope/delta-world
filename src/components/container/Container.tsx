import React from 'react';
import './Container.css';

interface IProps {
  children: JSX.Element;
}

const Container = ({ children }: IProps) => <div className="container">{children}</div>;

export default Container;
