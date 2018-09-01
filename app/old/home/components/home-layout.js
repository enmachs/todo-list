import React from 'react';
import './layout.sass'

const HomeLayout = (props) => {
  return (
    <div className="home-layout container-fluid">
      <div className="row">
        { props.children }
      </div>
    </div>
  )
}

export default HomeLayout;
