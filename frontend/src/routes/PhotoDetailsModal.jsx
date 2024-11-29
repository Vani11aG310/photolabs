import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { photoDetails, addToFavourites, toggleModal } = props;
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <header className='photo-details-modal__header'>
        <div className='photo-details-modal__images'>
          <img src={photoDetails.urls.full} className='photo-details-modal__image'/>
          <h3>Similar Photos</h3>
          <PhotoList photos={Object.values(photoDetails.similar_photos)} addToFavourites={addToFavourites} toggleModal={toggleModal} />
        </div>
      </header>
    </div>
  )
};

export default PhotoDetailsModal;
