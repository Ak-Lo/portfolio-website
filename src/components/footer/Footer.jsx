import React from "react";
import "./footer.scss";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer__line"></div> */}
      <Fade right distance={"100px"} duration={1000}>
        <div className="footer__content">
          <div className="footer__copyright">
            Designed & Built by{" "}
            <a
              href="https://ak-lo.github.io/portfolio-website"
              className="footer__aklo"
            >
              {"<Ak.Lo./>"}
            </a>
          </div>
          <div className="copyright__text__line"></div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
