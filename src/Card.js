import React from "react";
import "./Card.css";

function Card({ image, heading, para }) {
  return (
    <div className="card">
      <div className="card__items">
        <div className="card__img">
          <span>{image}</span>
        </div>
        <h5>{heading}</h5>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Card;
