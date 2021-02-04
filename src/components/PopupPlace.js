import PopupWithForm from "./PopupWithForm";

function PopupPlace(props) {
  return (
    <PopupWithForm
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
    /* <div className="popup new-item-popup">
        <form
          className="new-item-popup__container"
          name="new-item-popup-container"
          noValidate
        >
          <h3 className="new-item-popup__title">Новое место</h3>
          <input
            className="popup__input"
            required
            minLength="2"
            maxLength="30"
            name="placename"
            id="placename"
            type="text"
            value=""
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
            value=""
            placeholder="Ссылка на картинку"
            autoComplete="off"
          />
          <span id="linkpicture-error" className="error"></span>
          <button
            className="popup__save"
            id="new-item-popup-save"
            type="submit"
          >
            Создать
          </button>
        </form>
        <button type="button" className=" popup__close"></button>
      </div> */
  );
}

export default PopupPlace;
