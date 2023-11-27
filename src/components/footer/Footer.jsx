import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer__line"></div> */}
      <div className="footer__content">
        <div className="footer__copyright">
          Designed & Built by{" "}
          <a href="/" className="footer__aklo">
            {"<Ak.Lo./>"}
          </a>
        </div>
        <div className="copyright__text__line"></div>
      </div>
    </div>
  );
};

export default Footer;
