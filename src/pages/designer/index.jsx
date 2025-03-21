import React from 'react';
import useScrollStates from '../../components/scrollState';
import designer from '../../assets/images/designer.webp';
import Button from '../../components/button';
import FeaturedWork from '../../components/cards/featuredWork';
import Testimonials from '../../components/testimonials';
import useFirestoreData from '../../components/useFirestoreData';
import LoadingSpinner from '../../components/loadingSpinner';

const Designer = () => {
  const { second, third } = useScrollStates();
  const {cardsData, loading, error} = useFirestoreData('designer');
  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

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
