import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

const QualificationExpTab = ({ activeTab }) => {
  return (
    <div
      className={
        activeTab.expTabIsActive
          ? "experience__grid"
          : "experience__grid inactive"
      }
    >
      <div className="experience__data">
        <div>
          <div className="experience__title">Software Engineer, PM</div>
          <span className="experience__subtitle">Cool Company</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2012-2015
          </div>
        </div>
        <div>
          <span className="experience__circle"></span>
          <span className="experience__line"></span>
        </div>
      </div>
      <div className="experience__data">
        <div></div>
        <div>
          <span className="experience__circle"></span>
          <span className="experience__line"></span>
        </div>
        <div>
          <div className="experience__title">Teaching Programing Languages</div>
          <span className="experience__subtitle">TSU</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2012-2020
          </div>
        </div>
      </div>
      <div className="experience__data">
        <div>
          <div className="experience__title">Front End Developer</div>
          <span className="experience__subtitle">TSU</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2020-Present
          </div>
        </div>
        <div>
          <span className="experience__circle"></span>
          <span className="experience__line"></span>
        </div>
      </div>
      <div className="experience__data">
        <div></div>
        <div>
          <span className="experience__circle"></span>
        </div>
        <div>
          <div className="experience__title">Full stack</div>
          <span className="experience__subtitle">Cool Company</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2021-Present
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationExpTab;
