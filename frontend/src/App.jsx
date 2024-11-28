import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import './styles/PhotoList.scss'
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [1, 2, 3].map((key) => {
  //   return (
  //     <PhotoListItem key={key} photo={sampleDataForPhotoListItem}/>
  //   )
  // })
  return (
    <div className="App">
      <div className='photo-list'>
        <PhotoList />
      </div>
    </div>
  );
};

export default App;
