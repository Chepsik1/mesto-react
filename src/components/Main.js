import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__icon" onClick={props.onEditAvatar}>
          <img
            src={currentUser.avatar}
            className="profile__avatar"
            alt="Аватарка"
          />
        </div>
        <div className="profile__info">
          <div className="profile__button-name">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__addit-button"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements">
        {props.cards.map((item) => (
          
          <Card
          {...item}
            key={item._id}
            id={item._id}
            link= {item.link}
            name= {item.name}
            likes= {item.likes}
            owner= {item.owner}
            
            onCardClick={props.onCardClick}
            onCardLike={props.handleCardLike}
            onCardDelete={props.handleCardDelete}
          />
        ))}
      </section>

      <div className="popup-del popup">
        <form
          className="popup-del__conteiner"
          name="popup-del__conteiner"
          noValidate
        >
          <h3 className="popup-del__title">Вы уверены?</h3>
          <button className="popup__save" id="popup-del-save" type="submit">
            Да
          </button>
        </form>
        <button type="button" className=" popup__close popup-del__close" />
      </div>
    </main>
  );
}

export default Main;
