import React from 'react';
import './Main.css';

interface IProps {
  children?: JSX.Element;
}

const Main = ({ children }: IProps) => (
  <main className="main">
    {children}
  </main>
);

Main.defaultProps = {
  children: undefined
};

export default Main;
