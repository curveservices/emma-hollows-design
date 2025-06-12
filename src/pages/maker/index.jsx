import useScrollStates from '../../components/scrollState';
import maker from '../../assets/images/bodice.webp';
import Button from '../../components/button';
import FeaturedWork from '../../components/cards/featuredWork';
import LoadingSpinner from '../../components/loadingSpinner';
import useFirestoreData from '../../components/useFirestoreData';
import Helmet from '../../components/helmet';

const Maker = () => {
    const { second, third } = useScrollStates();
    
    const { cardsData: makerData, loading: loadingMaker, error: makerError } = useFirestoreData('maker');
    const { cardsData: millineryData, loading: loadingMillinery, error: millineryError } = useFirestoreData('millinery');
    const { cardsData: masksData, loading: loadingMasks, error: masksError } = useFirestoreData('masks');
    const { cardsData: otherData, loading: loadingOther, error: otherError} = useFirestoreData('other');
    if (loadingMaker || loadingMillinery || loadingMasks || loadingOther) return <LoadingSpinner />;
    if (makerError || millineryError || masksError || otherError) return <div className='error-message'>Error: {makerError || millineryError || masksError || otherError}</div>;
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
                  <div className="subtitle">Emma Hollows</div>
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
              <FeaturedWork cardWidth='400px' cardsData={makerData} />
              <div className="text-box">
                  <div className="subtitle">Millinery</div>
              </div>
              <FeaturedWork cardWidth='400px' cardsData={millineryData} />
              <div className="text-box">
                  <div className="subtitle">Masks</div>
              </div>
              <FeaturedWork cardWidth='300px' cardsData={masksData} />
              <div className="text-box">
                  <div className="subtitle">Other</div>
              </div>
              <FeaturedWork cardWidth='400px' cardsData={otherData} />
          </section>
           <Helmet
          title="Maker | London Costume Desgin for Theatre and Film"
          description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
          keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
        />
    </div>
  )
}

export default Maker
