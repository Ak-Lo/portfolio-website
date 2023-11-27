import React from "react";
import { Fade } from "react-reveal";
import "./about.scss";
import { useState } from "react";
import { BsDownload } from "react-icons/bs";

const About = () => {
  // const ref = useRef(null);
  const [moveImg, setMoveImg] = useState(false);

  // useEffect(() => {
  const moveElement = () => {
    if (window.scrollY >= 100 && window.scrollY < 1450) {
      setMoveImg(true);
    } else {
      setMoveImg(false);
    }
  };
  //   moveElement();

  window.addEventListener("scroll", moveElement);
  // }, []);

  return (
    <div className="about" id="about">
      <div className="about__content">
        <Fade bottom distance={"100px"} duration={1000}>
          <img
            src={process.env.PUBLIC_URL + "/images/aboutImage.png"}
            width="400"
            height="500"
            alt="image"
          />
        </Fade>
        <div className="about__text">
          <Fade bottom>
            <h3 className="about__title">
              <div className="line__before"></div>About
            </h3>
          </Fade>
          <Fade bottom>
            <div className="about__description">
              <p>
                Hello! My name is{" "}
                <span className="new__line"> Akaki, I enjoy creating </span>
                fun things that live on the
                <span className="new__line">
                  {" "}
                  internet. My interest is web
                </span>{" "}
                development. My main focus these
                <span className="new__line">
                  {" "}
                  days is building accessible, inclusive{" "}
                </span>{" "}
                products and digital experiences for a variety of clients.
              </p>
              <div style={{ marginBottom: "20px" }}>
                I have solid knowledge of
                <span style={{ color: "#FFE082" }}> Node.js.</span> Working on
                both
                <span style={{ color: "#FFE082" }}> front-end</span> and
                <span style={{ color: "#FFE082" }}> back-end.</span>
              </div>
              <div style={{ marginBottom: "20px" }}>
                Mainly focused on{" "}
                <span style={{ color: "#FFE082" }}>
                  {" "}
                  desktop app development
                </span>{" "}
                and{" "}
                <span style={{ color: "#FFE082" }}>
                  front-end web development.
                </span>
              </div>
              <div>
                <span style={{ color: "#FFE082" }}> Chess </span>player.
              </div>
            </div>
          </Fade>
          <Fade bottom distance={"100px"} duration={1000}>
            <button className="about__button__resume">
              resume
              <BsDownload fontSize="20px" />
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
