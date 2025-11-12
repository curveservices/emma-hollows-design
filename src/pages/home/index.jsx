
import Button from "../../components/button";
import FeaturedWork from "../../components/cards/featuredWork";
import Helmet from "../../components/helmet";
import useFirestoreData from "../../components/useFirestoreData";
import LoadingSpinner from "../../components/loadingSpinner";
import Socials from "../../components/socials";

const Home = () => {
  const { cardsData: featuredData, loading: loadingFeatured, error: errorFeatued } = useFirestoreData("featured");
  if (loadingFeatured) return <LoadingSpinner />;
  if (errorFeatued) return <div className='error-message'>Error: {error}</div>;
  return (
    <>
      <div className="home-page">
        <div className="hero">
          <div className="text-box">
            <h1 className="main-title">Costume Designer and Supervisor</h1>
            <Socials />
          </div>
        </div>
        <div className={`second-section`}>
          <FeaturedWork cardsData={featuredData} />
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
