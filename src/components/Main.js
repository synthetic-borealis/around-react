// Constants
import {
  changeAvatarContainerSelector,
  editContainerSelector,
  addContainerSelector,
  imagePopupContainerSelector,
  popupClassList
} from '../utils/constants';

function Main() {
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
  );
}

export default Main;
