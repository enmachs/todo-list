import React from "react";
import './styles/card.sass';

const Card = (props) => {
  return (
    <div className="col-lg-3 ml-2">
      <div className="single-card">
        <div class="card tiny-card">
          <div class="card-body">
            <h5 class="card-title">
              { props.title }
            </h5>
            <p class="card-text">
              { props.color }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
