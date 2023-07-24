import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';
import LogoImg from './images/mylogo.svg';
const FrenchMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('FR');

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
      category: 'Entrées',
      items: [
        'Calamars frits (🌶️) - $10',
        'Bouchées au fromage (🌶️) - $5',
        'Gâteaux au thon et au crabe (🌶️🌶️) -$10',
        'Gâteau piment (🌶️🌶️|🍃) - $5',
        'Soupe de boulettes de poisson et de fruits de mer (🌶️🌶️🌶️) - $10',
        'Soupe de boulettes de légumes (🌶️|🍃) - $5',
      ],
    },
    {
      category: 'Plateaux',
      items: [
        'Farata et choix de 2 currys (🌶️|🍃) - $15',
        'La daube poulet (🌶️🌶️) - $15',
        'Curry de poisson masala (🌶️🌶️🌶️) - $15',
        'Ragoût de poulpe (🌶️) - $15',
        'Curry de crevettes (🌶️🌶️) - $15',
        'Plateau de 7 curries (🌶️|🍃) - $15',
      ],
    },
    {
      category: 'Plat Principal',
      items: [
        'Mine frite (🌶️) - $10',
        'Riz frite (🌶️) - $8',
        'Haalim avec du pain (🌶️🌶️🌶️|🍃) - $10',
        'Dhall puri au curry  (🌶️|🍃) - $8',
        'Nouilles de vermicelles (🌶️) - $10',
        'Pain kebab (🌶️🌶️) - $8',
      ],
    },
    {
      category: 'Drinks',
      items: [
        'Panakon - $3',
        'Limonade - $4',
        'Eau de coco - $3',
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
          <Link id="logo" to="/frenchhomepage">
            <img id="logoimg" src={LogoImg} alt="RestaurantLogo" />
          </Link>
        </div>

        <div className="links">
          <Link to="/frenchhomepage">Accueil</Link>
          <div
            className="menu-dropdown"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
          >
            <Link to="/frenchmenu">Menu</Link>
            {isMenuOpen && (
              <div className="dropdown-content">
                <Link to="/frenchstarters" onClick={closeMenu}>
                  Entrées
                </Link>
                <Link to="/frenchplatters" onClick={closeMenu}>
                  Plateaux
                </Link>
                <Link to="/frenchmains" onClick={closeMenu}>
                  Plat Principal
                </Link>
                <Link to="/frenchdrinks" onClick={closeMenu}>
                  Boissons
                </Link>
              </div>
            )}
          </div>
          <Link to="/frenchreviewspage">Commentaires</Link>
          <Link id="homeorderonline" to="/frenchorderonlinepage">
            Commander en ligne
          </Link>
          <Link id="homeorderonline" to="/frenchbook">
            Réserver une table
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

        <h1 className="menu-title">Notre menu</h1>
        <h3>
        Doux - 🌶️ | Piquant - 🌶️🌶️ | Très piquant - 🌶️🌶️🌶️ | Végétarien - 🍃
        </h3>

        <div className="menu-search">
          <input
            id='menusearch'
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Rechercher un élément de menu..."
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
      <FrenchFooter />
    </div>
  );
};

export default FrenchMenu;
