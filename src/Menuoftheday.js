import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import gatopiment from './images/gatopiment.jpeg';
import Footer from './Footer';

const Menuoftheday = () => {

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
        <div className="menuofthedaypage">
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
            to="/menuoftheday"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchmenuoftheday"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

        <div className="menu-of-the-day">
            <h1 className="reviews-title">Menu of the Day </h1>
            <div className="food-image">
                <img src={gatopiment} alt="Food of the Day" className="food-image" />
            </div>
            <div className="menucontent">
                <div className="recipe">
                    <h2>Gâteau piment</h2>
                    <p>
                    Gateau piment (also known as "gâteau piments" or "gato pima") is a popular and beloved snack in Mauritius, an island nation located in the Indian Ocean. It is a type of Mauritian deep-fried lentil fritter that is commonly found in local markets, street food stalls, and sometimes served as an accompaniment in restaurants.

The main ingredient of gateau piment is split yellow peas (dhal), which are soaked, ground, and mixed with various spices and herbs to create a flavorful batter. The typical ingredients used in the batter include:
</p>
<ul>
<li> Split yellow peas (chana dal): Soaked and ground to form the base of the fritter.</li>
<li> Onions: Finely chopped and added to the batter for additional flavor.</li>
<li> Scotch bonnet chili or green chilies: These provide the heat and spiciness characteristic of gateau piment.</li>
<li> Curry leaves: Fresh curry leaves are commonly used for their aromatic flavor.</li>
<li> Turmeric: Provides a golden color to the fritters.</li>
<li>  Salt: To enhance the overall taste.</li>
<li> Baking powder: To give the fritters a light and airy texture.</li>
<li> Water: Used to form a thick batter.</li>

</ul>
<p>
Once the batter is prepared, small portions are either shaped into balls or flattened into small discs and deep-fried until they become crispy and golden brown. The finished gateau piment is typically served hot and enjoyed as a snack or appetizer, often with chutney or a spicy sauce for dipping.

Gateau piment is a popular snack among Mauritians and is considered a part of the country's culinary heritage. It's a delicious and spicy treat that locals and visitors alike enjoy as a quick and flavorful bite.
                    </p>
                </div>
               
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Menuoftheday;
