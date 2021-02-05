import PopupWithForm from "./PopupWithForm";

function PopupPlace(props) {
  return (
    <PopupWithForm
    closePopupWichFormClickOutContent ={ props.closePopupWichFormClickOutContent}
      name="new-item-popup"
     
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      title="Новое место"
      btnSave="создать"
    >
      <input
     
        className="popup__input"
        required
        minLength="2"
        maxLength="30"
        name="placename"
        id="placename"
        type="text"
        defaultValue=""
        placeholder="Название"
        autoComplete="off"
      />
      <span id="placename-error" className="error"></span>
      <input
        className="popup__input "
        required
        name="linkpicture"
        id="linkpicture"
        type="url"
        defaultValue=""
        placeholder="Ссылка на картинку"
        autoComplete="off"
      />
      <span id="linkpicture-error" className="error"></span>
    </PopupWithForm>
  
  );
}

export default PopupPlace;
