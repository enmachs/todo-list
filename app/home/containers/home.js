import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';

// Cards
import CardsContainer from '../../cards/containers/index';

// Sidebar
import Sidebar from '../../sidebar/containers/sidebar';

// Data
import data from '../../api.json';



class Home extends Component {
  state = {
    cards: data.cards
  }
  addNewCard = () => {
    const that = this;
    that.setState({
      cards: [
        ...that.state.cards,
        {
          id: '4',
          title: 'Enmanuel',
          color: '#000'
        }
      ]
    })
    // this.props.data.cards = [
    //   ...that.props.data.cards,
    //   {
    //     id: '4',
    //     title: 'Enmanuel',
    //     color: '#000'
    //   }
    // ]
    console.log(this.state.cards) 
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
        
      </HomeLayout>
    )
  }
}

export default Home;
