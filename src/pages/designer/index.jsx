;import FeaturedWork from '../../components/cards/featuredWork';
import useFirestoreData from '../../components/useFirestoreData';
import LoadingSpinner from '../../components/loadingSpinner';
import Helmet from '../../components/helmet';
import Socials from '../../components/socials';

const Designer = () => {
  const {cardsData, loading, error} = useFirestoreData('designer');
  if (loading) return <LoadingSpinner />;
  if (error) return <div className='error-message'>Error: {error}</div>;

  return (
    <div className="designer-page">
      <section className="hero">
        <div className="text-box">
          <h1 className="main-title">Designer</h1>
          <Socials />
        </div>
      </section>
      <section className={`second-section`}>
        <FeaturedWork cardWidth="300px" cardsData={cardsData} />
      </section>
      <Helmet
        title="Designer | London Costume Desgin for Theatre and Film"
        description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
        keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
      />
    </div>
  );
}

export default Designer
