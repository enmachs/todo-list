import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';

import CardsLayout from '../../cards/components/layout';

import data from '../../api.json';



class Home extends Component {
  state = {
    data
  }
  render () {
    return (
      <HomeLayout>
        <CardsLayout /> 
        <h1>Hi! I'm a React Component</h1>
      </HomeLayout>
    )
  }
}

export default Home;
