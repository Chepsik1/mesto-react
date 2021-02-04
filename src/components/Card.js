import "./ImagePopup";
function Card(props) {
  function handleCardClick() {
    props.onCardClick(props);
  }

  return (
    <div className="elements__element">
      <button type="button" className="elements__element-trash"></button>
      <img
        className="elements__element-image"
        src={props.src}
        alt={props.name}
        onClick={handleCardClick}
      />
      <div className="elements__element-rectangle">
        <p className="elements__element-title">{props.title}</p>
        <button type="button" className="elements__element-like">
          <p className="elements__like-number">{props.likes}</p>
        </button>
      </div>
    </div>
  );
}
export default Card;
