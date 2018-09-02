import React from 'react';

// Group
import Group from '../../Group/Group';

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
      <Group 
        card={card}
      />
    </Drawer>
  )
}

export default FullCard;
