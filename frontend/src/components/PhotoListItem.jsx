import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { photo } = props
  return (
    <div className="photo-list__item">
      <img src={photo.imageSource} className="photo-list__image" alt="main image" />
      <div className="photo-list__user-details">
        <img src={photo.profile} className="photo-list__user-profile" alt="profile pic" />
        <span className="photo-list__user-info">
          {photo.username}
          <br />
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </span>
      </div>
    </div>
    
  )
};

export default PhotoListItem;
