// Components
import Header from "./Header";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

// Constants
import {
  changeAvatarContainerSelector,
  editContainerSelector,
  addContainerSelector,
  imagePopupContainerSelector,
  popupClassList
} from '../utils/constants';

function App() {
  function openPopup(popupSelector) {
    const popup = document.querySelector(popupSelector);
    popup.classList.add(popupClassList.openedPopup);
  }

  function handleEditAvatarClick() {
    openPopup(changeAvatarContainerSelector);
  }

  function handleEditProfileClick() {
    openPopup(editContainerSelector);
  }

  function handleAddPlaceClick() {
    openPopup(addContainerSelector);
  }

  return (
    <div className="page-container">
      <Header />
      <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <div className="profile__avatar"></div>
            <button className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__info">
            <div className="profile__header">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <button className="profile__edit-button" type="button" aria-label="Edit" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__job">Explorer</p>
          </div>
          <button className="add-button" type="button" aria-label="Add" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="places">
        </section>
      </main>

      <Footer />

      <PopupWithForm name="edit">
        <form id="edit-form" className="form form_type_edit" action="#" name="editForm" autoComplete="off" noValidate>
          <fieldset className="form__fieldset">
            <h2 className="form__title">Edit profile</h2>
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
          </fieldset>
          <button type="submit" className="form__submit-btn" id="btn-profile-save">Save</button>
        </form>
      </PopupWithForm>

      <PopupWithForm name="add">
        <form id="add-form" className="form form_type_add" action="#" autoComplete="off" name="addForm" noValidate>
          <fieldset className="form__fieldset">
            <h2 className="form__title">New place</h2>
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
          </fieldset>
          <button type="submit" className="form__submit-btn" id="btn-add-submit">Create</button>
        </form>
      </PopupWithForm>

      <PopupWithForm name="change-avatar">
        <form id="avatar-form" className="form form_type_change-avatar" action="#" autoComplete="off" name="changeAvatarForm" noValidate>
          <fieldset className="form__fieldset">
            <h2 className="form__title">Change profile picture</h2>
            <label className="form__field">
              <input id="profile-avatar-input" type="url" placeholder="Image Link" name="avatar" required
                className="form__input form__input_type_avatar-link" />
              <span className="form__error profile-avatar-input-error">Here be error message.</span>
            </label>
          </fieldset>
          <button type="submit" className="form__submit-btn form__submit-btn_type_avatar" id="btn-save-avatar">Save</button>
        </form>
      </PopupWithForm>

      <PopupWithForm name="confirm">
        <div className="form">
          <h2 className="form__title form__title_gap-size_small">Are you sure?</h2>
          <button className="form__submit-btn">Yes</button>
        </div>
      </PopupWithForm>

      <ImagePopup />
    </div>
  );
}

export default App;
