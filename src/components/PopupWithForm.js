import React from "react";

function PopupWithForm(props) {
  return (
    <div
      onClick={props.closePopupWichFormClickOutContent}
      className={`popup ${props.name} ${props.isOpen} `}
    >
      <form
        className={`${props.name}__conteiner`}
        name={`${props.name}__conteiner`}
        noValidate
        onSubmit={props.onSubmit}
      >
        <h3 className={`${props.name}__title`}>{props.title}</h3>
        {props.children}

        <button className="popup__save" id="popup-avatar-save" type="submit">
          {props.btnSave}
        </button>
      </form>
      <button
        type="button"
        className={`popup__close ${props.name}__close `}
        onClick={props.onClose}
      />
    </div>
  );
}

export default PopupWithForm;
