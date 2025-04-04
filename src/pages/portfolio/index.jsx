import React from 'react';
import portfolioHero from '../../assets/images/portfolio-hero.webp';
import Button from '../../components/button';
import FeaturedWork from '../../components/cards/featuredWork'
import useScrollStates from '../../components/scrollState';
import Helmet from '../../components/helmet';
import FlipBookGallery from '../../components/sketchBooks';
import LoadingSpinner from '../../components/loadingSpinner';
import useFirestoreData from '../../components/useFirestoreData';
import './index.scss';

const Portfolio = () => {
  const { second, third } = useScrollStates();
  const { cardsData, loading, error } = useFirestoreData('portfolio');
  if (loading) return <LoadingSpinner />;
  if (error) return <div className='error-message'>Error: {error}</div>
  return (
    <>
      <div className='portfolio-page'>
        <section className="hero">
          <img
            src={portfolioHero}
            alt='Emma Hollows, custome design portfolio, west end London'
            className='hero-image'
          />
          <div className="text-box">
            <h1 className="main-title">My Portfolio</h1>
            <div className="subtitle">designer | supervisor | maker</div>
            <div className="btn-container">
              <Button
                text="work with me"
                link="/contact"
                background="var(--secondary)"
                color="#000"
              />
              <Button text="find out About Me" link="/about-me" color="#fff" />
            </div>
          </div>
        </section>
        <section className={`second-section ${second ? 'anim' : 'none'}`}>
          <div className="text-box">
            <div className="subtitle">My Work</div>
            <h2>Explore my portfolio</h2>
            <p>
              I have been working for a number of years in both the UK and the USA where I trained in Costume Design at the University of
              Massachusetts Amherst. Some previous highlights of my career have been working on The Nutcracker at the Royal Albert Hall in London;
              numerous productions at Shakespeare and Company in Massachusetts; and touring up the East Coast of the USA with The Cambridge American Stage Tour.
            </p>
          </div>
          <FeaturedWork cardsData={cardsData} cardWidth='300px' />
          <section className={`third-section ${third ? 'anim' : "none"}`}>
            <div className="text-box">
            <div className="subtitle">design sketches</div>
              <h2>Sketch books</h2>
              <p className="desktop-view">Click the pages to flick through my design sketches</p>
              <p className="mobile-view">Swipe the pages to flick through my design sketches</p>
            <FlipBookGallery/>
          </div>
          </section>
        </section>
         <Helmet
          title="Portfolio | London Costume Desgin for Theatre and Film"
          description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
          keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
        />
      </div>
    </>
  )
}

export default Portfolio
