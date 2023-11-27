import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

const QualificationEduTab = ({ activeTab }) => {
  return (
    <div
      className={
        activeTab.eduTabIsActive
          ? "education__grid"
          : "education__grid inactive"
      }
    >
      <div className="education__data">
        <div>
          <div className="education__title">Physics, BA</div>
          <span className="education__subtitle">TSU</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2006-2010
          </div>
        </div>
        <div>
          <span className="education__circle"></span>
          <span className="education__line"></span>
        </div>
      </div>
      <div className="education__data">
        <div></div>
        <div>
          <span className="education__circle"></span>
          <span className="education__line"></span>
        </div>
        <div>
          <div className="education__title">Electrical Engineering, MA</div>
          <span className="education__subtitle">TSU</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2010-2012
          </div>
        </div>
      </div>
      <div className="education__data">
        <div>
          <div className="education__title">Electrical Engineering, PhD</div>
          <span className="education__subtitle">TSU</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2012-2016
          </div>
        </div>
        <div>
          <span className="education__circle"></span>
          <span className="education__line"></span>
        </div>
      </div>
      <div className="education__data">
        <div></div>
        <div>
          <span className="education__circle"></span>
        </div>
        <div>
          <div className="education__title">Programing</div>
          <span className="education__subtitle">Cool University</span>
          <div className="__calendar">
            <IoCalendarOutline fontSize={"11px"} />
            2010-lifelong learner
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationEduTab;
