import React from "react";
import { Link } from "react-scroll";

const NavlinksMobile = ({ handleOpen, isOpen }) => {
  return (
    <ul className={isOpen ? "nav__links__mobile active" : "nav__links__mobile"}>
      <li>
        <Link
          onClick={handleOpen}
          to="about"
          spy={true}
          activeClass="active__class"
          smooth={true}
          duration={500}
        >
          about
        </Link>
      </li>
      <li>
        <Link
          onClick={handleOpen}
          to="skills"
          spy={true}
          activeClass="active__class"
          smooth={true}
          duration={500}
        >
          skills
        </Link>
      </li>
      <li>
        <Link
          onClick={handleOpen}
          activeClass="active__class"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          projects
        </Link>
      </li>
      <li>
        <Link
          onClick={handleOpen}
          activeClass="active__class"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          contact
        </Link>
      </li>
    </ul>
  );
};

export default NavlinksMobile;
