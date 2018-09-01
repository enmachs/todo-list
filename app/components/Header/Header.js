import React from 'react';
import { Layout, Row } from 'antd';
const { Header } = Layout;
import './Header.scss';

const HeaderLayout = (props) => {

  return (
    <Header
      className="header"
    >
      <Row>
        { props.children }
      </Row>
    </Header>
  )
}

export default HeaderLayout;
