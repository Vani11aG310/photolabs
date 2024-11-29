import React, { useState } from 'react';

import './App.scss';
import './styles/PhotoList.scss'
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photosData = photos;
  const topicsData = topics;
  const [favourites, setFavourites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const addToFavourites = (photoID, likeStatus) => {
    if (likeStatus) {
      setFavourites([...favourites, photoID])
    } else {
      setFavourites(prevFavourites => { return prevFavourites.filter(picID => picID !== photoID)})
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className="App">
      <HomeRoute photos={photosData} topics={topicsData} addToFavourites={addToFavourites} favourites={favourites} toggleModal={toggleModal}/>
      {showModal ? <PhotoDetailsModal photo={photosData[0]}/> : ""}
    </div>
  );
};

export default App;
