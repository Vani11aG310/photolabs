import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  
  const { photos, topics, toggleFavourites, favourites, toggleModal, setTopic, setDarkMode, darkMode } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        setTopic={setTopic}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <PhotoList
        photos={photos}
        toggleFavourites={toggleFavourites}
        toggleModal={toggleModal}
        favourites={favourites}
      />
    </div>
  );
};

export default HomeRoute;
