import "./navbar.scss";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

const NavbarRegular = () => {
  // const [click, setClick] = useState(false);

  return (
    <div className="navbar__regular">
      <div className="logo__container">
        <Logo />
      </div>
      <nav className="navbar">
        <Navlinks />
      </nav>
    </div>
  );
};

export default NavbarRegular;
