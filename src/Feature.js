import React from "react";
import "./Feature.css";
import FeatureLeft from "./FeatureLeft";
import FeatureMiddle from "./FeatureMiddle";
import FeatureRight from "./FeatureRight";

function Feature() {
  return (
    <div className="feature">
      <h2>What does Alinea offer?</h2>

      <div className="feature__offers">
        <div className="feature__left">
          <FeatureLeft />
        </div>
        <div className="feature__middle">
          <FeatureMiddle />
        </div>
        <div className="feature__right">
          <FeatureRight />
        </div>
      </div>
    </div>
  );
}

export default Feature;
