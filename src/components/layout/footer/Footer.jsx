import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Fondo-Footer">
      <a
        className="insta"
        href="https://www.instagram.com/bombones.artesanales_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        className="wpp"
        href="https://api.whatsapp.com/message/ZHG4ETQ4LRVSC1?autoload=1&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  );
};

export default Footer;
