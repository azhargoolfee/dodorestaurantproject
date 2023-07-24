import owner from './images/owner.jpg';
import chef from './images/chef.jpg';
import souschef from './images/souschef.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import FrenchFooter from './FrenchFooter';
const FrenchAboutus = () => {

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

    return (
        <div className="aboutuspage"> <nav className="navbar">
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
            <h1>À propos de nous</h1>
            <div class="aboutus-container">


                <div className="box"><div class="text-center">

                    <img src={owner} alt="Propriétaire" class="rounded-picture" />
                </div>
                    <h3 class="text-center">Jyanvi Carma (Propriétaire)</h3>
                    <p class="text-center">Jyanvi, l'heureuse propriétaire du restaurant DODO, est une personne visionnaire et passionnée qui a fait de ses rêves culinaires une réalité. Dotée d'une personnalité chaleureuse et accueillante, elle a créé une expérience gastronomique qui captive les clients dès qu'ils franchissent les portes de l'établissement. L'amour de Jyanvi pour la cuisine transparaît dans tous les aspects du restaurant DODO, du menu méticuleusement élaboré à l'ambiance chaleureuse et accueillante. </p></div>
                <div className="box"> <div class="text-center">
                    <img src={chef} alt="chef" class="rounded-picture" />
                </div>
                    <h3 class="text-center">Dalton Dalton (Chef)</h3>
                    <p class="text-center">Dalton, chef extraordinaire du DODO Restaurant, possède un talent inégalé pour créer des chefs-d'œuvre culinaires qui font vibrer les papilles gustatives des clients. Grâce à son vaste répertoire de techniques culinaires et à sa connaissance approfondie des saveurs, Dalton apporte une touche unique à chaque plat qu'il crée. Sa créativité ne connaît pas de limites, puisqu'il combine de manière experte des ingrédients issus de diverses traditions culinaires pour réaliser des créations innovantes et inoubliables. </p></div>
                <div className="box"> <div class="text-center">
                    <img src={souschef} alt="chef" class="rounded-picture" />
                </div>
                    <h3 class="text-center">Ooba Ooba (Sous-Chef)</h3>
                    <p class="text-center">Ooba, l'excellent sous-chef de DODO Restaurant, est une force avec laquelle il faut compter dans le monde culinaire. Doté d'un talent inné pour la précision et d'un engagement inébranlable en faveur de l'excellence, Ooba joue un rôle essentiel dans le succès du restaurant. Travaillant en étroite collaboration avec le chef de cuisine, Ooba apporte une attention méticuleuse aux détails et une compréhension approfondie des techniques culinaires à chaque plat qui sort de la cuisine. Leur capacité à orchestrer la synchronisation et la coordination de recettes complexes est tout simplement extraordinaire.</p>
                </div></div>





                </div>
                <FrenchFooter/>
        </div>



    );
}

export default FrenchAboutus;