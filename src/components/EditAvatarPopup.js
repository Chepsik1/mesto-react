import PopupWithForm from "./PopupWithForm";
import React from "react";
function PopupAvatar(props) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }
  return (
    <PopupWithForm
      closePopupWichFormClickOutContent={
        props.closePopupWichFormClickOutContent
      }
      name="popup-avatar"
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      title="Аватар"
      btnSave="сохранить"
      defaultValue=""
      onSubmit={handleSubmit}
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
        ref={inputRef}
      />
    </PopupWithForm>
  );
}

export default PopupAvatar;
