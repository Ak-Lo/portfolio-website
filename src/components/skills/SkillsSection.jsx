import React from "react";
import { useState, useRef } from "react";
import { TfiServer } from "react-icons/tfi";
import { GiSkills } from "react-icons/gi";
import { Fade } from "react-reveal";

const frontSkills = ["JavaScript", "ReactJS", "HTML", "CSS", "Git"];
const backSkills = [
  "NodeJS",
  "ExpressJS",
  "C++",
  "PHP",
  "Python",
  "MongoDB",
  "MySQL",
];
const softSkills = [
  "Creativity",
  "Analitical",
  "Problem-solving",
  "Self-learning",
  "Communication",
];

const SkillsSection = () => {
  const [id, setId] = useState(0);
  const skillNameElements = useRef([]);

  function setActiveTab(e) {
    const clickedId = parseInt(e.target.id);
    skillNameElements.current.map((element, index) => {
      element.classList.remove("active");
      if (index === clickedId) {
        element.classList.add("active");
      }
    });
  }

  return (
    <>
      <Fade bottom distance={"300px"} duration={1000}>
        <h3 className="skills__title">
          <div className="line__before"></div>Skills
        </h3>
        <div className="skills__left__border"></div>
        <div className="skills__section__content">
          <div className="skills__section__title">
            <div className="__title">skills</div>
            <span className="__subtitle">Technical skills</span>
          </div>
          <div className="skills__list__details">
            <div className="skills__buttons">
              <div className="skills__names">
                <div
                  className="tech__skill__titles active"
                  id="0"
                  onClick={(e) => {
                    setId(e.target.id);
                    setActiveTab(e);
                  }}
                  ref={(element) => {
                    skillNameElements.current[0] = element;
                  }}
                >
                  <div className="skill__icon" id="0">
                    {"{ }"}
                  </div>{" "}
                  Frontend Developer
                  <div id="0" className={id == 0 ? "arrow active" : "arrow"}>
                    {">"}
                  </div>
                </div>
                <span className="tech__skill__subtitles">
                  more than 3 years
                </span>
              </div>
              <div className="skills__names">
                <div
                  className="tech__skill__titles"
                  id="1"
                  onClick={(e) => {
                    // console.log(e.target.id);
                    setId(e.target.id);
                    setActiveTab(e);
                  }}
                  ref={(element) => {
                    skillNameElements.current[1] = element;
                  }}
                >
                  <TfiServer className="skill__icon" id="1" />
                  Backend Developer
                  <div id="1" className={id == 1 ? "arrow active" : "arrow"}>
                    {">"}
                  </div>
                </div>
                <span className="tech__skill__subtitles" id="1">
                  more than 5 years
                </span>
              </div>
              <div className="skills__names">
                <div
                  className="tech__skill__titles"
                  id="2"
                  onClick={(e) => {
                    setId(e.target.id);
                    setActiveTab(e);
                  }}
                  ref={(element) => {
                    skillNameElements.current[2] = element;
                  }}
                >
                  <GiSkills className="skill__icon" id="2" />
                  Soft Skills
                  <div id="2" className={id == 2 ? "arrow active" : "arrow"}>
                    {">"}
                  </div>
                </div>
                <span className="tech__skill__subtitles" id="2">
                  native skill
                </span>
              </div>
            </div>
            <div className="tech__skills__list">
              <div
                className={id == 0 ? "skills__list" : "skills__list invisible"}
              >
                {frontSkills.map((value, index) => {
                  return <div key={index}>{value}</div>;
                })}
              </div>
              <div
                className={id == 1 ? "skills__list" : "skills__list invisible"}
              >
                {backSkills.map((value, index) => {
                  return <div key={index}>{value}</div>;
                })}
              </div>

              <div
                className={id == 2 ? "skills__list" : "skills__list invisible"}
              >
                {softSkills.map((value, index) => {
                  return <div key={index}>{value}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default SkillsSection;
