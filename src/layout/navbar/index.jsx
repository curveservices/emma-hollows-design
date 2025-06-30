import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPaintBrush, faPeopleArrows, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/button";
import logo from "../../assets/images/sigLogo.webp";
import MenuToggle from "../../components/menuToggle";
import "./index.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${scrolled ? "navbar-scroll navbar-hidden" : ""} ${showNav ? "menu-open" : ""}`}
      >
        <NavLink to="/" aria-label="home page">
          <div className="title-container">
            <img
              src={logo}
              alt="London theatre Costume design, wardrobe, maker and film"
              className="mobile-logo"
            />
          </div>
          <img
            src={logo}
            alt="London theatre Costume design, wardrobe, maker and film"
            className="logo"
          />
        </NavLink>
        <nav className={showNav ? "mobile-show" : ""}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
              <div className="text">Home</div>
            </div>
          </NavLink>
          <NavLink
            to="/designer"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faPaintBrush} className="mobile-icon" />
              <div className="text">Designer</div>
            </div>
          </NavLink>
          <NavLink
            to="/supervisor"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faPeopleArrows} className="mobile-icon" />
              <div className="text">Supervisor</div>
            </div>
          </NavLink>
          <NavLink
            to="/illustrator"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
              <div className="text">Illustrator</div>
            </div>
          </NavLink>
          <NavLink
            to="/maker"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
              <div className="text">Maker</div>
            </div>
          </NavLink>
          <NavLink
            to="/about-me"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
              <div className="text">Bio</div>
            </div>
          </NavLink>
          <Button
            text="Contact"
            link="/contact"
            boxShadow="none"
            onClick={() => setShowNav(false)}
          />
        </nav>
        <MenuToggle showNav={showNav} setShowNav={setShowNav} />
      </header>
    </>
  );
};

export default Navbar;