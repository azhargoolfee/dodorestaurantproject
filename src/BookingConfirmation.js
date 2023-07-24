import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';


const BookingConfirmation = ({ data }) => {

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

  const { firstName, lastName, email, allergies, seats, occasion, date, time } = data;


  return (
    <div className="bookingconfirmationpage">
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
        <p>Thank you {firstName} {lastName} for booking a table at DODO Restaurant.</p>
        <p>We are looking forward to welcoming you at our restaurant.</p>
      </div>

      <div className="booking-details">
        <h2>Booking Details</h2>
        <p>Reference Number: <span>{Math.floor(Math.random() * 100000)}</span></p>
        <p>Email: <span>{email}</span></p>
        <p>Allergies: <span>{allergies}</span></p>
        <p>Number of Seats: <span>{seats}</span></p>
        <p>Occasion: <span>{occasion}</span></p>
        <p>Date: <span>{date}</span></p>
        <p>Time: <span>{time}</span></p>
      </div>

      <div className="buttons">
        
        <button id='bookBtn' className="go-home" onClick={() => window.location.href = '/'}>Go back home</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default BookingConfirmation;
