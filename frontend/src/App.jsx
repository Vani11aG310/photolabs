import React, { useState } from 'react';

import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photosData = photos;
  const topicsData = topics;

  const {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photosData} topics={topicsData} toggleFavourites={updateToFavPhotoIds} favourites={state.favePhotos} toggleModal={setPhotoSelected} />
      {state.showModal && <PhotoDetailsModal state={state} toggleFavourites={updateToFavPhotoIds} favourites={state.favePhotos} toggleModal={setPhotoSelected} closeModal={onClosePhotoDetailsModal}/>}
    </div>
  );
};

export default App;
