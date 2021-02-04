import "./Card";

function ImagePopup(props) {
  return (
    <div className={`popup popup-image ${props.isOpen && "popup_opened"} `}>
      <div className="popup-image__block">
        <button
          type="button"
          className=" popup__close popup-image__close"
          onClick={props.onClose}
        ></button>
        <img
          className="popup-image__foto"
          src={props.isOpen.src}
          alt={props.isOpen.title}
          
        />
 
        <p className="popup-image__title">{props.isOpen.title}</p>
      </div>
    </div>
  );
}
export default ImagePopup;
