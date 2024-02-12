import React from "react";
import FooterList from "./FooterList";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <FooterList />
      </div>
      <div>
        Our contacts:
        <div className="footer__items">8800</div>
        <div className="footer__items">shop@polivtorg.ru</div>
        <div className="footer__items"> ул. Уральская, 83/1, Краснодар,</div>
      </div>
    </footer>
  );
}

export default Footer;
