import PopupWithForm from "./PopupWithForm";
import React from "react";
function PopupPlace(props) {
  const inputName = React.useRef();
  const inputLink = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: inputName.current.value,
      link: inputLink.current.value,
    });
  }

  return (
    <PopupWithForm
      closePopupWichFormClickOutContent={
        props.closePopupWichFormClickOutContent
      }
      name="new-item-popup"
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      title="Новое место"
      btnSave="создать"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        required
        minLength="2"
        maxLength="30"
        name="name"
        id="placename"
        type="text"
        defaultValue=""
        placeholder="Название"
        autoComplete="off"
        ref={inputName}
      />
      {/* <span id="placename-error" className="error"></span> */}
      <input
        className="popup__input "
        required
        name="link"
        id="linkpicture"
        type="url"
        defaultValue=""
        placeholder="Ссылка на картинку"
        autoComplete="off"
        ref={inputLink}
      />
      {/* <span id="linkpicture-error" className="error"></span> */}
    </PopupWithForm>
  );
}

export default PopupPlace;
