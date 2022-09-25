import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({
  card,
  name,
  link,
  likesCount,
  onCardClick,
  onCardLike,
  onCardDelete,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `place__delete-button ${
    isOwn ? "place__delete-button" : "place__delete-button_hidden"
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `place__like-button ${
    isLiked ? "place__like-button_active" : "place__like-button"
  }`;

  return (
    <article className="place">
      <img
        className="place__photo"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <div className="place__info">
        <h2 className="place__name">{name}</h2>
        <div className="place__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={() => onCardLike(card)}
          ></button>
          <p className="place__likes-count">{likesCount}</p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={() => onCardDelete(card)}
      ></button>
    </article>
  );
};

export default Card;
