import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const  {photos, topics, addToFavourites, favourites} = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites}/>
      <PhotoList photos={photos} addToFavourites={addToFavourites}/>
    </div>
  );
};

export default HomeRoute;
