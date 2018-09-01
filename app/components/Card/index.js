import React, { Component } from 'react';
// import data from '../../api';
import CardLayout from './Layout/Layout';
// import Card from './../components/card';
// import { Icon, List } from 'antd'

// Groups
// import GroupContainer from "../../groups/containers/GroupContainer";

// import { Grid } from 'mauerwerk';
import { Drawer, Button, Col, Row } from 'antd';
import Card from './ThumbCard';

// import GroupLayout from '../../groups/components/GroupLayout';

class CardsContainer extends Component {
  state = { 
    visible: false,
    width: 520,
    singleCard: {}
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
    // console.log(card)
    this.setState({
      singleCard: card
    }, this.showDrawer())
    // e.preventDefault()
    // alert(card)
  };
  render(){
    return (
      <CardLayout>
        <Row gutter={20}>
          {
            this.props.cards.map( card => {
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
        <Drawer
          title={this.state.singleCard.name}
          placement="right"
          closable={true}
          width='60%'
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>{this.state.singleCard.description}</p>
        </Drawer>
      </CardLayout>
    )
  }
}

export default CardsContainer;
