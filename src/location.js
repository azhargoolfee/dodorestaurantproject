import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const Location = () => {
    
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
        <div className="locationpage">
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
                    <h1 class="text-center-location">Our Location</h1>
                    <div class="location-container">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >Address</h3>
                                <p >75 Laurier Ave E, Ottawa, ON, Canada</p>
                                <h3>Phone Number</h3>
                                <p>(420) 696 9696</p>
                                <h3 >Opening Hours</h3>
                                <p ><strong>Monday - Friday:</strong> 11:00 AM - 11:00 PM</p>
                                <p ><strong>Saturday:</strong> 10:00 AM - 11:00 PM</p>
                                <p ><strong>Sunday:</strong> 10:00 AM - 9:00 PM</p>
                            </div>
                            <div class="col-md-6">
                                <h3 >Map</h3>
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
            <Footer/>
        </div>
    );
}

export default Location;