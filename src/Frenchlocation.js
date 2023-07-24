import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';
import LogoImg from './images/mylogo.svg';

const FrenchLocation = () => {
    
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

    return (
        <div className="locationpage">
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
            to="/location"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchlocation"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

        <div className="location-div">
            <div className="title">
               
                <div class="container mt-5">
                    <h1 class="text-center-location">Notre emplacement</h1>
                    <div class="location-container">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >Adresse</h3>
                                <p >75 Laurier Ave E, Ottawa, ON, Canada</p>
                                <h3>Numéro de téléphone</h3>
                                <p>(420) 696 9696</p>
                                <h3 >Heures d'ouverture</h3>
                                <p ><strong>Du lundi au vendredi:</strong> 11:00 AM - 11:00 PM</p>
                                <p ><strong>Samedi:</strong> 10:00 AM - 11:00 PM</p>
                                <p ><strong>Dimanche:</strong> 10:00 AM - 9:00 PM</p>
                            </div>
                            <div class="col-md-6">
                                <h3 >Carte</h3>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe title="maps" class="embed-responsive-item"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.5602772593096!2d-75.69358578419348!3d45.42226297910057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0491d9646bcb%3A0x204f2e799c97b9b6!2s75%20Laurier%20Ave%20E%2C%20Ottawa%2C%20ON%20K1N%206N5%2C%20Canada!5e0!3m2!1sen!2sus!4v1662626188019!5m2!1sen!2sus"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>
            </div>
            <FrenchFooter/>
        </div>
    );
}

export default FrenchLocation;