import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/sigLogo.webp';
import './index.scss';
import Socials from '../../components/socials';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img
            src={logo}
            alt="telegraph hill private tutoring in South East London"
            className="logo"
          />
          <p>Follow Me!</p>
          <Socials />
        </div>
        <div className="nav-container">
          <div className="card-title">Navigation</div>
          <ul className="site-links">
            <li>
              <NavLink to="designer">Designer</NavLink>
            </li>
            <li>
              <NavLink to="supervisor">Supervisor</NavLink>
            </li>
            <li>
              <NavLink to="illustrator">Illustrator</NavLink>
            </li>
            <li>
              <NavLink to="maker">Maker</NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <div className="card-title">Contact Me</div>
          <div className="contact">
            <FontAwesomeIcon icon={faPhone} />
            <p className="text"> +44 791 689 6013</p>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="text"> emma@emmahollows.co.uk</p>
          </div>
        </div>
      </div>

      <div className="div-line"></div>
      <p className="copy">
        designed by{" "}
        <a
          href="https://www.immutable-studio.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Immutable Studio</u>
        </a>
        &copy; {year}
      </p>
    </footer>
  );
}

export default Footer
