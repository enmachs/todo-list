import React from "react";
import './styles/card.sass';

const Card = (props) => {
  return (
    <div className="col-lg-3 ml-2">
      <div className="single-card">
        <div class="card tiny-card">
          <div class="card-body">
            <h5 class="card-title">
              {props.title}
            </h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        {/* <h4>{props.title}</h4> */}
      </div>
    </div>
  )
}

export default Card
