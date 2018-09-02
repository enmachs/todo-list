import React from 'react';
// import { Button } from 'reactstrap'
// import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Popover, Button, Icon } from 'antd';
// import './styles/newCard.scss';

const BtnWithPopover = (props) => {
  return (
    <div className="btn-with-popover">
      <Popover
        content={ props.children }
        title={props.title}
        placement={props.position}
        trigger="click"
        visible={ props.visibility }
      >
        <Button type={props.btnStyle} onClick={props.handleToggleVisibility}>
          <Icon type={props.icon} />
          {props.textInBtn}
        </Button>
      </Popover>
    </div>
  )
}
export default BtnWithPopover;
