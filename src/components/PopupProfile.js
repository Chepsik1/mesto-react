import PopupWithForm from "./PopupWithForm";

function PopupProfile(props) {
  return (
    <PopupWithForm
      name="popup"
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      title="Редактировать профиль"
      btnSave="сохранить"
    >
      <input
        className="popup__input"
        required
        minLength="2"
        maxLength="40"
        name="username"
        id="username"
        type="text"
        defaultValue=""
        autoComplete="off"
      />
      <input
        className="popup__input"
        required
        minLength="2"
        maxLength="200"
        name="occupation"
        id="occupation"
        type="text"
        defaultValue=""
      />
    </PopupWithForm>
    //     <div className="popup">

    //     <form className="popup__container" name="popup-container" noValidate>
    //       <h3  className="popup__title">Редактировать профиль</h3>
    //       <input
    //         className="popup__input"
    //         required
    //         minLength="2"
    //         maxLength="40"
    //         name="username"
    //         id="username"
    //         type="text"
    //         value="Жак-Ив Кусто"
    //         autoComplete="off"
    //       />
    //       <span id="username-error" className="error"></span>
    //       <input
    //         className="popup__input"
    //         required
    //         minLength="2"
    //         maxLength="200"
    //         name="occupation"
    //         id="occupation"
    //         type="text"
    //         value="Исследователь океана"
    //       />
    //       <span id="occupation-error" className="error"></span>
    //       <button type="submit" className="popup__save">
    //         Сохранить
    //       </button>
    //     </form>
    //     <button type="button" className="popup__close"></button>
    //   </div>
  );
}

export default PopupProfile;
