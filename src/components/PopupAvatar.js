import PopupWithForm from "./PopupWithForm";

function PopupAvatar(props) {
  return (
    <PopupWithForm
    closePopupWichFormClickOutContent ={ props.closePopupWichFormClickOutContent}
      name="popup-avatar"
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      title="Аватар"
      btnSave="сохранить"
      defaultValue=""
    >
      <input
        className="popup-avatar__input popup__input "
        required
        name="linkavatar"
        id="linkavatar"
        type="url"
        defaultValue=""
        placeholder="Ссылка на картинку"
        autoComplete="off"
      />
    </PopupWithForm>

  );
}

export default PopupAvatar;
