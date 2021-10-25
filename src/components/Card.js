import React from 'react';

function Card(props) {
  const cardImage = `url(${props.card.link})`;
  const [likes, setLikes] = React.useState(0);

  return (
    <article className="card">
      <button className="card__image" aria-label={props.card.name} style={{backgroundImage: cardImage}}></button>
      <div className="card__container">
        <h2 className="card__caption">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="card__like-button" type="button" aria-label="Like"></button>
          <p className="card__like-counter">0</p>
        </div>
      </div>
      <button className="card__delete-button" type="button" aria-label="Delete"></button>
    </article>
  );
}

export default Card;
