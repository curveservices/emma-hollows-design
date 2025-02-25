import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';
import './index.scss';

const Layout = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 75) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  return (
      <>
          <main className='app'>
              <div className="blur-left"></div>
              <Outlet />    
             <div className="blur-right"></div>  
        </main>
        {showButton && (
            <button
            className="back-to-top"
            name="back to top"
            aria-label="arrow button back to top of page"
            onClick={scrollToTop}
            >
                    <FontAwesomeIcon icon={'house-flood-water-circle-arrow-right'} />
            </button>
        )}
        <ScrollRestoration/>
      </>
  )
}

export default Layout
