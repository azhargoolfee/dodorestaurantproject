import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const Mains = () => {

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
        <div className="mainspage">
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
            to="/mains"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchmains"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

        <div className="specific-menu-page">
            <h1 className="menu-title">Mains</h1>
            <div className="specific-menu-box">
                <div className="specific-menu-section">
                    <ul>
                        <h3>Mild  - 🌶️  | Hot - 🌶️🌶️ | Very Hot - 🌶️🌶️🌶️ |  Vegetarian - 🍃</h3>
                        <li>Mine frite (🌶️) - $10</li>
                        <li>Riz frite (🌶️) - $8</li>
                        <li>Haalim with bread (🌶️🌶️🌶️|🍃) - $10</li>
                        <li>Dhall puri with curry (🌶️|🍃) - $8</li>
                        <li>Vermicelli noodles (🌶️) - $10</li>
                        <li>Pain kebab (🌶️🌶️) - $8</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Mains;
