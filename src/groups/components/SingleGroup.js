import React from 'react';
import { Checkbox } from 'antd';
// import { Collapse } from 'antd';

// const Panel = Collapse.Panel;

const SingleGroup = (props) => {
  var group = props.group
  return (
    // divant-collapse-content-box
    <div className="tasks">
      <Checkbox>
        { group.name }
      </Checkbox>
      <Checkbox>
        { group.name }
      </Checkbox>
      <Checkbox>
        { group.name }
      </Checkbox>
      <Checkbox>
        { group.name }
      </Checkbox>
    </div> 
  )
}


export default SingleGroup;
