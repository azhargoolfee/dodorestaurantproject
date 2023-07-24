import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';
import LogoImg from './images/mylogo.svg';

const FrenchFAQPage = () => {

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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: 'Quel type de cuisine le restaurant DODO sert-il ?',
      answer: 'Le DODO Restaurant est spécialisé dans loffre d un menu varié de cuisine internationale, comprenant des plats dinspiration méditerranéenne, asiatique et américaine. Notre carte propose un large éventail d entrées, de plateaux, de plats principaux et de boissons pour répondre à tous les goûts.',
    },
   
    {
        question: 'Puis-je faire une réservation au DODO Restaurant ?',
        answer: 'Absolument ! Nous encourageons les clients à réserver afin de garantir une expérience gastronomique sans faille. Vous pouvez facilement réserver une table sur notre site web ou en nous appelant. Nous vous recommandons de nous fournir des informations telles que le nombre de places, les allergies éventuelles, l occasion, ainsi que la date et l heure souhaitées pour une expérience gastronomique sur mesure.',
    },
    {
        question: 'Quels sont les horaires d ouverture du restaurant DODO ?',
      answer: 'Notre restaurant est ouvert du lundi au vendredi, de 11h00 à 23h00. Le samedi, nous ouvrons à 10h00 et fermons à 23h00. Le dimanche, nous ouvrons à 10 heures et fermons à 21 heures. Veuillez noter que ces horaires sont susceptibles d être modifiés pendant les vacances et les occasions spéciales. Il est donc préférable de consulter notre site web ou de nous contacter pour toute mise à jour.',
    },
   
      {
        question: 'Puis-je commander de la nourriture en ligne au DODO Restaurant ?',
      answer: 'Absolument ! Nous proposons à nos clients des services de commande en ligne très pratiques. Il vous suffit de visiter notre site web, de parcourir notre menu et de sélectionner les articles que vous souhaitez commander. Une fois votre commande passée, vous pouvez vous attendre à ce qu elle soit prête à être récupérée dans un délai de 30 minutes environ.',},
      {
        question: 'Le DODO Restaurant tient-il compte des restrictions alimentaires et des allergies ?',
      answer: 'Oui, nous comprenons l importance de répondre aux différents besoins alimentaires. Lors de votre réservation ou de votre commande en ligne, veuillez préciser vos allergies ou vos restrictions alimentaires. Nos chefs feront de leur mieux pour répondre à vos besoins et préparer un délicieux repas qui réponde à vos exigences.',
    },
   
      {
        question: 'Le DODO Restaurant propose-t-il des options végétariennes ou végétaliennes ?',
        answer: 'Absolument ! Nous proposons une sélection de plats végétariens et végétaliens sur notre carte. Nos chefs ont sélectionné une variété des options savoureuses et satisfaisantes pour répondre aux besoins de nos clients végétariens et végétaliens. Ne hésitez pas à demander à notre personnel de vous recommander des plats ou à consulter notre menu pour connaître les choix disponibles.',
     },
      {
        question: 'Le DODO Restaurant propose-t-il des services de restauration pour des événements ou des fêtes ?',
        answer: 'Oui, nous proposons des services de restauration pour divers événements et fêtes. Qu il s agisse d une réunion de entreprise, d un anniversaire ou d une réception de mariage, notre équipe peut travailler avec vous pour créer un menu personnalisé qui réponde à vos préférences et à vos besoins diététiques. Veuillez nous contacter à l avance pour discuter des détails et prendre les dispositions nécessaires.',
       },
   
      {
        question: 'Le DODO Restaurant dispose-t-il d un parking ?',
      answer: 'Bien que nous ne disposions pas de installations de stationnement dédiées, plusieurs options de stationnement sont disponibles à proximité de notre établissement. Il y a des places de stationnement payantes dans la rue ainsi que des garages publics à proximité du restaurant. Nous vous recommandons de vérifier les possibilités de stationnement dans les environs avant votre visite.',
    },
      {
        question: 'Puis-je apporter mon propre vin ou mes propres boissons alcoolisées au DODO Restaurant ?',
      answer: 'Malheureusement, nous ne autorisons pas les clients à apporter leurs propres boissons alcoolisées. Toutefois, nous proposons une vaste sélection de vins, de bières, de cocktails et des autres boissons alcoolisées et non alcoolisées que vous pourrez déguster lors de votre visite. Notre personnel compétent peut vous recommander la boisson idéale pour accompagner votre repas.',
    },
   
      {
        question: 'Le DODO Restaurant offre-t-il des promotions spéciales ou des réductions ?',
      answer: 'Oui, nous organisons occasionnellement des promotions spéciales et offrons des réductions à nos clients estimés. Ces promotions peuvent inclure des menus saisonniers, des offres spéciales "happy hour" ou des réductions exclusives pour certaines occasions. Pour rester au courant de nos dernières offres, nous vous recommandons de vous abonner à notre newsletter ou de suivre nos canaux de médias sociaux pour les annonces et les promotions.',
    },
  ];

  return (
    <div className="faqpagepage">
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
            to="/faqpage"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchfaqpage"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

    <div className="faq-page">
      <h1>FOIRE AUX QUESTIONS</h1>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq-question">{item.question}</div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    <FrenchFooter/>
    </div>
  );
};

export default FrenchFAQPage;
