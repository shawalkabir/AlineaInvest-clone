import React from "react";
import { Link } from "react-router-dom";
import "./HeroLeft.css";

function HeroLeft() {
  return (
    <div className="heroleft">
      <div className="heroleft__text">
        <h1>
          Not Your <span> Typical</span>
        </h1>
        <h1>Investing App</h1>
      </div>

      <div className="heroleft__rocket">
        <h3>Connect with Intention</h3>
        <span> 🚀</span>
      </div>

      <p>Alinea makes responsible investing fun, easy, and social.</p>

      <Link to="/" className="headerleft__button">
        Start Your Journey
      </Link>

      <div className="heroleft__imgDiv">
        <img
          src="/images/apple.png"
          alt="Apple Store"
          className="heroleft__img"
        />
      </div>
    </div>
  );
}

export default HeroLeft;
