import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photoDetails, addToFavourites, toggleModal, favourites } = props;
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <header className='photo-details-modal__header'>
        <div className='photo-details-modal__images'>
          <PhotoFavButton photoID={photoDetails.id} addToFavourites={addToFavourites} favourites={favourites}/>
          <img src={photoDetails.urls.full} className='photo-details-modal__image'/>
          <h3>Similar Photos</h3>
          <PhotoList photos={Object.values(photoDetails.similar_photos)} addToFavourites={addToFavourites} toggleModal={toggleModal} favourites={favourites}/>
        </div>
      </header>
    </div>
  )
};

export default PhotoDetailsModal;
