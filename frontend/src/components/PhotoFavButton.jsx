import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoID, toggleFavourites, favourites } = props;
  const [like, setLike] = useState(false);
  const isFavourited = favourites.includes(photoID)
  const clickHandler = () => {
    setLike(!like)
    toggleFavourites(photoID, !like);
  };
  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={isFavourited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;