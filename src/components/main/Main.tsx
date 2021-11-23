import React from 'react';
import './Main.css';

interface IPaddings {
  top: number;
  bottom: number;
}

interface IProps {
  children?: React.ReactNode;
  paddings?: IPaddings
}

const Main = ({ children, paddings }: IProps) => (
  <main
    className="main"
    style={{ paddingTop: `${paddings?.top}px`, paddingBottom: `${paddings?.bottom}px` }}
  >
    {children}
  </main>
);

Main.defaultProps = {
  children: undefined,
  paddings: { top: 10, bottom: 10 }
};

export default Main;
