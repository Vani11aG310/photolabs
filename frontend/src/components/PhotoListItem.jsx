import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { photo } = props
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={photo.imageSource} className="photo-list__image" alt="main image" />
      <div className="photo-list__user-details">
        <img src={photo.profile} className="photo-list__user-profile" alt="profile pic" />
        <div className="photo-list__user-info">
          {photo.username}
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
    
  )
};

export default PhotoListItem;
