// Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

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
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm name="edit" title="Edit profile" buttonCaption="Save" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label className="form__field">
            <input id="profile-name-input" type="text" placeholder="Name" name="name" required className="form__input"
              minLength="2" maxLength="40" />
            <span className="form__error profile-name-input-error">Here be error message.</span>
          </label>
          <label className="form__field">
            <input id="profile-job-input" type="text" placeholder="Job" name="job" required className="form__input"
              minLength="2" maxLength="400" />
            <span className="form__error profile-job-input-error">Here be error message.</span>
          </label>
        </PopupWithForm>

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

        <PopupWithForm name="change-avatar" title="Change profile picture" buttonCaption="Save"
          isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <label className="form__field">
            <input id="profile-avatar-input" type="url" placeholder="Image Link" name="avatar" required
              className="form__input form__input_type_avatar-link" />
            <span className="form__error profile-avatar-input-error">Here be error message.</span>
          </label>
        </PopupWithForm>

        <PopupWithForm name="confirm" title="Are you sure?" buttonCaption="Yes" onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
