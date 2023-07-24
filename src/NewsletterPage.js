import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import LogoImg from './images/mylogo.svg';


const NewsletterPage = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLanguageClick = (language) => {
    setActiveLanguage(language);
  };

    const [subscribed, setSubscribed] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dailyOffers, setDailyOffers] = useState(false);
    const [futureEvents, setFutureEvents] = useState(false);

    const handleSubscribe = () => {
        setSubscribed(true);
    };

    return (
        <div className="newsletterpagepage">
             <nav className="navbar">
      <div className="logo">
        <Link id="logo" to="/">
          <img id="logoimg" src={LogoImg} alt="RestaurantLogo" />
        </Link>
      </div>

      <div className="links">
      <Link to="/">Home</Link>
        <div
          className="menu-dropdown"
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          <Link to="/menu">Menu</Link>
          {isMenuOpen && (
            <div className="dropdown-content">
              <Link to="/starters" onClick={closeMenu}>
                Starters
              </Link>
              <Link to="/platters" onClick={closeMenu}>
                Platters
              </Link>
              <Link to="/mains" onClick={closeMenu}>
                Mains
              </Link>
              <Link to="/drinks" onClick={closeMenu}>
                Drinks
              </Link>
            </div>
          )}
        </div>
        <Link to="/reviewspage">Reviews</Link>
        <Link id="homeorderonline" to="/orderonlinepage">
          Order Online
        </Link>
        <Link id="homeorderonline" to="/book">
          Book Now
        </Link>

        <div id="language-container">
          <Link
            id="languagestyle"
            to="/newsletterpage"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchnewsletterpage"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

        <div className="newsletter-page">
            <h1>Subscribe to Our Newsletter</h1>
            {subscribed ? (
                <div className="confirmation">

                    <div className="confirmation-text">
                        <h1>-</h1>
                        <p>Thanks {name}!</p>
                        <p>You are now subscribed to our newsletter.</p>
                        <Link id='homeorderonline' to="/">Go back home</Link>
                    </div>
                </div>
            ) : (
                <div className="subscription-box">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="checkboxes">
                        <label>
                            <input
                                type="checkbox"
                                checked={dailyOffers}
                                onChange={() => setDailyOffers(!dailyOffers)}
                            />
                            Daily Offers
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={futureEvents}
                                onChange={() => setFutureEvents(!futureEvents)}
                            />
                            Future Events
                        </label>
                    </div>
                    <button className="subscribe-button" onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
            )}
        </div>
        <Footer/>
        </div>
    );
};

export default NewsletterPage;
