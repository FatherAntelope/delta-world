import React from 'react';
import './Wrapper.css';

interface IProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: IProps) => (
  <div className="wrapper">
    <div className="wrapper__grid">
      { children }
    </div>
  </div>
);

export default Wrapper;
