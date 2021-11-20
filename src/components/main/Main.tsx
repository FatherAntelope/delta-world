import React from 'react';
import './Main.css';

interface IPaddings {
  top: number;
  bottom: number;
}

interface IProps {
  children?: Array<JSX.Element> | JSX.Element;
  paddings?: IPaddings
}

const Main = ({ children, paddings }: IProps) => (
  <main
    className="main"
    style={{ paddingTop: `${paddings?.top}px`, paddingBottom: `${paddings?.bottom}px` }}
  >
    {Array.isArray(children) ? children.map((item: JSX.Element) => item) : children}
  </main>
);

Main.defaultProps = {
  children: undefined,
  paddings: { top: 10, bottom: 10 }
};

export default Main;
