import React from "react";
// import closeBtn from "../images/close.svg";

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name} ${props.isOpen}`}>
      <form
        className={`${props.name}__conteiner`}
        name={`${props.name}__conteiner`}
        noValidate
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
      ></button>
    </div>
  );
}

export default PopupWithForm;

