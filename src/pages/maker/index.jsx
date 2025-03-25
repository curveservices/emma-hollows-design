import React from 'react';
import useScrollStates from '../../components/scrollState';
import maker from '../../assets/images/bodice.webp';
import Button from '../../components/button';
import FeaturedWork from '../../components/cards/featuredWork';
import Testimonials from '../../components/testimonials';
import LoadingSpinner from '../../components/loadingSpinner';
import useFirestoreData from '../../components/useFirestoreData';

const Maker = () => {
  const { second, third } = useScrollStates();
  const {cardsData, loading, error} = useFirestoreData('maker');
  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='maker-page'>
        <section className="hero">
            <img
                src={maker}
                alt="Emma Hollows Design, maker, west-end London"
                className='hero-image'
              />
              <div className="text-box">
                  <h1 className="main-title">Maker</h1>
                  <div className="subtitle">Emma Hollows Design</div>
                  <div className="btn-container">
                    <Button
                        text="work with me"
                        link="/contact"
                        background="var(--secondary)"
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
                  <div className="subtitle">Maker</div>
                  <h2>My Maker Work</h2>
                  <p>
                      I have been working for a number of years in both the UK and the USA where I trained in Costume Design
                      at the University of Massachusetts Amherst. Some previous highlights of my career have been working on
                      The Nutcracker at the Royal Albert Hall in London; numerous productions at Shakespeare and Company in Massachusetts.
                  </p>
              </div>
              <FeaturedWork cardWidth='400px' cardsData={cardsData}  />
          </section>
          <section className={`third-section ${third ? 'anim' : 'none'}`}>
              <Testimonials />
          </section>
    </div>
  )
}

export default Maker
