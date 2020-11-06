import React from "react";
import Card from "./Card";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__textDiv">
        <h2>We get it. 🤷🏽‍♀️</h2>
        <h2>Investing is overwhelming,</h2>
        <h2>but it doesn’t have to be.</h2>
      </div>

      <div className="promo__cards">
        <div className="promo__cardDiv">
          <div className="promo__card">
            <Card
              image="👩‍👩‍👧‍👧"
              heading="Community"
              para="We all need someone to lean on and investing is no different.
                  As part of our community, you get the support to embark and
                  continue on your journey."
            />
          </div>
          <div className="promo__card">
            <Card
              image="💸"
              heading="Responsible Investing"
              para="Make your money moves matter!Express your values and interests through your investments."
            />
          </div>
          <div className="promo__card">
            <Card
              image="🌱"
              heading="Learning"
              para="We eliminate all the unnecessary financial jargon.
Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
