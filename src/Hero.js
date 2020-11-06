import React from "react";
import "./Hero.css";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__left">
          <HeroLeft />
        </div>
        <div className="hero__right">
          <HeroRight />
        </div>
      </div>
      <div className="hero__waveDiv">
        <img src="/images/hero-bg.svg" alt="" className="hero__wave" />
      </div>
    </>
  );
}

export default Hero;
