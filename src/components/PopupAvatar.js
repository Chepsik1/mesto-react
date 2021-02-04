import PopupWithForm from "./PopupWithForm";

function PopupAvatar(props) {
  return (
    <PopupWithForm
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

    //  <div className="popup popup-avatar ">

    //  <form
    //    className="popup-avatar__conteiner "
    //    name="popup-avatar__conteiner"
    //    noValidate
    //  >
    //    <h3 className="popup-avatar__title">Обновить аватар</h3>
    //    <input
    //      className="popup-avatar__input popup__input "
    //      required
    //      name="linkavatar"
    //      id="linkavatar"
    //      type="url"
    //      value=""
    //      placeholder="Ссылка на картинку"
    //      autoComplete="off"
    //    />
    //    <span id="linkpicture-errorr" className="error"></span>
    //    <button className="popup__save" id="popup-avatar-save" type="submit">
    //      Сохранить
    //    </button>
    //  </form>
    //  <button
    //    type="button"
    //    className=" popup__close popup-avatar__close"
    //  ></button>

    // </div>
  );
}

export default PopupAvatar;
