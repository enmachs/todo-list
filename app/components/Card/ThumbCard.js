import React from "react";
// import './styles/card.sass';
import { Icon } from 'antd'
// import { Slug, Fade } from 'mauerwerk';
import { Card } from 'antd';


const SingleCard = (props) => {
  return (
    <Card
      title={props.card.name}
      onClick={() => props.handleSelectCard(props.card)}
    >
      <h3>{props.card.description}</h3>
      {/* <p>{card.description}</p> */}
    </Card>  
  )
}

export default SingleCard;
