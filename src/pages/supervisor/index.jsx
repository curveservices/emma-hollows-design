import useScrollStates from '../../components/scrollState';
import FeaturedWork from '../../components/cards/featuredWork';
import maker from '../../assets/images/home-hero.webp';
import useFirestoreData from '../../components/useFirestoreData';
import LoadingSpinner from '../../components/loadingSpinner';
import Helmet from '../../components/helmet';


const Supervisor = () => {
  const { second } = useScrollStates();
  const {
    cardsData: supervisorData,
    loading: loadingSupervisor,
    error: errorSupervisor,
  } = useFirestoreData("wardrobe");
  if (loadingSupervisor)
    return <LoadingSpinner />;
  if (errorSupervisor)
    return <div className="error-message">Error: {error}</div>;
  return (
    <div className='wardrobe-page'>
       <section className="hero">
            <img
                src={maker}
                alt="Emma Hollows Design, maker, west-end London"
                className='hero-image'
              />
              <div className="text-box">
                  <h1 className="main-title">Costume Supervisor</h1>
                  <div className="subtitle">Emma Hollows</div>
              </div>
          </section>
          <section className={`second-section ${second ? 'anim' : 'none'}`}>
              <div className="text-box">
                  <div className="subtitle">Supervisor</div>
                  <h2>My Supervisor Work</h2>
                  <p>
                      I have been working for a number of years in both the UK and the USA where I trained in Costume Design
                      at the University of Massachusetts Amherst. Some previous highlights of my career have been working on
                      The Nutcracker at the Royal Albert Hall in London; numerous productions at Shakespeare and Company in Massachusetts.
                  </p>
              </div>
              <FeaturedWork cardsData={supervisorData} cardWidth='400px' />
              
          </section>
           <Helmet
          title="Wardrobe | London Costume Desgin for Theatre and Film"
          description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
          keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
        />
    </div>
  )
}

export default Supervisor;
