import React from 'react';
import { Switch } from 'antd';
import Container from '../../container/Container';
import Footer from '../../footer/Footer';
import {
  APPLICATION_COPYRIGHT_SYMBOL,
  APPLICATION_NAME,
  APPLICATION_YEAR_CURRENT,
  APPLICATION_YEAR_FOUNDATION
} from '../../../constants/common';

const FooterForm = () => (
  <Footer>
    <Container>
      <Footer.Body>
        <Footer.Copyright>
          {`
            ${APPLICATION_NAME} 
            ${APPLICATION_COPYRIGHT_SYMBOL} 
            ${APPLICATION_YEAR_FOUNDATION}-${APPLICATION_YEAR_CURRENT}
          `}
        </Footer.Copyright>
        <Switch checkedChildren="Темная" unCheckedChildren="Светлая" />
      </Footer.Body>
    </Container>
  </Footer>
);

export default FooterForm;
