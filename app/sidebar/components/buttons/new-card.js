import React from 'react';
// import { Button } from 'reactstrap'
// import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Popover, Button, Icon } from 'antd';
import './../styles/buttons/new-card.sass';

const newCardButton = (props) => {
  return (
    <div className="new-card">
      {/* <Button id="Popover1" onClick={props.handleToggleClick}>
        + card
      </Button>
      <Popover placement="bottom" isOpen={props.OpenPopover} target="Popover1" toggle={props.handleToggleClick}>
        <PopoverHeader>Nueva tarjeta</PopoverHeader>
        <PopoverBody>
          { props.children }
        </PopoverBody>
      </Popover> */}
      <Popover
        content={ props.children }
        title="Title"
        trigger="click"
        visible={props.OpenPopover}
      >
        <Button 
          type="primary"
          onClick={props.handleToggleClick}
        >
          <Icon type="plus-square-o" />
          Card
        </Button>
      </Popover>
      {/* <div className="popover-content invisible">
      </div> */}
    </div>
  )
}
export default newCardButton;
