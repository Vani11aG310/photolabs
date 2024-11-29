import React, { useState } from 'react';

import './App.scss';
import './styles/PhotoList.scss'
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photosData = photos;
  const topicsData = topics;
  const [favourites, setFavourites] = useState([]);
  const addToFavourites = (photo, likeStatus) => {
    if (likeStatus) {
      setFavourites([...favourites, photo])
    } else {
      setFavourites(prevFavourites => { return prevFavourites.filter(pic => pic !== photo)})
    }
  }
  return (
    <div className="App">
      <HomeRoute photos={photosData} topics={topicsData} addToFavourites={addToFavourites} favourites={favourites}/>
    </div>
  );
};

export default App;
