import {
  faFacebook,
  faFacebookF,
  faGithub,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faLinkedinIn,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./index.scss";

const Socials = (props) => {
  return (
    <>
      <ul className="iconList">
        <li className="icons">
          <Link
            to={props.fblink}
            target="_blank"
            alt="facebook"
            aria-label="follow us on facebook"
          >
            <FontAwesomeIcon icon={faFacebook} alt="facebook" color="var(--secondary)" />
          </Link>
        </li>
        <li className="icons">
          <Link
            to={props.lilink}
            target="_blank"
            alt="LinkedIn"
            aria-label="link with us on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn" color="var(--secondary)" />
          </Link>
        </li>
        <li className="icons">
          <Link
            to={props.instalink}
            target="_blank"
            alt="Instagram"
            aria-label="follow us on instagram"
          >
            <FontAwesomeIcon icon={faSquareInstagram} alt="Instagram Link" color="var(--secondary)" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Socials;
