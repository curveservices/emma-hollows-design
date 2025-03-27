import "./index.scss";
import notFound from "../../assets/images/404.webp";
import Button from "../../components/button";
import Helmet from "../../components/helmet";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <h1>PAGE NOT FOUND</h1>
        <Button text="Back home" link="/" background='var(--secondary)'/>
        <img src={notFound} alt="page not found" />
      </div>
      <Helmet
          title="Error 404 Page Not Found"
        />
    </>
  );
};

export default NotFound;
