import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';


import { useNavigate } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';

const FrenchBookingConfirmation = ({ data }) => {

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

  
  const { firstName, lastName, email, allergies, seats, occasion, date, time } = data;
  const navigate = useNavigate();
  

  const handleGoFrenchHome = () => {
    navigate('/frenchhomepage');
  }

  return (
    <div className="bookingconfirmationpage">
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
            to="/book"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchbook"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

    <div className="confirmation-page">
      <div className="confirmation-message">
        <p>Merci {firstName} {lastName} d'avoir réservé une table au DODO Restaurant.</p>
        <p>Nous nous réjouissons de vous accueillir dans notre restaurant.</p>
      </div>

      <div className="booking-details">
        <h2>Détails de la réservation</h2>
        <p>Numéro de référence : <span>{Math.floor(Math.random() * 100000)}</span></p>
        <p>Courriel: <span>{email}</span></p>
        <p>Allergies: <span>{allergies}</span></p>
        <p>Nombre de sièges: <span>{seats}</span></p>
        <p>Occasion: <span>{occasion}</span></p>
        <p>Date: <span>{date}</span></p>
        <p>L'heure: <span>{time}</span></p>
      </div>

      <div className="buttons">
        
        <button id='bookBtn' className="go-home" onClick={handleGoFrenchHome}>Retour à l'accueil</button>
      </div>
    </div>
    <FrenchFooter/>
    </div>
  );
}

export default FrenchBookingConfirmation;
