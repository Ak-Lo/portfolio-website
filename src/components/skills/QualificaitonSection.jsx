import React from "react";
import { SlGraduation } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { useState } from "react";
import QualificationEduTab from "./QualificationEduTab";
import QualificationExpTab from "./QualificationExpTab";
import { Fade } from "react-reveal";

const QualificaitonSection = () => {
  const [activeTab, setactiveTab] = useState({
    eduTabIsActive: true,
    expTabIsActive: false,
  });

  const switchToEducation = () => {
    setactiveTab({
      eduTabIsActive: true,
      expTabIsActive: false,
    });
  };
  const switchToExperience = () => {
    setactiveTab({
      eduTabIsActive: false,
      expTabIsActive: true,
    });
  };

  return (
    <Fade bottom distance={"100px"} duration={1000}>
      <div className="qualification__section__content">
        <div className="qualification__section__title">
          <div className="__title">qualification</div>
          <span className="__subtitle">My journey</span>
        </div>
        <div className="qualification__buttons">
          <div
            className={
              activeTab.eduTabIsActive
                ? "education__button"
                : "education__button inactive"
            }
            onClick={switchToEducation}
          >
            <SlGraduation />
            Education
          </div>
          <div
            className={
              activeTab.expTabIsActive
                ? "experience__button"
                : "experience__button inactive"
            }
            onClick={switchToExperience}
          >
            <BsBriefcase />
            Experience
          </div>
        </div>

        {/*------------------------QUALIFICATION CONTENT TABS (EDUCATION & experience)-----------------*/}
        <div className="qualification__tabs">
          <QualificationEduTab activeTab={activeTab} />
          <QualificationExpTab activeTab={activeTab} />
        </div>
      </div>
    </Fade>
  );
};

export default QualificaitonSection;
