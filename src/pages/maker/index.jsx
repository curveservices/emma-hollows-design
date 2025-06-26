import Socials from '../../components/socials';
import FeaturedWork from '../../components/cards/featuredWork';
import LoadingSpinner from '../../components/loadingSpinner';
import useFirestoreData from '../../components/useFirestoreData';
import Helmet from '../../components/helmet';

const Maker = () => {
    const { cardsData: makerData, loading: loadingMaker, error: makerError } = useFirestoreData('maker');
    const { cardsData: millineryData, loading: loadingMillinery, error: millineryError } = useFirestoreData('millinery');
    const { cardsData: masksData, loading: loadingMasks, error: masksError } = useFirestoreData('masks');
    const { cardsData: otherData, loading: loadingOther, error: otherError} = useFirestoreData('other');
    if (loadingMaker || loadingMillinery || loadingMasks || loadingOther) return <LoadingSpinner />;
    if (makerError || millineryError || masksError || otherError) return <div className='error-message'>Error: {makerError || millineryError || masksError || otherError}</div>;
  return (
    <div className="maker-page">
      <section className="hero">
        <div className="text-box">
          <h1 className="main-title">Maker</h1>
          <div className="subtitle">Emma Hollows</div>
        </div>
        <div className="socials">
          <Socials />
        </div>
      </section>
      <section className={`second-section`}>
        <FeaturedWork cardsData={makerData} />
        <div className="text-box">
          <div className="subtitle">Millinery</div>
        </div>
        <FeaturedWork cardsData={millineryData} />
        <div className="text-box">
          <div className="subtitle">Masks</div>
        </div>
        <FeaturedWork cardsData={masksData} />
        <div className="text-box">
          <div className="subtitle">Other</div>
        </div>
        <FeaturedWork cardsData={otherData} />
      </section>
      <Helmet
        title="Maker | London Costume Desgin for Theatre and Film"
        description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
        keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
      />
    </div>
  );
}

export default Maker
