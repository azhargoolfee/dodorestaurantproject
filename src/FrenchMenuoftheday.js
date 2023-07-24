import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import gatopiment from './images/gatopiment.jpeg';
import FrenchFooter from './FrenchFooter';

const FrenchMenuoftheday = () => {

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
        <div className="menuofthedaypage">
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
            <h1 className="reviews-title">Menu du jour </h1>
            <div className="food-image">
                <img src={gatopiment} alt="L'aliment du jour" className="food-image" />
            </div>
            <div className="menucontent">
                <div className="recipe">
                    <h2>Gâteau piment</h2>
                    <p>
                    Le gâteau piment (également connu sous le nom de "gâteau piments" ou "gato pima") est un en-cas populaire et apprécié à l'île Maurice, une nation insulaire située dans l'océan Indien. Il s'agit d'un type de beignet mauricien de lentilles frites que l'on trouve couramment sur les marchés locaux, dans les stands de cuisine de rue, et qui est parfois servi comme accompagnement dans les restaurants.

L'ingrédient principal du gateau piment est le pois jaune cassé (dhal), qui est trempé, moulu et mélangé à diverses épices et herbes pour créer une pâte savoureuse. Les ingrédients typiques utilisés dans la pâte sont les suivants:
</p>
<ul>
<li>Pois jaunes cassés (chana dal) : Trempés et moulus pour former la base du beignet. </li>
<li>Oignons : finement hachés et ajoutés à la pâte pour plus de saveur. </li>
<li>Piment bonnet écossais ou piments verts : Ils apportent la chaleur et le piquant caractéristiques du gateau piment. </li>
<li> Feuilles de curry : Les feuilles de curry fraîches sont couramment utilisées pour leur saveur aromatique.</li>
<li>Curcuma : Donne une couleur dorée aux beignets. </li>
<li> Sel : Pour rehausser le goût général. </li>
<li>Poudre à lever : pour donner aux beignets une texture légère et aérée. </li>
<li>Eau : Utilisée pour former une pâte épaisse. </li>

</ul>
<p>
Une fois la pâte préparée, de petites portions sont façonnées en boules ou aplaties en petits disques et frites jusqu'à ce qu'elles deviennent croustillantes et dorées. Le gateau piment fini est généralement servi chaud et apprécié en tant qu'en-cas ou apéritif, souvent accompagné d'un chutney ou d'une sauce épicée à tremper.

Le gateau piment est un en-cas populaire parmi les Mauriciens et est considéré comme faisant partie de l'héritage culinaire du pays. Il s'agit d'une friandise délicieuse et épicée que les Mauriciens et les visiteurs apprécient comme une bouchée rapide et savoureuse.
                    </p>
                </div>
               
            </div>
        </div>
        <FrenchFooter/>
        </div>
    );
};

export default FrenchMenuoftheday;
