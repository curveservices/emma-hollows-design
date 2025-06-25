
import Button from "../../components/button";
import FeaturedWork from "../../components/cards/featuredWork";
import Helmet from "../../components/helmet";
import useFirestoreData from "../../components/useFirestoreData";
import LoadingSpinner from "../../components/loadingSpinner";
import Socials from "../../components/socials";

const Home = () => {
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
          <div className="text-box">
            <h1 className="main-title">Emma Hollows</h1>
            <div className="subtitle">Costume Designer and Supervisor</div>
          </div>
          <div className="socials">
            <Socials />
          </div>
        </div>
        <div className={`second-section`}>
          <FeaturedWork cardsData={supervisorData} />
          <FeaturedWork cardsData={designerData} />
          <FeaturedWork cardsData={makerData} />
          <FeaturedWork cardsData={illustratorData} />
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
