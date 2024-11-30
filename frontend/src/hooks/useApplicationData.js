const { useState } = require("react");

const useApplicationData = () => {

  const [state, setState] = useState({
    favePhotos: [],
    showModal: false,
    photoDetails: null
  });

  const updateToFavPhotoIds = (photoID, likeStatus) => {
    if (likeStatus) {
      setState({...state, favePhotos: [...state.favePhotos, photoID]});
    } else {
      setState({
        ...state, favePhotos: [...state.favePhotos].filter((id) => {
          return id !== photoID
      })});
    }
  };

  const setPhotoSelected = (photo) => {
    setState({...state, showModal: true, photoDetails: photo});
  };

  const onClosePhotoDetailsModal = () => {
    setState({...state, showModal: false, photoDetails: null})
  }

  return {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal};
}

export default useApplicationData;