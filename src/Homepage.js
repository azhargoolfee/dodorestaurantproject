

import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import Footer from './Footer';
import NewsletterImg from './images/newsletter.jpeg';
import menuotd from './images/menuotd.jpg';
import crew from './images/crew.jpg';
import openinghours from './images/openinghours.jpg';
import customer from './images/customer.jpg';
import VideoMP4 from './images/video-1.mp4';
import React, { useState } from 'react';
import LogoImg from './images/mylogo.svg';
const Homepage = () => {

   




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

        <div className="home">


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

            <div className="homepage-content">

                <video src={VideoMP4} autoPlay loop muted />

                <div className="mission-container">
                    <div className="welcomemsg">
                        <h1>Welcome to Dodo Restaurant</h1>
                    </div>
                    <div className="mission-title">
                        <p>Our Mission</p>
                    </div>
                    <p className="mission-description">
                        The mission of DODO Restaurant extends far beyond providing exceptional food and dining experiences. At its core, DODO Restaurant aims to create a haven where guests can indulge in the pleasures of delicious cuisine while fostering a sense of warmth, connection, and joy. The restaurant strives to be a gathering place, where friends and families can come together to celebrate special occasions, create lasting memories, and forge meaningful connections. DODO Restaurant is committed to sourcing the finest, freshest ingredients, supporting local suppliers, and promoting sustainability in its practices. The culinary team takes pride in crafting dishes that are not only flavorful and visually stunning but also thoughtfully prepared with a fusion of global influences.
                    </p>
                    <Link id='homeorderonlinemargin' to="/orderonlinepage">Order Online</Link>
                    <Link id='homeorderonline' to="/book">Book a table with us</Link>
                </div>


            </div>
            {/* <div className="precards">
                <h1>.</h1>
            </div> */}

            <div className="cards">
                <h1 id='cardtitle' >See What Makes Us Different</h1>

                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src={NewsletterImg}
                                text='Subscribe to our newsletter to learn about daily offers and future events at DODO Restaurant!'
                                path='/NewsletterPage'
                            />
                            <CardItem
                                src={menuotd}
                                text='Check out our Menu of the Day!'
                                path='/menuoftheday'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src={crew}
                                text='Read more about us and learn about the people behind our lovely restaurant!'
                                path='/aboutus'
                            />
                            <CardItem
                                src={openinghours}
                                text='Check out our location and opening hours!'
                                path='/location'
                            />
                            <CardItem
                                src={customer}
                                text='Read some of the lovely reviews that our dearest customers wrote about us!'                            
                                path='/reviewspage'
                            />
                        </ul>
                    </div>
                </div>

            </div>

            <Footer /> 
        </div>

    );
   
};

export default Homepage;
