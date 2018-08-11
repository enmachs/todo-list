import React, { Component } from 'react';
import data from '../../api.json';
import CardsLayout from './../components/layout';
import Card from './../components/card';

class CardsContainer extends Component {
  // state = {
  //   data
  // }

  render(){
    return (
      <CardsLayout>
        <div className="row">
          {
            this.props.cards.map((card) => {
              return (
                <Card 
                  title={card.title}
                />
              )
            })
          }
        </div>
      </CardsLayout>
    )
  }
}

export default CardsContainer;
