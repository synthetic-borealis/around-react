function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar"></div>
          <button className="profile__avatar-button" onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button className="profile__edit-button" type="button" aria-label="Edit" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__job">Explorer</p>
        </div>
        <button className="add-button" type="button" aria-label="Add" onClick={props.onAddPlaceClick}></button>
      </section>

      <section className="places">
      </section>
    </main>
  );
}

export default Main;
