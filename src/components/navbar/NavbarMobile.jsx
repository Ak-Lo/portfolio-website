import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavlinksMobile from "./NavlinksMobile";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className={
          !isOpen
            ? "logo__container__mobile"
            : " logo__container__mobile move__logo"
        }
      >
        <Logo isOpen={isOpen} handleOpen={handleOpen} />
      </div>
      <nav className="navbar__menu__mobile">
        <NavlinksMobile isOpen={isOpen} handleOpen={handleOpen} />
        {isOpen ? (
          <FaTimes className="hamburger__menu__icon" onClick={handleOpen} />
        ) : (
          <FaBars className="hamburger__menu__icon" onClick={handleOpen} />
        )}
      </nav>
    </>
  );
};

export default NavbarMobile;
