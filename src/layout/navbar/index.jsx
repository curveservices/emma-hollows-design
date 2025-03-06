import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileAlt,
  faHouse,
  faSuitcase,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/button";
import logo from "../../assets/images/logo1.png";
import Breadcrumbs from "../../components/breadcrumbs";
import "./index.scss";
import MenuToggle from "../../components/menuToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "navbar-scroll" : ""}>
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
        <Breadcrumbs className={scrolled ? "navbar-scroll" : ""} />
        <nav className={showNav ? "mobile-show" : ""}>
          <NavLink
            to="/"
            title="Home Page"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
              <div className="text">Home</div>
            </div>
          </NavLink>
          <NavLink
            to="about-me"
            title="About Me"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
              <div className="text">About Me</div>
            </div>
          </NavLink>
          <NavLink
            to="/portfolio"
            title="Portfolio"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
              <div className="text">Portfolio</div>
            </div>
          </NavLink>
          <NavLink
            to="/cv"
            title="CV"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faFileAlt} className="mobile-icon" />
              <div className="text">CV</div>
            </div>
          </NavLink>
          <Button
          text="Contact Me"
          link="/contact"
          background="var(--secondary)"
          color="#000"
          boxShadow="none"
        />
        </nav>
         <MenuToggle showNav={showNav} setShowNav={setShowNav} />
      </header>
    </>
  );
};

export default Navbar;
