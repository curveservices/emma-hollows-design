import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo1.webp';
import './index.scss';
import Socials from '../../components/socials';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-title">
        <div className="footer-container">
          <ul className="site-links">
            <li>
              <NavLink to='about-me'>About</NavLink>
            </li>
            <li>
              <NavLink to='portfolio'>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to='/'>
              <img
                src={logo}
                alt="Costume Design London's West end, wardrobe, maker, film"
                className='footer-logo'
                loading='lazy'
              />
            </NavLink>
            </li>
            <li>
              <NavLink to='cv'>My CV</NavLink>
            </li>
            <li>
              <NavLink to='contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr className="div-line" />
      <div className="socials-container">
        <Socials/>
        <div className="copy">
        <Link to='https://www.immutable-studio.co.uk/'>created by Immutable Studio </Link>&copy;{year}
        
        <Link to='privacy-policy'>privary policy</Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer
