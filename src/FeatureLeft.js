import React from "react";
import "./FeatureLeft.css";
import FeatureItem from "./FeatureItem";

function FeatureLeft() {
  return (
    <div className="featureleft">
      <div className="featureleft__item">
        <FeatureItem
          icon="🍩"
          offer="Custom Portfolios"
          desc="Pre-packaged portfolios for you."
        />
      </div>
      <div className="featureleft__item">
        <FeatureItem
          color="true"
          icon="👭"
          offer="Kickass Community"
          desc="Our community is here to support you every step of the way."
        />
      </div>
      <div className="featureleft__item">
        <FeatureItem
          icon="🚀"
          offer="Speedy Support"
          desc="We have quick answers to all your investing questions."
        />
      </div>
    </div>
  );
}

export default FeatureLeft;
