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
function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);

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


  
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />
      <ImagePopup isOpen={selectedCard} onClose={closeAllPopups} />
      <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
