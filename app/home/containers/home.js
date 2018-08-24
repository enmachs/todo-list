import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';

// Cards
import CardsContainer from '../../cards/containers/index';
import ModalContainer from '../../cards/containers/modal-card';
import Modal from '../../cards/components/modal';

// Sidebar
import Menu from '../../menu/containers/menu';

// Data
import data from '../../api';

// antd layout
import { Row, Col } from 'antd';

import HeaderLayout from '../../header/components/layout';

class Home extends Component {
  state = {
    cards: data,
    // modalInner: null
  }
  // setModalInner = (component) => {
  //   this.setState({
  //     modalInner: component
  //   })
  // }
  addNewCard = (newCard) => {
    const that = this;

    newCard.id = that.state.cards.length + 1
    // console.log(newCard)
    that.setState({
      cards: [
        ...that.state.cards,
        newCard
      ]
    });
    // alert(ev)
    // ev.preventDefault();
    // console.log(this.state.cards)
  }
  render () {
    return (
      <HomeLayout>
        <Row>
          <HeaderLayout>
            <Menu 
              addCard={this.addNewCard}
            />
          </HeaderLayout>
        </Row>
        <Row>
          <CardsContainer 
            cards={this.state.cards}
          />  
          {/* <Sidebar 
            addCard={this.addNewCard}
          /> */}
        </Row>
      </HomeLayout>
    )
  }
}

export default Home;
