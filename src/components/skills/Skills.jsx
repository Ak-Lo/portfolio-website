import React from "react";
import "./skills.scss";
import QualificaitonSection from "./QualificaitonSection";
import SkillsSection from "./SkillsSection";
import { Fade } from "react-reveal";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills__content">
        <Fade bottom distance={"100px"} duration={1000}>
          <QualificaitonSection />
        </Fade>
        <Fade bottom distance={"100px"} duration={1000}>
          <SkillsSection />
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
