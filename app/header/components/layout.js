import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;
import { Button, Icon, Input, Dropdown, Menu, Switch } from 'antd'

const HeaderLayout = (props) => {

  return (
    <Header
      id='header-app'
      className="header"
    >
      <Row>
        <Col span={4}>
          <img 
            className="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </Col>
        <Col span={20}>
          <a href="#">Link</a>
        </Col>
      </Row>

    </Header>

    // <div id='header-app' className="header">
    
    //   {/* <Button type="primary">
    //     Shuffle
    //   </Button>
    //   <Input
    //     style={{ marginLeft: 15, minWidth: 130, maxWidth: 300 }}
    //     suffix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
    //     placeholder="input search text"
    //   />
    //   <Dropdown
    //     trigger={['click']}
    //     overlay={
    //       <Menu>
    //         <Menu.Item key="1">1</Menu.Item>
    //         <Menu.Item key="2">2</Menu.Item>
    //         <Menu.Item key="3">3</Menu.Item>
    //         <Menu.Item key="4">4</Menu.Item>
    //         <Menu.Item key="5">5</Menu.Item>
    //         <Menu.Item key="6">6</Menu.Item>
    //       </Menu>
    //     }>
    //     <Button style={{ marginLeft: 15, minWidth: 130 }}>
    //       3 Columns <Icon type="down" />
    //     </Button>
    //   </Dropdown>
    //   <Dropdown
    //     trigger={['click']}
    //     overlay={
    //       <Menu>
    //         <Menu.Item key="0">0</Menu.Item>
    //         <Menu.Item key="20">20</Menu.Item>
    //         <Menu.Item key="40">40</Menu.Item>
    //         <Menu.Item key="70">70</Menu.Item>
    //       </Menu>
    //     }>
    //     <Button style={{ marginLeft: 15, minWidth: 130 }}>
    //       10 px margin <Icon type="down" />
    //     </Button>
    //   </Dropdown>
    //   <span style={{ marginLeft: 15 }}>Individual height</span>
    //   <Switch style={{ marginLeft: 15 }} defaultChecked /> */}
    // </div>
  )
}

export default HeaderLayout;
