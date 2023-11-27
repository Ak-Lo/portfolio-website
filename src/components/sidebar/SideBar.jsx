import React from "react";
import { useState } from "react";
import "./sidebar.scss";

const SideBar = () => {
  const [itemClicked, setItemClicked] = useState({
    aboutClicked: false,
    skillsClicked: false,
    projectsClicked: false,
    contactClicked: false,
  });

  const changeStyle = () => {
    // const target = document.getElementById("skills").clientHeight;
    // const location1 = document.querySelector(target).offsetTop;
    // console.log(target);
    switch (true) {
      case window.scrollY >= 720 && window.scrollY < 1400:
        setItemClicked({
          ...itemClicked,
          aboutClicked: true,
          skillsClicked: false,
          projectsClicked: false,
          contactClicked: false,
        });
        break;
      case window.scrollY >= 1400 && window.scrollY < 2000:
        setItemClicked({
          ...itemClicked,
          aboutClicked: false,
          skillsClicked: true,
          projectsClicked: false,
          contactClicked: false,
        });
        break;
      case window.scrollY >= 2000 && window.scrollY < 3000:
        setItemClicked({
          ...itemClicked,
          aboutClicked: false,
          skillsClicked: false,
          projectsClicked: true,
          contactClicked: false,
        });
        break;
      case window.scrollY >= 3001 && window.scrollY < 3750:
        setItemClicked({
          ...itemClicked,
          aboutClicked: false,
          skillsClicked: false,
          projectsClicked: false,
          contactClicked: true,
        });
        break;
      default:
        setItemClicked({
          ...itemClicked,
          aboutClicked: false,
          skillsClicked: false,
          projectsClicked: false,
          contactClicked: false,
        });
    }
  };

  window.addEventListener("scroll", changeStyle);

  const scrollToMenuItem = (e) => {
    const menuItemId = e.target.id;
    var element;
    if (menuItemId == 0) {
      element = document.getElementById("about");
    }
    if (menuItemId == 1) {
      element = document.getElementById("skills");
    }
    if (menuItemId == 2) {
      element = document.getElementById("projects");
    }
    if (menuItemId == 3) {
      element = document.getElementById("contact");
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar__dot__container">
      {/* commented part is doing the same as this component, but instead uses react-scroll <Link /> */}

      {/* <nav className="navbar__dot">
        <ul>
          <li className="nav__item__dot">
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              o
            </Link>
          </li>
          <li className="nav__item__dot">
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              o
            </Link>
          </li>
          <li className="nav__item__dot">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              // offset={1}
              duration={500}
            >
              o
            </Link>
          </li>
          <li className="nav__item__dot">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              // offset={1}
              duration={500}
            >
              o
            </Link>
          </li>
          <li className="nav__item__dot">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              // offset={2}
              duration={500}
            >
              o
            </Link>
          </li>
        </ul>
      </nav> */}

      {/* {console.log(Object.keys(itemClicked))} */}
      {Object.values(itemClicked).map((item, index) => {
        return (
          <button
            key={index}
            id={index}
            className={item ? "sidebar__buttons change" : "sidebar__buttons"}
            onClick={scrollToMenuItem}
          >
            o
          </button>
        );
      })}

      {/* below code is rendering buttons same as above function */}

      {/* <>
        <button
          id="0"
          className={
            itemClicked.aboutClicked
              ? "sidebar__buttons change"
              : "sidebar__buttons"
          }
          onClick={scrollToMenuItem}
        >
          o
        </button>
        <button
          id="1"
          className={
            itemClicked.skillsClicked
              ? "sidebar__buttons change"
              : "sidebar__buttons"
          }
          onClick={scrollToMenuItem}
        >
          o
        </button>
        <button
          id="2"
          className={
            itemClicked.projectsClicked
              ? "sidebar__buttons change"
              : "sidebar__buttons"
          }
          onClick={scrollToMenuItem}
        >
          o
        </button>
        <button
          id="3"
          className={
            itemClicked.contactClicked
              ? "sidebar__buttons change"
              : "sidebar__buttons"
          }
          onClick={scrollToMenuItem}
        >
          o
        </button>
      </> */}
    </div>
  );
};

export default SideBar;
