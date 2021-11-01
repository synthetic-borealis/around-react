// Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

// Contexts
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// Misc. Utils
import api from "../utils/api";

// Constants
import {
  popupTransitionDuration,
} from '../utils/constants';

import React from "react";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [isEditProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    // Ensure visitors don't notice the image popup resetting
    setTimeout(() => {
      setSelectedCard({});
    }, popupTransitionDuration);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser(user) {
    api.updateUserInfo(user)
      .then(setCurrentUser)
      .finally(() => closeAllPopups())
      .catch(console.log);
  }

  function handleUpdateAvatar({avatar}) {
    api.updateUserAvatar(avatar)
      .then(setCurrentUser)
      .finally(() => closeAllPopups())
      .catch(console.log);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  // Ensure API request for user information is only made once
  React.useEffect(() => {
    api.getInitialCards().then((initialCards) => setCards([...initialCards])).catch(console.log);
  }, []);

  // Ensure API request for card data is only made once
  React.useEffect(() => {
    api.getUserData().then(setCurrentUser).catch(console.log);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page-container">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onEditAvatarClick={handleEditAvatarClick}
          onAddPlaceClick={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUserUpdate={handleUpdateUser}/>

        <PopupWithForm name="add" title="New place" buttonCaption="Create" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label className="form__field">
            <input id="place-title-input" type="text" placeholder="Title" name="title" required
              className="form__input form__input_type_place-title" minLength="1" maxLength="30" />
            <span className="form__error place-title-input-error">Here be error message.</span>
          </label>
          <label className="form__field">
            <input id="place-link-input" type="url" placeholder="Image Link" name="link" required
              className="form__input form__input_type_place-link" />
            <span className="form__error place-link-input-error">Here be error message.</span>
          </label>
        </PopupWithForm>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <PopupWithForm name="confirm" title="Are you sure?" buttonCaption="Yes" onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
