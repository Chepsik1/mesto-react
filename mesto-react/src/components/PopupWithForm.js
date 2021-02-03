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

// <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
//   <div className="popup__content">
//     <img
//       src={closeBtn}
//       alt="Копка закрыть"
//       className="popup__close"
//       onClick={props.onClose}
//     />
//     <h3 className="popup__title">{props.title}</h3>
//     <form
//       className="popup__container"
//       name={props.name}
//       onSubmit={props.onSubmit}
//       noValidate
//     >
//       {props.children}
//     </form>
//   </div>
// </div>
