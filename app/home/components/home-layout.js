import React from 'react';
import './layout.sass'

const HomeLayout = (props) => {
  return (
    <div className="home-layout">
      { props.children }
    </div>
  )
}

export default HomeLayout;
