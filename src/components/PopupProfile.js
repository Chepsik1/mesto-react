import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";



function PopupProfile(props) {

  const [name, setName] = React.useState(''); //стетй с именем
  const [description, setDescription] = React.useState(''); //стейт с деятельностью
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
 

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]); 

function handleSubmit(e) {
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();

  // Передаём значения управляемых компонентов во внешний обработчик
  props.onUpdateUser({
    name: name,
    about: description,
  });
}


  return (
    <PopupWithForm
      name="popup"
      closePopupWichFormClickOutContent ={ props.closePopupWichFormClickOutContent}
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      title="Редактировать профиль"
      btnSave="сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        required
        minLength="2"
        maxLength="40"
        name="username"
        id="username"
        type="text"
        onChange={handleChangeName}
        autoComplete="off"
        defaultValue={name}
      />
      <input
        className="popup__input"
        required
        minLength="2"
        maxLength="200"
        name="occupation"
        id="occupation"
        type="text"
        onChange={handleChangeDescription}
        defaultValue={description}
      />
    </PopupWithForm>
   
  );
}

export default PopupProfile;
