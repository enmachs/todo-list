import React from 'react';
import './styles/layout-cards.sass'

const CardsLayout = (props) => {

  return (
    <div className="col-lg-11">
      <div className="cards-layout container-fluid">
        {props.children}
      </div>
    </div>
  )
}

export default CardsLayout;
