import React from "react";
import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
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
          <VscChromeClose
            className="hamburger__menu__icon"
            onClick={handleOpen}
          />
        ) : (
          <VscMenu className="hamburger__menu__icon" onClick={handleOpen} />
        )}
      </nav>
    </>
  );
};

export default NavbarMobile;
