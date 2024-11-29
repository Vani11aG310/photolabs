import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoID, addToFavourites } = props;
  const [like, setLike] = useState(false);
  const clickHandler = () => {
    setLike(prevLike => {
      return !prevLike;
    });
    addToFavourites(photoID, !like);
  };
  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;