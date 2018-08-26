import React from 'react';
import './styles/group-layout.scss'

const GroupLayout = (props) => {

  return (
    <div className="group-layout">
      { props.children }
    </div>
  )
};

export default GroupLayout;
