import React from "react";
import "./FeatureItem.css";

function FeatureItem({ icon, offer, desc, color }) {
  return (
    <div className="featureitem">
      <div className="featureitem__div">
        <div className={color ? "featureitem__color" : "featureitem__img"}>
          <span>{icon}</span>
        </div>
        <div className="featureitem__text">
          <h5>{offer}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
