import React from 'react';

import './styles/layout-cards.scss'

const CardsLayout = (props) => {

  return (
    <div className="col-lg-11">
      <div id='cards-section' className="cards-layout container-fluid">
        {props.children}
      </div>
    </div>
  )
}

export default CardsLayout;
