import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';
import LogoImg from './images/mylogo.svg';

const FrenchStarters = () => {

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
        <div className="starterspage"> <nav className="navbar">
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
              to="/starters"
              className={activeLanguage === 'EN' ? 'active-language' : ''}
              onClick={() => handleLanguageClick('EN')}
            >
              EN 
            </Link>
            
            <Link
              id="languagestyle"
              to="/frenchstarters"
              className={activeLanguage === 'FR' ? 'active-language' : ''}
              onClick={() => handleLanguageClick('FR')}
            >
             FR
            </Link>
          </div>
        </div>
      </nav>
  
        <div className="specific-menu-page">
            <h1 className="menu-title">Entrées</h1>
            <div className="specific-menu-box">
                <div className="specific-menu-section">
                    <ul>
                        <h3>Doux - 🌶️ | Piquant - 🌶️🌶️ | Très piquant - 🌶️🌶️🌶️ | Végétarien - 🍃</h3>
                        <li>Calamars frits (🌶️) - $10      </li>
                        <li>Bouchées au fromage (🌶️) - $5</li>
                        <li>Gâteaux au thon et au crabe (🌶️🌶️) - $10</li>
                        <li>Gâteau piment (🌶️🌶️|🍃) - $5</li>
                        <li>Soupe de boulettes de poisson et de fruits de mer (🌶️🌶️🌶️) - $10</li>
                        <li>Soupe de boulettes de légumes (🌶️|🍃) - $5</li>
                    </ul>
                </div>
            </div>
        </div>
        <FrenchFooter/>
        </div>
    );
};

export default FrenchStarters;
