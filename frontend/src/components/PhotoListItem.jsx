import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { photo, toggleFavourites, toggleModal, favourites } = props;

  const handleClick = () => {
    toggleModal(photo);
  };
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoID={photo.id} toggleFavourites={toggleFavourites} favourites={favourites} />
      <img src={photo.urls.regular} className="photo-list__image" alt="main image" onClick={handleClick} />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} className="photo-list__user-profile" alt="profile pic" />
        <div className="photo-list__user-info">
          {photo.user.username}
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>

  );
};

export default PhotoListItem;
