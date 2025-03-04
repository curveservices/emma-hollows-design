import React, { useEffect, useState } from 'react';
import portfolioHero from '../../assets/images/portfolio-hero.webp';
import Button from '../../components/button';
import FeaturedWork from '../../components/cards/featuredWork'
import designer from '../../assets/images/designer.webp';
import maker from '../../assets/images/bodice.webp';
import card2back from '../../assets/images/bodice1.webp';
import wardrobe from '../../assets/images/home-hero.webp';
import card3back from '../../assets/images/tina2.webp';
import film from '../../assets/images/film.webp';
import card4back from '../../assets/images/mw2.webp';

import './index.scss';

const cardsData = [
  {
    frontImage: designer,
    backImage: portfolioHero,
    title: 'Designer',
    description: 'Designer | Supervisor | Maker',
    viewLink: '/designer'
  },
  {
    frontImage: maker,
    backImage: card2back,
    title: 'Maker',
    description: 'Designer | Supervisor | Maker',
    viewLink: '/maker'
  },
  {
    frontImage: wardrobe,
    backImage: card3back,
    title: 'Wardrobe',
    description: 'Designer | Supervisor | Maker',
    viewLink: '/wardrobe'
  },
  {
    frontImage: film,
    backImage: card4back,
    title: 'Film',
    description: 'Designer | Supervisor | Maker',
    viewLink: '/film'
  },
];
const Portfolio = () => {
  const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const scrollSecond = window.scrollY;
        const scrollThird = window.scrollY;
        setSecond(scrollSecond > 150)
        setThird(scrollThird > 0)
      };
      window.addEventListener('scroll', handleScroll)
    }, []);
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
              Lorem ipsum dolor sit amet consectetur. Molestie consectetur malesuada venenatis dis suspendisse gravida egestas. Lacinia augue euismod massa in et diam nisl. Arcu metus duis et risus vel tristique dictumst praesent.
            </p>
          </div>
          <FeaturedWork cardsData={cardsData}/>
        </section>
        <section className={`third-section ${third ? "anim" : "none"}`}>
          <div className="text-box">
            <div className="subtitle">design sketches</div>
            <h2>Sketch books</h2>
          </div>
          <p>!! sketch books container !!</p>
        </section>
      </div>
    </>
  )
}

export default Portfolio
