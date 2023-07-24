import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <footer id='footerlinks'>
        <Link id='footerlocation' to="/location">Location</Link>
        <Link id='footerlocation' to="/aboutus">About Us</Link>
        <Link id='footerlocation' to="/newsletterpage">Newsletter</Link>
        <Link id='footerlocation' to="/reviewspage">Reviews</Link>
        <Link id='footerlocation' to="/menuoftheday">Menu of the day</Link>
        <Link id='footerlocation' to="/faqpage">FAQ</Link>
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
        &copy; 2023 DODO Restaurant. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
