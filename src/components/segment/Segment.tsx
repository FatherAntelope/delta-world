import React from 'react';
import './Segment.css';

interface IProps {
  children: JSX.Element;
}

const Segment = ({ children }: IProps) => (
  <div className="segment">{children}</div>
);

export default Segment;
