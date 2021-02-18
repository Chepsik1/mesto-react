import React from "react";
import "../index.css";
import "../components/Header";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupProfile from "../components/PopupProfile";
import PopupAvatar from "./PopupAvatar";
import PopupPlace from "./PopupPlace";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  function handleUpdateUser(data) {
    api
      .updateInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Возникла ошибка: ${err}`);
      });
  }

  function handleUpdateAvatar(data) {
    api
      .updateAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Возникла ошибка: ${err}`);
      });
  }

  React.useEffect((cards) => {
    api
      .getCards(cards)
      .then((response) => {
        const cards = response.map((item) => {
          return {
            key: item._id,
            id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes,
            owner: item.owner,
          };
        });

        setCards(cards);
      })
      .catch((error) => {
        console.log(`Возникла ошибка: ${error}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api.countLikeApi(card).then((newCard) => {
        const newCards = cards.map((item) =>
          item.id === card.id ? newCard : item
        );
        setCards(newCards);
      });
    } else {
      api.deleteLike(card).then((newCard) => {
        const newCards = cards.map((item) =>
          item.id === card.id ? newCard : item
        );
        setCards(newCards);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card.id).then(() => {
      const cardDel = cards.filter((item) => item.id !== card.id);
      setCards(cardDel);
    });
  }

  React.useEffect(() => {
    api
      .getInfoAndAvatar()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(`Возникла ошибка: ${error}`);
      });
  }, []);

  function handleAddPlace(data) {
    api
      .addNewCard(data)
      .then((newCard) => {
        setCards([...cards, newCard]);
        closeAllPopups();
        console.log(newCard);
      })
      .catch((err) => {
        console.log(`Возникла ошибка: ${err}`);
      });
  }

  function handleCardClick(props) {
    setSelectedCard(props);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setSelectedCard(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  //закрытие оверлей imagePopup
  function closeImagePopupClickOutContent(e) {
    if (e.target.closest(".popup-image__block") == null) {
      closeAllPopups();
    }
  }
  //закрытие по оверлей popupWithForm

  function closePopupWichFormClickOutContent(e) {
    if (e.target.closest("form") == null) {
      closeAllPopups();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />

        <Footer />
        <ImagePopup
          isOpen={selectedCard}
          onClose={closeAllPopups}
          closeImagePopupClickOutContent={closeImagePopupClickOutContent}
        />
        <PopupAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          closePopupWichFormClickOutContent={closePopupWichFormClickOutContent}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          closePopupWichFormClickOutContent={closePopupWichFormClickOutContent}
          onUpdateUser={handleUpdateUser}
        />
        <PopupPlace
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          closePopupWichFormClickOutContent={closePopupWichFormClickOutContent}
          onAddPlace={handleAddPlace}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
