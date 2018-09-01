import React from "react";
// import './styles/card.sass';
import { Icon } from 'antd'
import './ThumbCard.scss';
import { Card } from 'antd';


const SingleCard = (props) => {
  return (
    <Card
      className="single-card"
      title={ props.card.name }
      onClick={() => props.handleSelectCard(props.card)}
    >
      <h3>{ props.card.description }</h3>
      {/* <p>{card.description}</p> */}
    </Card>  
  )
}

export default SingleCard;
