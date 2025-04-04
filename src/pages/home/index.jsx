import React from "react";
import Button from "../../components/button";
import hero from "../../assets/images/tina2.webp";
import FeaturedWork from "../../components/cards/featuredWork";
import Testimonials from "../../components/testimonials";
import useScrollStates from "../../components/scrollState";
import Helmet from "../../components/helmet";
import useFirestoreData from "../../components/useFirestoreData";
import LoadingSpinner from "../../components/loadingSpinner";
import Socials from "../../components/socials";

const Home = () => {
  const { second, third } = useScrollStates();
  const {cardsData, loading, error} = useFirestoreData('featured');
  if (loading) return <LoadingSpinner />;
  if (error) return <div className='error-message'>Error: {error}</div>;
  return (
    <>
      <div className="home-page">
        <div className="hero">
          <div className="socials">
            <Socials/>
          </div>
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
                color="#000"
              />
              <Button text="My Portfolio" link="portfolio" color="#fff" />
            </div>
          </div>
        </div>
        <div className={`second-section ${second ? 'anim' : 'none'}`}>
          <div className="text-box">
            <div className="subtitle" style={{color:'var(--secondary)' }}>My portfolio</div>
            <h2>Latest Work</h2>
            <p>As a designer I am very research driven: establishing a solid foundation of research helps
              me to create a rich and dynamic world on stage or screen. I love to share this research with
              the other members of my design team and the actors, to bounce ideas around and hear what discoveries
              they have made in their own research, which all informs my costume designs.</p>
          </div>
          <FeaturedWork cardsData={cardsData} cardWidth='400px'/>
          <div className="btn-container">
            <Button
              text='my portfolio'
              link='portfolio'
              background='var(--secondary)'
              color='#000'
            />
          </div>
        </div>
        <div className={` ${third ? 'anim' : 'none'}`}>
          <Testimonials />
        </div>
        <Helmet
          title="Home | London Costume Desgin for Theatre and Film"
          description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
          keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
        />
      </div>
      
    </>
  );
};

export default Home;
