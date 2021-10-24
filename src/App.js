import logoImage from './images/logo.svg';

function App() {
  return (
    <div className="page-container">
      <header className="header">
        <div className="header__container">
          <img className="logo" src={logoImage} alt="Around the U.S." />
        </div>
      </header>
      <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <div className="profile__avatar"></div>
            <button className="profile__avatar-button" id="btn-change-avatar"></button>
          </div>
          <div className="profile__info">
            <div className="profile__header">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <button className="profile__edit-button" type="button" aria-label="Edit"></button>
            </div>
            <p className="profile__job">Explorer</p>
          </div>
          <button className="add-button" type="button" aria-label="Add"></button>
        </section>

        <section className="places">
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">© 2021 Around The U.S.</p>
      </footer>

      <section className="popup-section popup-section_type_edit">
        <div className="form-popup form-popup_type_edit">
          <form id="edit-form" className="form form_type_edit" action="#" name="editForm" autocomplete="off" novalidate>
            <fieldset className="form__fieldset">
              <h2 className="form__title">Edit profile</h2>
              <label className="form__field">
                <input id="profile-name-input" type="text" placeholder="Name" name="name" required className="form__input"
                  minlength="2" maxlength="40" />
                <span className="form__error profile-name-input-error">Here be error message.</span>
              </label>
              <label className="form__field">
                <input id="profile-job-input" type="text" placeholder="Job" name="job" required className="form__input"
                  minlength="2" maxlength="400" />
                <span className="form__error profile-job-input-error">Here be error message.</span>
              </label>
            </fieldset>
            <button type="submit" className="form__submit-btn" id="btn-profile-save">Save</button>
          </form>
          <button className="close-button" type="button" aria-label="Close"></button>
        </div>
      </section>

      <section className="popup-section popup-section_type_add">
        <div className="form-popup form-popup_type_add">
          <form id="add-form" className="form form_type_add" action="#" autocomplete="off" name="addForm" novalidate>
            <fieldset className="form__fieldset">
              <h2 className="form__title">New place</h2>
              <label className="form__field">
                <input id="place-title-input" type="text" placeholder="Title" name="title" required
                  className="form__input form__input_type_place-title" minlength="1" maxlength="30" />
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
          <button className="close-button" type="button" aria-label="Close"></button>
        </div>
      </section>

      <section className="popup-section popup-section_type_change-avatar">
        <div className="form-popup form-popup_type_avatar">
          <form id="avatar-form" className="form form_type_avatar" action="#" autocomplete="off" name="changeAvatarForm" novalidate>
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
          <button className="close-button" type="button" aria-label="Close"></button>
        </div>
      </section>

      <section className="popup-section popup-section_type_confirm">
        <div className="form-popup">
          <div className="form">
            <h2 className="form__title form__title_gap-size_small">Are you sure?</h2>
            <button className="form__submit-btn">Yes</button>
          </div>
          <button className="close-button" type="button" aria-label="Close"></button>
        </div>
      </section>

      <section className="popup-section popup-section_type_image">
        <div className="image-popup">
          <img className="image-popup__image" src="#" alt="PLACEHOLDER" />
          <p className="image-popup__caption"></p>
          <button className="close-button close-button_type_image-popup" type="button"></button>
        </div>
      </section>
    </div>
  );
}

export default App;
