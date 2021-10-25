import React from 'react';
import api from '../utils/api';

import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('Jacques Cousteau');
  const [userDescription, setUserDescription] = React.useState('Explorer');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  // Ensure API request for information is only made once
  React.useEffect(() => {
    api.getRemoteData().then(([userData, initialCards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards([...initialCards]);
    })
    .catch(console.log);
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
          <button className="profile__avatar-button" onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Edit" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="add-button" type="button" aria-label="Add" onClick={props.onAddPlaceClick}></button>
      </section>

      <section className="places">
        { cards.map((card, i) => ((<Card key={i} card={card} onCardClick={props.onCardClick}/>))) }
      </section>
    </main>
  );
}

export default Main;
