import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FrenchFooter from './FrenchFooter';
import LogoImg from './images/mylogo.svg';
const FrenchReviewsPage = () => {
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

  const [reviews, setReviews] = useState([
    { id: 1, text: 'Le DODO Restaurant est le meilleur !', likes: 10 },
    { id: 2, text: 'Le propriétaire est toujours là pour vous accueillir ! A recommander.', likes: 5 },
    { id: 3, text: 'Une ambiance géniale !', likes: 8 },
  ]);
  const [newReviewText, setNewReviewText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLikeReview = (reviewId) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, likes: review.likes + 1 };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  const handleAddReview = () => {
    const newReview = {
      id: reviews.length + 1,
      text: newReviewText,
      likes: 0,
    };
    setReviews([...reviews, newReview]);
    setNewReviewText('');
  };

  const filteredReviews = reviews.filter((review) =>
    review.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedReviews = filteredReviews.sort((a, b) => b.likes - a.likes);

  return (
    <div className="reviewpage">
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
            to="/reviewspage"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchreviewspage"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

    <div className="reviews-page">
      <h1 className="reviews-title">Commentaires des clients</h1>
      <div className="search-bar">
        <input
        id='menusearch'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Recherche d'une revue..."
        />
      </div>
      <div className="reviews-list">
        {sortedReviews.map((review) => (
          <div key={review.id} className="review-item">
            <p>{review.text}</p>
            <div className="review-likes">
              <span>Aimes: {review.likes}</span>
              <button onClick={() => handleLikeReview(review.id)}>Aimer</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-review">
        <h2>Écrire un commentaire</h2>
        <textarea
          value={newReviewText}
          onChange={(e) => setNewReviewText(e.target.value)}
          placeholder="Écrivez votre commentaire..."
        ></textarea>
        <button onClick={handleAddReview}>Soumettre</button>
      </div>
    </div>
    <FrenchFooter/>
    </div>
  );
};

export default FrenchReviewsPage;
