import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const Starters = () => {

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

    return (
        <div className="starterspage"> <nav className="navbar">
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
            <h1 className="menu-title">Starters</h1>
            <div className="specific-menu-box">
                <div className="specific-menu-section">
                    <ul>
                        <h3>Mild  - 🌶️  | Hot - 🌶️🌶️ | Very Hot - 🌶️🌶️🌶️ |  Vegetarian - 🍃</h3>
                        <li>Fried Calamari (🌶️) - $10      </li>
                        <li>Cheesy Bites (🌶️) - $5</li>
                        <li>Tuna and crab cakes (🌶️🌶️) - $10</li>
                        <li>Gâteau piment (🌶️🌶️|🍃) - $5</li>
                        <li>Fish ball and seafood soup (🌶️🌶️🌶️) - $10</li>
                        <li>Vegetable dumplings soup (🌶️|🍃) - $5</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Starters;
