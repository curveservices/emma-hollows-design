import React from "react";
import Button from "../../components/button";
import hero from "../../assets/images/tina2.webp";
import FeaturedWork from "../../components/cards/featuredWork";
import useScrollStates from "../../components/scrollState";
import Helmet from "../../components/helmet";
import useFirestoreData from "../../components/useFirestoreData";
import LoadingSpinner from "../../components/loadingSpinner";
import Socials from "../../components/socials";

const Home = () => {
  const { second } = useScrollStates();
  const { cardsData: designerData, loading: loadingDesigner, error: errorDesigner } = useFirestoreData('designer');
  const { cardsData: supervisorData, loading: loadingSupervisor, error: errorSupervisor } = useFirestoreData("wardrobe");
  const { cardsData: makerData, loading: loadingMaker, error: errorMaker } = useFirestoreData("maker");
  const { cardsData: illustratorData, loading: loadingIllustrator, error: errorIllustrator } = useFirestoreData("illustrations");
  if (loadingDesigner || loadingSupervisor || loadingMaker || loadingIllustrator) return <LoadingSpinner />;
  if (errorDesigner || errorSupervisor || errorMaker || errorIllustrator) return <div className='error-message'>Error: {error}</div>;
  return (
    <>
      <div className="home-page">
        <div className="hero">
          <img
            src={hero}
            alt="Costume designer, West-end London"
            className="hero-image"
          />
          <div className="text-box">
            <h1 className="main-title">Emma Hollows Design</h1>
            <div className="subtitle">Costume Designer and Supervisor</div>
            <div className="btn-container">
              <Button
                text="contact me"
                link="contact"
                background="#000"
                color="#fff"
              />
            </div>
          </div>
          <div className="socials">
            <Socials />
          </div>
        </div>
        <div className={`second-section ${second ? "anim" : "none"}`}>
          <div className="text-box">
            <div className="subtitle">My Work</div>
            <h2>Explore my portfolio</h2>
            <p>
              I have been working for a number of years in both the UK and the
              USA where I trained in Costume Design at the University of
              Massachusetts Amherst. Some previous highlights of my career have
              been working on The Nutcracker at the Royal Albert Hall in London;
              numerous productions at Shakespeare and Company in Massachusetts;
              and touring up the East Coast of the USA with The Cambridge
              American Stage Tour.
            </p>
          </div>
          <div className="subtitle">Costume Supervisor</div>
          <FeaturedWork cardsData={supervisorData} cardWidth="300px" />
          <div className="subtitle">Costume Designer</div>
          <FeaturedWork cardsData={designerData} cardWidth="300px" />
          <div className="subtitle">Costume Maker</div>
          <FeaturedWork cardsData={makerData} cardWidth="300px" />
          <div className="subtitle">Illustrations</div>
          <FeaturedWork cardsData={illustratorData} cardWidth="300px" />
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
