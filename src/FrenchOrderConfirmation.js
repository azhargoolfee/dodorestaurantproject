import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';
import LogoImg from './images/mylogo.svg';
const FrenchOrderConfirmation = () => {

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

    const [countdown, setCountdown] = useState(1800);  
    const [orderNumber, setOrderNumber] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

       
        const randomOrderNumber = Math.floor(Math.random() * 1000000);
        setOrderNumber(randomOrderNumber.toString());

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = countdown => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleGoToLocation = () => {
        navigate('/frenchlocation');
    };

    const handleGoHome = () => {
        navigate('/frenchhomepage');
    };

    return (
        <div className="orderconfirmationpage">
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
            to="/order-confirmation"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchorder-confirmation"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

        <div className="online-container">
            <div className="online-confirmation">
                <div id='onlineconfirmationmessage' className="online-confirmation-message">
                    <p id='onlinethankyou' >Merci d'avoir commandé en ligne au DODO Restaurant.</p>
                    <p>Votre commande devrait être prête en {formatTime(countdown)} minutes</p>
                    <p>Votre numéro de commande est {orderNumber}</p>
                    <p id='onlinethankyou' >Nous nous réjouissons de vous rencontrer.</p>
                </div>

                <div className="buttons">
                    <button id='homeorderonline' className="our-location" onClick={handleGoToLocation}>Notre emplacement</button>
                    <button id='homeorderonline' className="go-home" onClick={handleGoHome}>Retour à l'accueil</button>
                </div>
            </div>
        </div>
        <FrenchFooter/>
        </div>
    );
};

export default FrenchOrderConfirmation;
