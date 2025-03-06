import React from 'react';
import useScrollStates from '../../components/scrollState';
import maker from '../../assets/images/bodice.webp';
import Button from '../../components/button';
import FeaturedWork from '../../components/cards/featuredWork';
import Testimonials from '../../components/testimonials';

const cardsData = [
  {
    frontImage: '',
    backImage: '',
    title: 'Bacchae',
    description: 'Costume Designer, Draper, Dyer, Stitcher',
    viewLink: '/bacchae-umass-amherst'
  },
//   {
//     frontImage: sophiatown,
//     backImage: sophiatown2,
//     title: 'Sophia Town',
//     description: 'Costume Designer, Milliner, Dyer, Stitcher',
//     viewLink: '/sophiatown'
//   },
//   {
//     frontImage: snowflakes,
//     backImage: snowflakes2,
//     title: 'Snowflakes',
//     description: 'Costume Designer',
//     viewLink: '/snowflakesumass-rand-theatre'
//   },
//   {
//     frontImage: rent,
//     backImage: rent2,
//     title: 'Rent',
//     description: 'Costume Designer, Maker and Wardrobe Mistress',
//     viewLink: '/rent-adc-theatre-uk'
//   },
//   {
//     frontImage: cadava,
//     backImage: cadava2,
//     title: 'Cadaver Exquisito ',
//     description: 'Costume Designer',
//     viewLink: '/cadaver-esquisito-umass-amherst'
//   },
//   {
//     frontImage: copenhagen,
//     backImage: copenhagen2,
//     title: 'Copenhagen',
//     description: 'Costume Designer',
//     viewLink: '/rcopenhagen-corpus-playroom-uk'
//   },
//   {
//     frontImage: tpatp,
//     backImage: tpatp2,
//     title: 'The Princess and the Pea',
//     description: 'Costume Designer and Wardrobe Mistress',
//     viewLink: '/footlights-the-princess-and-the-peaadc-theatre'
//   },
//   {
//     frontImage: footlights,
//     backImage: footlights2,
//     title: 'Footlights: The History of Everything',
//     description: 'Costume Designer, Maker and Wardrobe Mistress',
//     viewLink: '/footlights-history-of-everything-adc-theatre-uk'
//   },
]

const Maker = () => {
    const { second, third } = useScrollStates();
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
              <FeaturedWork cardsData={cardsData} cardWidth='400px' />
          </section>
          <section className={`third-section ${third ? 'anim' : 'none'}`}>
              <Testimonials />
          </section>
    </div>
  )
}

export default Maker
