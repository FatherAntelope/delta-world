import React from 'react';
import './Wrapper.css';

interface IProps {
  children: Array<JSX.Element>;
}

const Wrapper = ({ children }: IProps) => (
  <div className="wrapper">
    <div className="wrapper__grid">
      { children.map((item: JSX.Element) => item) }
    </div>
  </div>
);

export default Wrapper;
