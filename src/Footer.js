import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__text">
          <p>
            This website is for informational purposes only, and is not intended
            to serve as a recommendation to buy or sell any security in any
            account, and is not an offer or sale of a security. They are also
            not research reports and are not intended to serve as the basis for
            any investment decision. Any third-party information provided
            therein does not reflect the views of Alinea Invest, LLC. All
            investments involve risk and the past performance of a security or
            financial product does not guarantee future results or returns. Keep
            in mind that while diversification may help spread risk, it does not
            assure a profit or protect against loss. There is always the
            potential of losing money when you invest in securities or other
            financial products. Investors should consider their investment
            objectives and risks carefully before investing. The price of a
            given security may increase or decrease based on market conditions
            and customers may lose money, including their original investment.
            Alinea Invest, LLC is not a registered investment adviser or
            broker-dealer.
          </p>
        </div>
        <div className="footer__copyright">
          <p>Copyright © 2020. All rights reserved by Alinea Invest</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
