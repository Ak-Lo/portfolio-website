import React from "react";
import Navbar from "../navbar/Navbar";
import { AiFillGithub, AiFillLinkedin, AiFillGitlab } from "react-icons/ai";
import { VscProject } from "react-icons/vsc";
import { Fade } from "react-reveal";
// import { Link } from "react-scroll";

import "./home.scss";

const Home = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home" id="home">
      <Navbar />
      <div className="home__content">
        <div className="home__text">
          <h3 className="home__title">
            <div className="line__before"></div>
            Home
          </h3>

          <h3 className="home__hello">Hi, my name is</h3>
          <Fade bottom>
            <h1 className="home__myname">Akaki Lomia</h1>
          </Fade>
          <Fade bottom distance={"100px"} duration={1000}>
            <h3 className="home__description" style={{ fontSize: "18px" }}>
              Full Stack Web Developer
            </h3>
          </Fade>
          <h3 className="home__description">
            Highly experienced front-end focused ReactJS developer, specialized
            in building creating and enhancing detail oriented, user-friendly,
            adaptive and responsive web applications.
          </h3>
          <button className="button__to__projects" onClick={scrollToProjects}>
            projects
            <VscProject fontSize={"20px"} />
          </button>

          <div className="home__social">
            <a
              href="https://github.com/aka12345678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="home__social__links" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="home__social__links" />
            </a>
            <a
              href="https://gitlab.cloudhosted.io/akaki.lomia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGitlab className="home__social__links" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
