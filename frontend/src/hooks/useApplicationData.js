const { useReducer, useEffect } = require("react");

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

    if (action.type === "SET_PHOTO_DATA") {
      return {...state, photoData: action.payload}
    }

    if (action.type === "SET_TOPIC_DATA") {
      return {...state, topicData: action.payload}
    }

    if (action.type === "SET_TOPIC") {
      return {...state, topicID: action.value}
    }

    if (action.type === "GET_PHOTOS_BY_TOPICS") {
      return {...state, photoData: action.payload}
    }

    return state;

  }

  const [state, dispatch] = useReducer(reducer, {
    favePhotos: [],
    showModal: false,
    photoDetails: null,
    photoData: [],
    topicData: [],
    topicID: null
  })

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", payload: data}))
  }, [])

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_TOPIC_DATA", payload: data}))
  }, [])

  useEffect(() => {
    if (state.topicID) {
      fetch(`/api/topics/photos/${state.topicID}`)
        .then(res => res.json())
        .then(data => dispatch({ type: "GET_PHOTOS_BY_TOPICS", payload: data}))
    }
  }, [state.topicID])

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

  const setTopic = (topicID) => {
    dispatch({ type: "SET_TOPIC", value: topicID})
  }

  return {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, setTopic};
}

export default useApplicationData;