import React from "react";
import { Link } from "react-scroll";

const Navlinks = ({ handleopen }) => {
  return (
    <ul className="">
      <li>
        <Link
          className="ddd"
          onClick={handleopen}
          to="about"
          spy={true}
          activeClass="active__class"
          smooth={true}
          offset={1}
          duration={500}
        >
          <span className="link__numbers">01. </span>about
        </Link>
      </li>
      <li>
        <Link
          onClick={handleopen}
          to="skills"
          spy={true}
          activeClass="active__class"
          smooth={true}
          offset={1}
          duration={500}
        >
          <span className="link__numbers">02. </span>skills
        </Link>
      </li>
      <li>
        <Link
          onClick={handleopen}
          activeClass="active__class"
          to="projects"
          spy={true}
          smooth={true}
          offset={1}
          duration={500}
        >
          <span className="link__numbers">03. </span>projects
        </Link>
      </li>
      <li>
        <Link
          onClick={handleopen}
          activeClass="active__class"
          to="contact"
          spy={true}
          smooth={true}
          offset={2}
          duration={500}
        >
          <span className="link__numbers">04. </span>contact
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
