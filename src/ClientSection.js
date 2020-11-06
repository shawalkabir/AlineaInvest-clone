import React from "react";
import "./ClientSection.css";
import Carousel from "./Carousel";

function ClientSection() {
  return (
    <div className="clientsection">
      <div className="clientsection__container">
        <div className="clientsection__text">
          <h2>Featured in</h2>
        </div>
        <div className="clientsection__carousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default ClientSection;
