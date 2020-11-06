import React from "react";
import { Link } from "react-router-dom";
import "./Community.css";

function Community() {
  return (
    <div className="community">
      <div className="community__container">
        <div className="community__content">
          <h2>BECOME A PART OF OUR KICKASS COMMUNITY</h2>
          <p>
            We can’t do this alone, so we need each other, especially you.
            <br /> join our community and get started on your investing journey!
          </p>
          <div className="community__button">
            <Link to="/">Join Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
