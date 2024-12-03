import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import DarkModeButton from './DarkModeButton';

const TopNavigation = (props) => {

  const { topics, favourites, setTopic, setDarkMode, darkMode } = props;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setTopic={setTopic} />
      <FavBadge isFavPhotoExist={favourites} />
      <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode}/>
    </div>
  );
};

export default TopNavigation;