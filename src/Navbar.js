import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';

const Navbar = () => {
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
            to="/"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchhomepage"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
