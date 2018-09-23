import React, { PureComponent } from 'react';
import data from '../../api';
import CardLayout from './Layout/Layout';
// import Card from './../components/card';
// import { Icon, List } from 'antd'

// Groups
// import GroupContainer from "../../groups/containers/GroupContainer";

// import { Grid } from 'mauerwerk';
import { Col, Row } from 'antd';
import ThumbCard from './ThumbCard/ThumbCard';
import FullCard from './FullCard/FullCard';

// import GroupLayout from '../../groups/components/GroupLayout';

class CardsContainer extends PureComponent {
  state = { 
    visible: false,
    editingCard: {
      key: 0,
      name: '',
      action: false
    },
    singleCard: {},
    cards: data.cards
  }


  addCard = (newCard) => {
    const that = this;
    newCard.id = Math.floor((Math.random() * 9999) + 1)
    that.setState({
      cards: [
        ...that.state.cards,
        newCard
      ]
    });
  }

  handleInputChange = (ev) => {
    this.setState({
      editingCard: {
        ...this.state.editingCard,
        name: ev.target.value
      }
    })
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

  openEdit = (card) => {
    this.setState({
      editingCard: {
        action: !this.state.editingCard.action,
        name: card.name,
        key: card.id
      }
    })
  }

  updateCard = (card_id) => {
    let cloneCards = this.state.cards;
    
    let newArrCards = cloneCards.map(card => {
      if(card.id == card_id) card.name = this.state.editingCard.name
      return card
    });
    // .filter(item => item.id == card_id)
    // console.log(newArrCards)
    this.setState({
      cards: newArrCards,
      editingCard: {
        action: false
      }
    })
  }

  destroyCard = (card_id) => {
    let cloneCards = this.state.cards;
    let newArrCards = cloneCards.filter(card => {
      return card.id != card_id
    });
    this.setState({
      cards: newArrCards
    }, console.log('state changed'))
  }

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
                  <ThumbCard
                    card={card}
                    handleEditStatusCard={this.openEdit}
                    handleSelectCard={this.selectCard}
                    editCardStatus={this.state.editingCard}
                    handleCardInputChange={this.handleInputChange}
                    handleUpdateCard={this.updateCard}
                    handleDestroyCard={this.destroyCard}
                    editable={true}
                    showListOptions={true}
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
