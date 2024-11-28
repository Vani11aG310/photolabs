import React from 'react';

import './App.scss';
import './styles/PhotoList.scss'
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photosData = photos;
  const topicsData = topics;
  return (
    <div className="App">
      <HomeRoute photos={photosData} topics={topicsData}/>
    </div>
  );
};

export default App;
