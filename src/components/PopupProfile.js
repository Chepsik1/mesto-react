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
   
  );
}

export default PopupProfile;
