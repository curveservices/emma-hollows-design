import FeaturedWork from '../../components/cards/featuredWork';
import useFirestoreData from '../../components/useFirestoreData';
import LoadingSpinner from '../../components/loadingSpinner';
import Helmet from '../../components/helmet';
import Socials from '../../components/socials';

const Supervisor = () => {
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
    <div className="wardrobe-page">
      <section className="hero">
        <div className="text-box">
          <h1 className="main-title">Costume Supervisor</h1>
          <div className="subtitle">Emma Hollows</div>
        </div>
        <div className="socials">
          <Socials />
        </div>
      </section>
      <section className={`second-section`}>
        <FeaturedWork
          cardsData={supervisorData}
        />
      </section>
      <Helmet
        title="Supervisor | London Costume Desgin for Theatre and Film"
        description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
        keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
      />
    </div>
  );
}

export default Supervisor;
