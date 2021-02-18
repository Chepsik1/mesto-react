import "./ImagePopup";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `elements__element-trash ${
    isOwn ? "elements__element-trash_visible" : "elements__element-trash_hidden"
  }`;

  const isLiked = props.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `elements__element-like ${
    isLiked ? "elements__element-like_active" : "elements__element-like"
  }`;

  function handleLikeClick() {
    props.onCardLike(props);
  }

  function handleCardClick() {
    props.onCardClick(props);
  }

  function handleDeleteClick() {
    props.onCardDelete(props);
  }

  return (
    <div className="elements__element">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      />
      <img
        className="elements__element-image"
        src={props.link}
        alt={props.name}
        onClick={handleCardClick}
      />
      <div className="elements__element-rectangle">
        <p className="elements__element-title">{props.name}</p>
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        >
          <p className="elements__like-number">{props.likes.length}</p>
        </button>
      </div>
    </div>
  );
}
export default Card;
