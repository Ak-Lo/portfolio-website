import React from "react";
import { Link } from "react-scroll";

const Logo = ({ isOpen, handleOpen }) => {
  // console.log(isOpen);
  return (
    <Link
      onClick={
        isOpen
          ? handleOpen
          : () => {
              console.log("");
            }
      } // without this condition, logo click opens and closes menu.
      to="home"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <div className="logo">
        <p className="logo__a">{"<"}a</p>
        <p className="logo__k">k.</p>
        <p className="logo__l">l</p>
        <p className="logo__o">o.{" />"}</p>
      </div>
    </Link>
  );
};

export default Logo;
