import React from 'react';
import './Layout.scss'

const GroupLayout = (props) => {

  return (
    <div className="group-layout">
      { props.children }
    </div>
  )
};

export default GroupLayout;
