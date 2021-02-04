import React, { useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = useState("Виталий");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api
      .getInfoAndAvatar()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.log(`Возникла ошибка: ${error}`);
      });
  }, []);

  React.useEffect((cards) => {
    if (cards !== []) {
      api
        .getCards(cards)

        .then((response) => {
          
          const cards = response.map((item) => {
            
            return {
              
              key:item._id,
              id: item._id,
              src: item.link,
              title: item.name,
              likes: item.likes.length,
            };
            
          });

          setCards(cards);
          
        })

        .catch((error) => {
          console.log(`Возникла ошибка: ${error}`);
        });
    }
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__icon" onClick={props.onEditAvatar}>
          <img src={userAvatar} className="profile__avatar" alt="Аватарка" />
        </div>
        <div className="profile__info">
          <div className="profile__button-name">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__addit-button"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__occupation">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements">
        {cards.map((item) => (
          <Card  {...item} onCardClick={props.onCardClick} />
          
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
        <button
          type="button"
          className=" popup__close popup-del__close"
        />
      </div>
    </main>
  );
}

export default Main;
