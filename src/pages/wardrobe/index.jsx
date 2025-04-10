import React from 'react';
import useScrollStates from '../../components/scrollState';
import Testimonials from '../../components/testimonials';
import FeaturedWork from '../../components/cards/featuredWork';
import Button from '../../components/button';
import maker from '../../assets/images/home-hero.webp';
import useFirestoreData from '../../components/useFirestoreData';
import LoadingSpinner from '../../components/loadingSpinner';
import Helmet from '../../components/helmet';


const Wardrobe = () => {
  const { second, third } = useScrollStates();
  const { cardsData, loading, error } = useFirestoreData('wardrobe');
  if (loading) return <LoadingSpinner />;
  if (error) return <div className='error-message'>Error: {error}</div>;
  return (
    <div className='wardrobe-page'>
       <section className="hero">
            <img
                src={maker}
                alt="Emma Hollows Design, maker, west-end London"
                className='hero-image'
              />
              <div className="text-box">
                  <h1 className="main-title">Wardrobe</h1>
                  <div className="subtitle">Emma Hollows Design</div>
                  <div className="btn-container">
                    <Button
                        text="work with me"
                        link="/contact"
                          background="var(--secondary)"
                          color="#000"
                    />
                    <Button
                        text="My Portfolio"
                        link="/portfolio"
                        color="#fff"
                    />
                  </div>
              </div>
          </section>
          <section className={`second-section ${second ? 'anim' : 'none'}`}>
              <div className="text-box">
                  <div className="subtitle">Wardrobe</div>
                  <h2>My Wardrobe Work</h2>
                  <p>
                      I have been working for a number of years in both the UK and the USA where I trained in Costume Design
                      at the University of Massachusetts Amherst. Some previous highlights of my career have been working on
                      The Nutcracker at the Royal Albert Hall in London; numerous productions at Shakespeare and Company in Massachusetts.
                  </p>
              </div>
              <FeaturedWork cardsData={cardsData} cardWidth='400px' />
          </section>
          <section className={`third-section ${third ? 'anim' : 'none'}`}>
              <Testimonials />
          </section>
           <Helmet
          title="Wardrobe | London Costume Desgin for Theatre and Film"
          description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
          keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
        />
    </div>
  )
}

export default Wardrobe
