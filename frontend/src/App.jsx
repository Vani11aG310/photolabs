import React, { useState } from 'react';

import './App.scss';
import './styles/PhotoList.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, setTopic, setDarkMode } = useApplicationData();

  return (
    <div className={`App ${state.darkMode}`}>
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        darkMode={state.darkMode}
        toggleFavourites={updateToFavPhotoIds}
        favourites={state.favePhotos}
        toggleModal={setPhotoSelected}
        setTopic={setTopic}
        setDarkMode={setDarkMode}
      />
      {
        state.showModal
        &&
        <PhotoDetailsModal
          state={state}
          toggleFavourites={updateToFavPhotoIds}
          favourites={state.favePhotos}
          toggleModal={setPhotoSelected}
          closeModal={onClosePhotoDetailsModal}
        />
      }
    </div>
  );
};

export default App;
