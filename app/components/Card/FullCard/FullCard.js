import React from 'react';

// antd styles
import { Drawer } from 'antd';

const FullCard = (props) => {

  var {
    card,
    handleOnClose,
    visible
  } = props;

  return (
    <Drawer
      title={card.name}
      placement="right"
      closable={true}
      width='60%'
      onClose={handleOnClose}
      visible={visible}
    >
      <p>{card.description}</p>
    </Drawer>
  )
}

export default FullCard;
