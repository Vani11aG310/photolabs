import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  
  const { photos, toggleFavourites, favourites, toggleModal } = props;

  const photoListArray = photos.map(photo => {
    return <PhotoListItem key={photo.id} photo={photo} toggleFavourites={toggleFavourites} favourites={favourites} toggleModal={toggleModal} />;
  });
  return (
    <ul className="photo-list">
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
