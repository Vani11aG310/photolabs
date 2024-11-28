import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import './styles/PhotoList.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  const photos = [1, 2, 3].map((key) => {
    return (
      <PhotoListItem key={key} photo={sampleDataForPhotoListItem}/>
    )
  })
  return (
    <div className="App">
      <div className='photo-list'>
        {photos}
      </div>
    </div>
  );
};

export default App;
