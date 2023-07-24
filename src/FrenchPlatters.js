import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';
import LogoImg from './images/mylogo.svg';

const FrenchPlatters = () => {

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
        <div className="platterspage">
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
            to="/platters"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchplatters"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

        <div className="specific-menu-page">
            <h1 className="menu-title"> Plateaux</h1>
            <div className="specific-menu-box">
                <div className="specific-menu-section">
                    <ul>
                        <h3>Doux - 🌶️ | Piquant - 🌶️🌶️ | Très piquant - 🌶️🌶️🌶️ | Végétarien - 🍃</h3>
                        <li>Farata et choix de 2 currys (🌶️|🍃) - $15</li>
                        <li>La daube poulet (🌶️🌶️) - $15</li>
                        <li>Curry de poisson masala (🌶️🌶️🌶️) - $15</li>
                        <li>Ragoût de poulpe (🌶️) - $15</li>
                        <li>Curry de crevettes (🌶️🌶️) - $15</li>
                        <li>Plateau de 7 curries (🌶️|🍃) - $15</li>
                    </ul>
                </div>
            </div>
        </div>
        <FrenchFooter/>
        </div>
    );
};

export default FrenchPlatters;
