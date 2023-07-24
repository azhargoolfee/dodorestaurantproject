import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const FrenchFooter = () => {
  return (
    <div className="footer">
      <footer id='footerlinks'>
        <Link id='footerlocation' to="/frenchlocation">Emplacement</Link>
        <Link id='footerlocation' to="/frenchaboutus">À propos de nous</Link>
        <Link id='footerlocation' to="/frenchnewsletterpage">Bulletin d'information</Link>
        <Link id='footerlocation' to="/frenchreviewspage">Commentaires</Link>
        <Link id='footerlocation' to="/frenchmenuoftheday">Menu du jour</Link>
        <Link id='footerlocation' to="/frenchfaqpage">FAQ</Link>
      </footer>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>
      <p className="copyright">
        &copy; 2023 DODO Restaurant. Tous droits réservés.
      </p>
    </div>
  );
}

export default FrenchFooter;
