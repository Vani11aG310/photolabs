const { useReducer } = require("react");

const useApplicationData = () => {

  const reducer = (state, action) => {

    if (action.type === "ADD_PHOTO_TO_FAVOURITES") {
      return {...state, favePhotos: [...state.favePhotos, action.value]}
    }

    if (action.type === "REMOVE_PHOTO_FROM_FAVOURITES") {
      return {...state, favePhotos: [...state.favePhotos].filter((id) => {
        return id !== action.value
      })}
    }

    if (action.type === "SHOW_MODAL") {
      return {...state, showModal: true, photoDetails: action.value }
    }

    if (action.type === "CLOSE_MODAL") {
      return {...state, showModal: false, photoDetails: null }
    }

    return state;

  }

  const [state, dispatch] = useReducer(reducer, {
    favePhotos: [],
    showModal: false,
    photoDetails: null
  })

  const updateToFavPhotoIds = (photoID, likeStatus) => {
    if (likeStatus) {
      dispatch({ type: "ADD_PHOTO_TO_FAVOURITES", value: photoID });
    } else {
      dispatch({ type: "REMOVE_PHOTO_FROM_FAVOURITES", value: photoID });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: "SHOW_MODAL", value: photo })
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal};
}

export default useApplicationData;