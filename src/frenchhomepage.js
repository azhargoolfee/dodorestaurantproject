import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import NewsletterImg from './images/newsletter.jpeg';
import menuotd from './images/menuotd.jpg';
import crew from './images/crew.jpg';
import openinghours from './images/openinghours.jpg';
import customer from './images/customer.jpg';
import VideoMP4 from './images/video-1.mp4';
import React, { useState } from 'react';
import LogoImg from './images/mylogo.svg';
import FrenchFooter from './FrenchFooter';
const FrenchHomepage = () => {
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

        <div className="home">


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
                        <h1>Bienvenue au Dodo Restaurant</h1>
                    </div>
                    <div className="mission-title">
                        <p>Notre mission</p>
                    </div>
                    <p className="mission-description">
                        La mission du restaurant DODO va bien au-delà de la fourniture de plats et d'expériences culinaires exceptionnels. Au fond, le restaurant DODO vise à créer un havre où les clients peuvent s'adonner aux plaisirs d'une cuisine délicieuse tout en favorisant un sentiment de chaleur, de connexion et de joie. Le restaurant s'efforce d'être un lieu de rencontre, où les amis et les familles peuvent se réunir pour célébrer des occasions spéciales, créer des souvenirs durables et forger des liens significatifs. Le restaurant DODO s'engage à se procurer les ingrédients les plus fins et les plus frais, à soutenir les fournisseurs locaux et à promouvoir le développement durable dans ses pratiques. L'équipe culinaire est fière de créer des plats qui sont non seulement savoureux et visuellement étonnants, mais aussi préparés de manière réfléchie avec une fusion d'influences mondiales.
                    </p>
                    <Link id='homeorderonlinemargin' to="/frenchorderonlinepage">Commander en ligne</Link>
                    <Link id='homeorderonline' to="/frenchbook">Réserver une table avec nous</Link>
                </div>


            </div>
            {/* <div className="precards">
                <h1>.</h1>
            </div> */}

            <div className="cards">
                <h1 id='cardtitle' >Découvrez ce qui nous différencie</h1>

                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src={NewsletterImg}
                                text='Inscrivez-vous à notre lettre de information pour connaître les offres du jour et les événements à venir au DODO Restaurant !'
                                path='/frenchnewsletterpage'
                            />
                            <CardItem
                                src={menuotd}
                                text='Découvrez notre menu du jour !'
                                path='/frenchmenuoftheday'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src={crew}
                                text='Apprenez-en plus sur nous et découvrez les personnes qui se cachent derrière notre charmant restaurant!'
                                path='/frenchaboutus'
                            />
                            <CardItem
                                src={openinghours}
                                text='Consultez notre emplacement et nos heures de ouverture !'
                                path='/frenchlocation'
                            />
                            <CardItem
                                src={customer}
                                text='Lisez quelques-uns des commentaires élogieux que nos clients les plus chers ont écrit à notre sujet !'
                                path='/frenchreviewspage'
                            />
                        </ul>
                    </div>
                </div>

            </div>

            <FrenchFooter />
        </div>


    );
}

export default FrenchHomepage;