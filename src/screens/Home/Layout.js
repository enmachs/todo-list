import React from 'react';
import './Home.scss'

const HomeLayout = (props) => {
  return (
    <div className="home-layout">
      { props.children }
    </div>
  )
}

export default HomeLayout;
