import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const OrderConfirmation = () => {

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

    const [countdown, setCountdown] = useState(1800); 
    const [orderNumber, setOrderNumber] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

       
        const randomOrderNumber = Math.floor(Math.random() * 1000000);
        setOrderNumber(randomOrderNumber.toString());

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = countdown => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleGoToLocation = () => {
        navigate('/location');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="orderconfirmationpage">
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
            to="/order-confirmation"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchorder-confirmation"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

        <div className="online-container">
            <div className="online-confirmation">
                <div id='onlineconfirmationmessage' className="online-confirmation-message">
                    <p id='onlinethankyou' >Thank you for ordering online at DODO Restaurant.</p>
                    <p>Your order should be ready in {formatTime(countdown)} minutes</p>
                    <p>Your order number is {orderNumber}</p>
                    <p id='onlinethankyou' >We are looking forward to meeting you.</p>
                </div>

                <div className="buttons">
                    <button id='homeorderonline' className="our-location" onClick={handleGoToLocation}>Our Location</button>
                    <button id='homeorderonline' className="go-home" onClick={handleGoHome}>Go back home</button>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default OrderConfirmation;
