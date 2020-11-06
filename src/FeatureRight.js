import React from "react";
import FeatureItem from "./FeatureItem";
import "./FeatureRight.css";

function FeatureRight() {
  return (
    <div className="featureright">
      <div className="featureright__item">
        <FeatureItem
          color="true"
          icon="🍕"
          offer="Fractional Shares"
          desc="Invest in any share with as little as $1."
        />
      </div>
      <div className="featureright__item">
        <FeatureItem
          icon="💰"
          offer="Invest with Intention"
          desc="We give you the right information to make an impact."
        />
      </div>
      <div className="featureright__item">
        <FeatureItem
          color="true"
          icon="📚"
          offer="Learn & Grow"
          desc="We make learning fun and easy."
        />
      </div>
    </div>
  );
}

export default FeatureRight;
