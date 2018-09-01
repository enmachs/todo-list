import React from 'react';
// import { Button } from 'reactstrap'
// import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Popover, Button, Icon } from 'antd';
import './styles/newCard.scss';

const newCard = (props) => {
  return (
    <div className="new-card">
      <Popover
        content={ props.children }
        title=""
        placement="bottomRight"
        trigger="click"
        visible={ props.OpenPopover }
      >
        <Button type="dashed" onClick={props.handleToggleClick}>
          <Icon type="plus" />
          card
        </Button>
      </Popover>
    </div>
  )
}
export default newCard;
