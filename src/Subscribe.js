import React from "react";
import "./Subscribe.css";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaMedium } from "react-icons/fa";

function Subscribe() {
  return (
    <>
      <div className="subscribe">
        <img src="/images/subscribe.svg" alt="" />
        <div className="subscribe__containerDiv">
          <div className="subscribe__container">
            <div className="subscribe__input">
              <input type="email" placeholder="Enter Email Address" />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe__section">
        <div className="subscribe__sectionImg">
          <div className="subscribe__sectionContainer">
            <div className="subscribe__sectionItems">
              <img src="/images/logo.png" alt="" />
              <p>
                Alinea Invest makes responsible investing fun, easy, and social
                with learning features.
              </p>
              <div className="subscribe__social">
                <div className="subscribe__socialIcons">
                  <FaInstagram />
                </div>
                <div className="subscribe__socialIcons">
                  <FaLinkedinIn />
                </div>
                <div className="subscribe__socialIcons">
                  <FaTwitter />
                </div>
                <div className="subscribe__socialIcons">
                  <FaMedium />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
