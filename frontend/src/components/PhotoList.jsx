import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, addToFavourites } = props;
  const photoListArray = photos.map(photo => {
    return <PhotoListItem key= {photo.id} photo={photo} addToFavourites={addToFavourites}/>
  })
  return (
    <ul className="photo-list">
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
