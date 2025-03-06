import React from 'react';
import useScrollStates from '../../components/scrollState';
import designer from '../../assets/images/designer.webp';
import Button from '../../components/button';
import FeaturedWork from '../../components/cards/featuredWork';
import Testimonials from '../../components/testimonials';
import bacchae from '../../assets/images/portfolio-hero.webp';
import bacchae2 from '../../assets/images/designer.webp';
import sophiatown from '../../assets/images/sophiatown.webp';
import sophiatown2 from '../../assets/images/sophiatown2.webp';
import snowflakes from '../../assets/images/snowflakes.webp';
import snowflakes2 from '../../assets/images/snowflakes2.webp';
import rent from '../../assets/images/rent.webp';
import rent2 from '../../assets/images/rent2.webp';
import cadava from '../../assets/images/cadava.webp';
import cadava2 from '../../assets/images/cadava2.webp';
import copenhagen from '../../assets/images/copenhagen.webp';
import copenhagen2 from '../../assets/images/copenhagen2.webp';
import tpatp from '../../assets/images/tpatp.webp';
import tpatp2 from '../../assets/images/tpatp2.webp';
import footlights from '../../assets/images/footlights.webp';
import footlights2 from '../../assets/images/footlights2.webp';

const cardsData = [
  {
    frontImage: bacchae,
    backImage: bacchae2,
    title: 'Bacchae',
    description: 'Costume Designer, Draper, Dyer, Stitcher',
    viewLink: '/bacchae-umass-amherst'
  },
  {
    frontImage: sophiatown,
    backImage: sophiatown2,
    title: 'Sophia Town',
    description: 'Costume Designer, Milliner, Dyer, Stitcher',
    viewLink: '/sophiatown'
  },
  {
    frontImage: snowflakes,
    backImage: snowflakes2,
    title: 'Snowflakes',
    description: 'Costume Designer',
    viewLink: '/snowflakesumass-rand-theatre'
  },
  {
    frontImage: rent,
    backImage: rent2,
    title: 'Rent',
    description: 'Costume Designer, Maker and Wardrobe Mistress',
    viewLink: '/rent-adc-theatre-uk'
  },
  {
    frontImage: cadava,
    backImage: cadava2,
    title: 'Cadaver Exquisito ',
    description: 'Costume Designer',
    viewLink: '/cadaver-esquisito-umass-amherst'
  },
  {
    frontImage: copenhagen,
    backImage: copenhagen2,
    title: 'Copenhagen',
    description: 'Costume Designer',
    viewLink: '/rcopenhagen-corpus-playroom-uk'
  },
  {
    frontImage: tpatp,
    backImage: tpatp2,
    title: 'The Princess and the Pea',
    description: 'Costume Designer and Wardrobe Mistress',
    viewLink: '/footlights-the-princess-and-the-peaadc-theatre'
  },
  {
    frontImage: footlights,
    backImage: footlights2,
    title: 'Footlights: The History of Everything',
    description: 'Costume Designer, Maker and Wardrobe Mistress',
    viewLink: '/footlights-history-of-everything-adc-theatre-uk'
  },
]
const Designer = () => {
  const { second, third } = useScrollStates();

  return (
    <div className='designer-page'>
      <section className="hero">
        <img
          src={designer}
          alt="Emma Hollows Design, designer, west-end London"
          className='hero-image'
        />
        <div className="text-box">
          <h1 className="main-title">Designer</h1>
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
          <div className="subtitle">Designer</div>
          <h2>My Design Work</h2>
          <p>
            As a designer I am very research driven: establishing a solid foundation of research helps me to
            create a rich and dynamic world on stage or screen. I love to share this research with the other
            members of my design team and the actors, to bounce ideas around and hear what discoveries they have
            made in their own research, which all informs my costume designs.
          </p>
        </div>
        <FeaturedWork cardWidth='400px' cardsData={cardsData} />
      </section>
      <section className={`third-section ${third ? 'anim' : 'none'}`}>
        <Testimonials />
      </section>
    </div>
  )
}

export default Designer
