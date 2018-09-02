import React from "react";
// import './styles/card.sass';
import { Icon } from 'antd'
import './ThumbCard.scss';
import { Card } from 'antd';


const ThumbCard = (props) => {
  return (
    <Card
      className="single-card"
      onClick={() => props.handleSelectCard(props.card)}
    >
      <h3>{ props.card.name }</h3>
      {/* <p>{card.description}</p> */}
    </Card>  
  )
}

export default ThumbCard;
