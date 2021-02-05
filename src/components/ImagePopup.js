import "./Card";

function ImagePopup(props) {
  return (
    <div onClick={props.closeImagePopupClickOutContent} className={`popup popup-image ${props.isOpen && "popup_opened"} `}>
      <div className="popup-image__block">
        <button
          type="button"
          className=" popup__close popup-image__close"
          onClick={props.onClose}
          
        />
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
