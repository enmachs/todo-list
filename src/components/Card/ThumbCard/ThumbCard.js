import React from "react";
// import './styles/card.sass';
import { Icon, Card, Input, Popconfirm, message } from 'antd';
import './ThumbCard.scss';
// import {  } from 'antd';


const ThumbCard = (props) => {
  let booleanValue = false
  if (props.editable) {
    booleanValue = (props.editCardStatus.action && props.card.id == props.editCardStatus.key)
  }
  const iconList = [
    <Icon
      type="swap-left"
      theme="outlined"
      onClick={() => props.handleSelectCard(props.card)}
    />,
    <Icon
      type={ booleanValue ? 'close' : 'edit' }
      onClick={() => props.handleEditStatusCard(props.card)}
    />,
    <Popconfirm
      title="Are you sure delete this card?"
      onConfirm={() => props.handleDestroyCard(props.card.id)}
      onCancel={() => console.info('done')}
      okText="Yes"
      cancelText="No"
    >
      <Icon type="delete" />
    </Popconfirm>
  ]

  return (
    <Card
      className="single-card"
      actions={props.showListOptions ? iconList : []}
    >
      {
        booleanValue ? (
          <Input
            // defaultValue={props.editCardStatus.name}
            value={props.editCardStatus.name}
            onChange={props.handleCardInputChange}
            addonAfter={
              <Icon
                type="check"
                style={{'cursor': 'pointer'}}
                onClick={() => props.handleUpdateCard(props.card.id)}
              />
            }
          />
        ) : (
          <h3>{ props.card.name }</h3>
        )
      }
    </Card>
  )
}

export default ThumbCard;
