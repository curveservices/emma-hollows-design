import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import "./index.scss";
import Navbar from "../navbar";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <div className="blurs">
        <div className="blur-left"></div>
        <div className="blur-right"></div>
      </div>
      <main className="app">
        <Outlet />
      </main>
      {showButton && (
        <button
          className="back-to-top"
          name="back to top"
          aria-label="arrow button back to top of page"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      <Footer/>
      <ScrollRestoration />
    </>
  );
};

export default Layout;
