import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import NavbarRegular from "./NavbarRegular";
import NavbarMobile from "../navbar/NavbarMobile";

const Navbar = () => {
  // const [click, setClick] = useState(false);

  return (
    <div className="navbar__container">
      <NavbarRegular />
      <NavbarMobile />
    </div>
  );
};

export default Navbar;
