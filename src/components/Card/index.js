import React, { PureComponent } from 'react';
import data from '../../api';
import CardLayout from './Layout/Layout';
// import Card from './../components/card';
// import { Icon, List } from 'antd'

// Groups
// import GroupContainer from "../../groups/containers/GroupContainer";

// import { Grid } from 'mauerwerk';
import { Drawer, Button, Col, Row } from 'antd';
import Card from './ThumbCard/ThumbCard';
import FullCard from './FullCard/FullCard';

// import GroupLayout from '../../groups/components/GroupLayout';

class CardsContainer extends PureComponent {
  state = { 
    visible: false,
    width: 520,
    singleCard: {},
    cards: data.cards
  }


  addCard = (newCard) => {
    const that = this;
    newCard.id = that.state.cards.length + 1
    that.setState({
      cards: [
        ...that.state.cards,
        newCard
      ]
    });
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  selectCard = (card) => {
    this.setState({
      singleCard: card
    }, this.showDrawer())
  };
  render(){
    return (
      <CardLayout>
        <Row gutter={20}>
          {
            this.state.cards.map( card => {
              return (
                <Col span={6} key={card.id}>
                  <Card 
                    card={card}
                    handleSelectCard={this.selectCard}
                  />
                </Col>
              ) 
            })
          }
        </Row>
        <FullCard 
          card={this.state.singleCard}
          visible={this.state.visible}
          handleOnClose={this.onClose}
        />
      </CardLayout>
    )
  }
}

export default CardsContainer;
