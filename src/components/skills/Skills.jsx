import React from "react";
import "./skills.scss";
import QualificaitonSection from "./QualificaitonSection";
import SkillsSection from "./SkillsSection";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills__content">
        <QualificaitonSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Skills;
