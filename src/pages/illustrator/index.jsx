import Socials from '../../components/socials';
import FeaturedWork from '../../components/cards/featuredWork'
import Helmet from '../../components/helmet';
import LoadingSpinner from '../../components/loadingSpinner';
import useFirestoreData from '../../components/useFirestoreData';
import './index.scss';

const Illustrator = () => {
  const { cardsData, loading, error } = useFirestoreData('illustrations');
  if (loading) return <LoadingSpinner />;
  if (error) return <div className='error-message'>Error: {error}</div>
  return (
    <>
      <div className='portfolio-page'>
        <section className="hero">
          <div className="text-box">
            <h1 className="main-title">Illustrator</h1>
            <div className="subtitle">Emma Hollows</div>
          </div>
          <div className="socials">
            <Socials />
          </div>
        </section>
        <section className={`second-section`}>
          <FeaturedWork cardsData={cardsData} />
        </section>
         <Helmet
          title="Portfolio | London Costume Desgin for Theatre and Film"
          description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
          keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
        />
      </div>
    </>
  )
}

export default Illustrator;
