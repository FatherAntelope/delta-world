import React from 'react';
import { Pagination } from 'antd';
import CardUser from '../../cards/card-user/CardUser';
import '../../flex-grid/FlexGrid.css';

const url = 'https://cdn.dribbble.com/users/985736/screenshots/2745335/086._progress_bar.png';

const UsersForm = () => (
  <>
    <div className="row">
      <div className="col-4">
        <CardUser imageURL={url} fullName="Test User Name" />
      </div>
      <div className="col-4">
        <CardUser imageURL={url} fullName="Test User Name" />
      </div>
      <div className="col-4">
        <CardUser imageURL={url} fullName="Test User Name" />
      </div>
      <div className="col-4">
        <CardUser imageURL={url} fullName="Test User Name" />
      </div>
      <div className="col-4">
        <CardUser imageURL={url} fullName="Test User Name" />
      </div>
      <div className="col-4">
        <CardUser imageURL={url} fullName="Test User Name" />
      </div>
    </div>
    <div className="row row__justify_end">
      <Pagination total={121} showSizeChanger={false} />
    </div>
  </>
);

export default UsersForm;
