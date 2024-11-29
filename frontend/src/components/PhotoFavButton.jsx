import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( props) {
  const { photo, addToFavourites } = props;
  let [like, setLike] = useState(false)
  const clickHandler = () => {
    if (!like) {
      like = true
    } else {
      like = false
    }
    setLike(like)
    addToFavourites(photo, like)
  }
  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
        <div className="photo-list__fav-icon-svg">
          <FavIcon selected={like}/>
        </div>
    </div>
  );
}

export default PhotoFavButton;