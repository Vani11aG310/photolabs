import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { sampleData } = props
  return (
    <>
      <img src={sampleData.imageSource} alt="main image" />
      <img src={sampleData.profile} alt="profile pic" />
      <p>{sampleData.username}</p>
      <p>{sampleData.location.city}, {sampleData.location.country}</p>
    </>
    
  )
};

export default PhotoListItem;
