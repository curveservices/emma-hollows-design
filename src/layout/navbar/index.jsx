import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faHouse, faSuitcase, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/button";
import logo from "../../assets/images/logo1.png";
import "./index.scss";
import MenuToggle from "../../components/menuToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${scrolled ? "navbar-scroll navbar-hidden" : "" } ${showNav ? "menu-open" : ""}`}>
        <NavLink to="/" aria-label="home page">
          <div className="title-container">
            <img src={logo} alt="London theatre Costume design, wardrobe, maker and film" className="mobile-logo" />
          </div>
          <img src={logo} alt="London theatre Costume design, wardrobe, maker and film" className="logo" />
        </NavLink>
        <nav className={showNav ? "mobile-show" : ""}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowNav(false)}>
            <div className="menu-container">
              <FontAwesomeIcon icon={faHouse} className="mobile-icon" />
              <div className="text">Home</div>
            </div>
          </NavLink>
          <NavLink to="/about-me" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowNav(false)}>
            <div className="menu-container">
              <FontAwesomeIcon icon={faUserAlt} className="mobile-icon" />
              <div className="text">About Me</div>
            </div>
          </NavLink>
          <div 
            className="dropdown" 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={() => setShowDropdown(false)}
          >
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowNav(false)}>
              <div className="menu-container">
                <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
                <div className="text">Portfolio</div>
            </div>
            </NavLink>
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/designer" onClick={() => setShowDropdown(false) & setShowNav(false)} className="dropdown-item">Designer</NavLink>
                <NavLink to="/maker" onClick={() => setShowDropdown(false) & setShowNav(false)} className="dropdown-item">Maker</NavLink>
                <NavLink to="/wardrobe" onClick={() => setShowDropdown(false) & setShowNav(false)} className="dropdown-item">Wardrobe</NavLink>
                <NavLink to="/film" onClick={() => setShowDropdown(false) & setShowNav(false)} className="dropdown-item">Film</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowNav(false)}>
            <div className="menu-container">
              <FontAwesomeIcon icon={faFileAlt} className="mobile-icon" />
              <div className="text">CV</div>
            </div>
          </NavLink>
          <Button text="Contact Me" link="/contact" background="var(--secondary)" color="#000" boxShadow="none" onClick={() => setShowNav(false)} />
        </nav>
        <MenuToggle showNav={showNav} setShowNav={setShowNav} />
      </header>
    </>
  );
};

export default Navbar;