import React, { useEffect, useState } from 'react';
import emma1 from '../../assets/images/emma1.webp';
import emma2 from '../../assets/images/emma2.webp';
import Button from '../../components/button';
import Socials from '../../components/socials';
import './index.scss';

const About = () => {
  const [second, setSecond] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 150)
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='about-page'>
      <section className="hero">
        <div className="hero-left">
          <h1>About Me</h1>
          <img
            src={emma1}
            alt="Emma Hollows Design, Costume designer, West-end London"
            className='portrait-image image-left'
          />
          <div className="btn-container">
            <Button
              text='work with me'
              link='contact'
              background='var(--secondary)'
            />
            <Button
              text='my portfolio'
              link='portfolio'
              color='#fff'
            />
          </div>
        </div>
        <div className="hero-right">
          <div className="subtitle desktop">designer | supervisor | Maker</div>
          <div className="subtitle mobile-view">designer</div>
          <p>
            I am a costume and set designer and maker currently working on London's West End as a Costume Technician at the Royal Opera House
            and as the Principal Dresser on the Tina Turner Musical. My designs can be seen in Liz Kingsman's sell out One-Woman Show currently
            on at the Soho Theatre which has received 5 star reviews across the board and was declared The Guardian's Number 1 Comedy Show of 2021.
          </p>
          <p>
            I have been working for a number of years in both the UK and the USA where I trained in Costume Design at the University of Massachusetts Amherst.
            Some previous highlights of my career have been working on The Nutcracker at the Royal Albert Hall in London; numerous productions at Shakespeare and Company
            in Massachusetts; and touring up the East Coast of the USA with The Cambridge American Stage Tour.
          </p>
          <Socials/>
        </div>
      </section>
      <div className={`second-section ${second ? "anim" : "none"}`}>
        <div className="second-left">
          <div className="subtitle desktop">designer | supervisor | maker</div>
          <div className="subtitle mobile-view">Maker</div>
          <p>
            As a designer I am very research driven: establishing a solid foundation of research helps me to create a rich and dynamic world on stage or screen.
            I love to share this research with the other members of my design team and the actors,
            to bounce ideas around and hear what discoveries they have made in their own research, which all informs my costume designs.
          </p>
          <p>
            I am always seeking new types of theatre and so far I have followed this interest to both India and South Africa to conduct formal research.
            In 2019 I visited South Africa to attend the National Arts Festival in Grahamstown and research the South African musical Sophiatown for my masters
            thesis which exhibited online at the Augusta Savage Gallery, MA, in May 2020. Click here to view the exhibition. In 2014, while at the University of Cambridge,
            I spent seven weeks travelling around India researching costumes for my undergraduate dissertation into the dressing room as a space for transformation in the ritual of performance.
            This trip included four weeks at Kerala Kalamandalam, the prestigious performing arts university in Kerala.
          </p>
        </div>
        <div className="second-right">
          <img
            src={emma2}
            alt="Emma Hollows Design, Costume designer, West-end London"
            className='portrait-image image-right'
          />
        </div>
      </div>
    </div>
  )
}

export default About
