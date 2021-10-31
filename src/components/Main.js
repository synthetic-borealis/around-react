import React from 'react';
import api from '../utils/api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card';

function Main(props) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
  }

  // Ensure API request for user information is only made once
  React.useEffect(() => {
    api.getInitialCards().then((initialCards) => setCards([...initialCards.reverse()])).catch(console.log);
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
          <button className="profile__avatar-button" onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Edit" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="add-button" type="button" aria-label="Add" onClick={props.onAddPlaceClick}></button>
      </section>

      <section className="places">
        { cards.map(card => ((<Card key={card["_id"]} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike}/>))) }
      </section>
    </main>
  );
}

export default Main;