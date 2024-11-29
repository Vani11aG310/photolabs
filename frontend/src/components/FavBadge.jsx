import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist.length > 0 ? !!isFavPhotoExist : !isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;