import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import hero from "../../assets/images/home-hero.webp";
import "./index.scss";
import FeaturedWork from "../../components/cards/featuredWork";
import Testimonials from "../../components/testimonials";

const Home = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollSecond = window.scrollY;
      const scrollThird = window.scrollY;
      setSecond(scrollSecond > 150)
      setThird(scrollThird > 1200)
    };
    window.addEventListener('scroll', handleScroll)
  }, []);
  return (
    <>
      <div className="home-page">
        <section className="hero">
          <img
            src={hero}
            alt="Costume designer, West-end London"
            className="hero-image"
          />
          <div className="text-box">
            <h1 className="main-title">Emma Hollows Design</h1>
            <div className="subtitle">designer | supervisor | maker</div>
            <div className="btn-container">
              <Button
                text="work with me"
                link="contact"
                background="var(--secondary)"
              />
              <Button text="My Portfolio" link="portfolio" color="#fff" />
            </div>
          </div>
        </section>
        <section className={`second-section ${second ? 'anim' : 'none'}`}>
        <div className="text-box">
          <div className="subtitle" style={{color:'var(--secondary)' }}>My portfolio</div>
            <h2>Latest Work</h2>
            <p>As a designer I am very research driven: establishing a solid foundation of research helps
              me to create a rich and dynamic world on stage or screen. I love to share this research with
              the other members of my design team and the actors, to bounce ideas around and hear what discoveries
              they have made in their own research, which all informs my costume designs.</p>
          </div>
          <FeaturedWork/>
          <div className="btn-container">
            <Button
              text='portfolio'
              link='portfolio'
              background='var(--secondary)'
            />
          </div>
        </section>
        <section className={` ${third ? 'anim' : 'none'}`}>
          <Testimonials />
        </section>
      </div>
      
    </>
  );
};

export default Home;
