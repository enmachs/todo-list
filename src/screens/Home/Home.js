import React, { Component } from 'react';

// Home Layout
import HomeLayout from './Layout';

// Header
import HeaderLayout from '../../components/Header/Header';

// Logo
import Logo from '../../components/UI/Logo';


// Menu
import Menu from '../../components/Menu/Menu';

// // Cards
import Cards from '../../components/Card';
// import ModalContainer from '../../cards/containers/modal-card';
// import Modal from '../../cards/components/modal';


// Data
// import data from '../../api';

// antd layout
import { Row, Col } from 'antd';

class Home extends Component {
  // state = {
  //   cards: []
  // }
  addNewCard = (newCard) => {
    this.cardChild.addCard(newCard);
  }
  // componentDidMount(){
  //   this.setState({
  //     cards: data.cards
  //     // tasks: data.tasks
  //   })
  // }
  render () {
    return (
      <HomeLayout>
        <Row>
          <HeaderLayout>
            <Col span={2}>
              <Logo 
                size={45}
                url="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
            </Col>
            <Col span={2} offset={20}>
              <Menu 
                addCard={this.addNewCard}
              />
            </Col>

          </HeaderLayout>
        </Row>
        <Cards
          ref={instance => {this.cardChild = instance}}
        />
      </HomeLayout>
    )
  }
}

export default Home;
