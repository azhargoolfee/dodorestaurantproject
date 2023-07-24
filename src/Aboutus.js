import owner from './images/owner.jpg';
import chef from './images/chef.jpg';
import souschef from './images/souschef.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const Aboutus = () => {

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
        <div className="aboutuspage"> <nav className="navbar">
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
              to="/aboutus"
              className={activeLanguage === 'EN' ? 'active-language' : ''}
              onClick={() => handleLanguageClick('EN')}
            >
              EN 
            </Link>
            
            <Link
              id="languagestyle"
              to="/frenchaboutus"
              className={activeLanguage === 'FR' ? 'active-language' : ''}
              onClick={() => handleLanguageClick('FR')}
            >
             FR
            </Link>
          </div>
        </div>
      </nav>
  
        <div className="about-us">
            <h1>About Us</h1>
            <div class="aboutus-container">


                <div className="box"><div class="text-center">

                    <img src={owner} alt="chef" class="rounded-picture" />
                </div>
                    <h3 class="text-center">Jyanvi Carma (Owner)</h3>
                    <p class="text-center">Jyanvi, the proud owner of DODO Restaurant, is a visionary and passionate individual who has turned her culinary dreams into reality. With a warm and welcoming personality, she has created a dining experience that captivates guests from the moment they step through the doors. Jyanvi's love for food shines through in every aspect of DODO Restaurant, from the meticulously crafted menu to the cozy and inviting ambiance. </p></div>
                <div className="box"> <div class="text-center">
                    <img src={chef} alt="chef" class="rounded-picture" />
                </div>
                    <h3 class="text-center">Dalton Dalton (Chef)</h3>
                    <p class="text-center">Dalton, an extraordinary chef at DODO Restaurant, possesses an unrivaled talent for creating culinary masterpieces that tantalize the taste buds of patrons. With a vast repertoire of cooking techniques and a profound understanding of flavors, Dalton brings a unique flair to every dish he creates. His creativity knows no bounds, as he expertly combines ingredients from diverse culinary traditions to craft innovative and unforgettable creations. </p></div>
                <div className="box"> <div class="text-center">
                    <img src={souschef} alt="chef" class="rounded-picture" />
                </div>
                    <h3 class="text-center">Ooba Ooba (Sous-Chef)</h3>
                    <p class="text-center">Ooba, a remarkable sous-chef at DODO Restaurant, is a force to be reckoned with in the culinary world. With an innate talent for precision and an unwavering commitment to excellence, Ooba plays an integral role in the restaurant's success. Working closely with the head chef, Ooba brings meticulous attention to detail and a deep understanding of culinary techniques to every dish that leaves the kitchen. Their ability to orchestrate the timing and coordination of complex recipes is nothing short of extraordinary.</p>
                </div></div>





                </div>
                <Footer/>
        </div>



    );
}

export default Aboutus;