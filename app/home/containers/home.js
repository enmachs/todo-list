import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';

// Cards
import CardsContainer from '../../cards/containers/index';
import ModalContainer from '../../cards/containers/modal-card';
import Modal from '../../cards/components/modal';

// Sidebar
import Sidebar from '../../sidebar/containers/sidebar';

// Data
import data from '../../api.json';



class Home extends Component {
  state = {
    cards: data.cards,
    // modalInner: null
  }
  // setModalInner = (component) => {
  //   this.setState({
  //     modalInner: component
  //   })
  // }
  addNewCard = (newCard) => {
    const that = this;
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
        <CardsContainer 
          cards={this.state.cards}
        />
        <Sidebar 
          addCard={this.addNewCard}
        />
        <ModalContainer>
          <Modal>
            <h5>Info of card</h5>
          </Modal>
        </ModalContainer>
      </HomeLayout>
    )
  }
}

export default Home;
