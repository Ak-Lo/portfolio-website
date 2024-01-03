import React from "react";
import "./skills.scss";
import QualificaitonSection from "./QualificaitonSection";
import SkillsSection from "./SkillsSection";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills__content">
        <QualificaitonSection />
        {/* </Fade> */}
        <SkillsSection />
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default Skills;
