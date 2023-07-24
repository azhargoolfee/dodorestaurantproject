import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const Menu = () => {
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
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const menuItems = [
        {
            category: 'Starters',
            items: [
                'Fried Calamari (🌶️) - $10',
                'Cheesy Bites (🌶️) - $5',
                'Tuna and crab cakes (🌶️🌶️) - $10',
                'Gâteau piment (🌶️🌶️|🍃)  - $5',
                'Fish ball and seafood soup (🌶️🌶️🌶️) - $10',
                'Vegetable dumplings soup (🌶️|🍃) - $5',
            ],
        },
        {
            category: 'Platters',
            items: [
                'Farata and choice of 2 curries (🌶️|🍃) - $15',
                'La daube poulet (🌶️🌶️) - $15',
                'Fish masala curry (🌶️🌶️🌶️) - $15',
                'Octopus stew (🌶️) - $15',
                'Shrimp curry (🌶️🌶️) - $15',
                '7 curries platter (🌶️|🍃) - $15',
            ],
        },
        {
            category: 'Mains',
            items: [
                'Mine frite (🌶️) - $10',
                'Riz frite (🌶️) - $8',
                'Haalim with bread (🌶️🌶️🌶️|🍃) - $10',
                'Dhall puri with curry (🌶️|🍃) - $8',
                'Vermicelli noodles (🌶️) - $10',
                'Pain kebab (🌶️🌶️) - $8',
            ],
        },
        {
            category: 'Drinks',
            items: [
                'Panakon - $3',
                'Lemonade - $4',
                'Coconut water - $3',
                'Eski - $4',
                'Pearona - $3',
                'Fanta Passion - $4',
            ],
        },
    ];

    const filteredItems = menuItems
        .filter((category) =>
            category.items.some((item) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
        .map((category) => ({
            ...category,
            items: category.items.filter((item) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        }));

    return (
      <div className="menupage">
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
            to="/menu"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchmenu"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>
        <div className="menu-page">
           
            <h1 className="menu-title">Our Menu</h1>
            <h3>
                Mild - 🌶️ | Hot - 🌶️🌶️ | Very Hot - 🌶️🌶️🌶️ | Vegetarian - 🍃
            </h3>
           
                <div className="menu-search">
                    <input
                    id='menusearch'
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search food item..."
                    />
                </div>
                <div className="menu-box">
                {filteredItems.map((category, index) => (
                    <div key={index} className="menu-section">
                        <h2>{category.category}</h2>
                        <ul>
                            {category.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="menu-guide">
                    <div className="guide"></div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Menu;
