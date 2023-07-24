import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';

import LogoImg from './images/mylogo.svg';


const FrenchNewsletterPage = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('FR');

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
                    <Link id="logo" to="/frenchhomepage">
                        <img id="logoimg" src={LogoImg} alt="RestaurantLogo" />
                    </Link>
                </div>

                <div className="links">
                    <Link to="/frenchhomepage">Accueil</Link>
                    <div
                        className="menu-dropdown"
                        onMouseEnter={toggleMenu}
                        onMouseLeave={toggleMenu}
                    >
                        <Link to="/frenchmenu">Menu</Link>
                        {isMenuOpen && (
                            <div className="dropdown-content">
                                <Link to="/frenchstarters" onClick={closeMenu}>
                                Entrées
                                </Link>
                                <Link to="/frenchplatters" onClick={closeMenu}>
                                Plateaux
                                </Link>
                                <Link to="/frenchmains" onClick={closeMenu}>
                                   Plat Principal
                                </Link>
                                <Link to="/frenchdrinks" onClick={closeMenu}>
                                Boissons
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/frenchreviewspage">Commentaires</Link>
                    <Link id="homeorderonline" to="/frenchorderonlinepage">
                        Commander en ligne
                    </Link>
                    <Link id="homeorderonline" to="/frenchbook">
                        Réserver une table
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
            <h1>S'abonner à notre lettre d'information</h1>
            {subscribed ? (
                <div className="confirmation">

                    <div className="confirmation-text">
                        <h1>-</h1>
                        <p>Merci {name}!</p>
                        <p>Vous êtes maintenant inscrit à notre lettre d'information.</p>
                        <Link id='homeorderonline' to="/frenchhomepage">Retour à l'accueil</Link>
                    </div>
                </div>
            ) : (
                <div className="subscription-box">
                    <input
                        type="text"
                        placeholder="Votre nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Votre adresse électronique"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Votre numéro de téléphone"
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
                            Offres quotidiennes
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={futureEvents}
                                onChange={() => setFutureEvents(!futureEvents)}
                            />
                            Événements à venir
                        </label>
                    </div>
                    <button className="subscribe-button" onClick={handleSubscribe}>
                    S'abonner
                    </button>
                </div>
            )}
        </div>
        <FrenchFooter/>
        </div>
    );
};

export default FrenchNewsletterPage;
