import React from 'react';

import './styles/layout-cards.scss'

const CardsLayout = (props) => {

  return (
    <div id='cards-section' className="cards-layout container-fluid">
      {props.children}
    </div>
  )
}

export default CardsLayout;
