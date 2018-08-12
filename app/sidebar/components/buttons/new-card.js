import React from 'react';
// import { Button } from 'reactstrap'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './../styles/buttons/new-card.sass';

const newCardButton = (props) => {
  // var popoverTemplate = ['<div class="timePickerWrapper popover">',
  //     '<div class="arrow"></div>',
  //     '<div class="popover-content">',
  //     '</div>',
  //     '</div>'].join('');

  // var content = ['<div class="timePickerCanvas">asfaf asfsadf</div>',
  //     '<div class="timePickerClock timePickerHours">asdf asdfasf</div>',
  //     '<div class="timePickerClock timePickerMinutes"> asfa </div>', ].join('');


  // $('#creatingCard').popover({
  //     trigger: 'click',
  //     content: content,
  //     template: popoverTemplate,
  //     placement: "bottom",
  //     html: true
  // });
  // console.log($('#creatingCard'))
  
  return (
    <div className="new-card">
      <Button id="Popover1" onClick={props.handleToggleClick}>
        + card
      </Button>
      <Popover placement="bottom" isOpen={props.OpenPopover} target="Popover1" toggle={props.handleToggleClick}>
        <PopoverHeader>Nueva tarjeta</PopoverHeader>
        <PopoverBody>
          { props.children }
        </PopoverBody>
      </Popover>
      {/* <div className="popover-content invisible">
      </div> */}
    </div>
  )
}
export default newCardButton;
