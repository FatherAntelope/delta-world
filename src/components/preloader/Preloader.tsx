import React from 'react';
import './Preloader.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Preloader = () => (
  <div className="preloader">
    <Spin indicator={<LoadingOutlined className="preloader__spin" spin />} />
  </div>
);

export default Preloader;
