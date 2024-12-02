const { useReducer, useEffect } = require("react");

const useApplicationData = () => {

  const ACTIONS = {
    ADD_PHOTO_TO_FAVOURITES: "ADD_PHOTO_TO_FAVOURITES",
    REMOVE_PHOTO_FROM_FAVOURITES: "REMOVE_PHOTO_FROM_FAVOURITES",
    SHOW_MODAL: "SHOW_MODAL",
    CLOSE_MODAL: "CLOSE_MODAL",
    SET_PHOTO_DATA: "SET_PHOTO_DATA",
    SET_TOPIC_DATA: "SET_TOPIC_DATA",
    SET_TOPIC: "SET_TOPIC",
    GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC"
  };

  const reducer = (state, action) => {

    if (action.type === ACTIONS.ADD_PHOTO_TO_FAVOURITES) {
      return { ...state, favePhotos: [...state.favePhotos, action.value] };
    }

    if (action.type === ACTIONS.REMOVE_PHOTO_FROM_FAVOURITES) {
      return {
        ...state, favePhotos: [...state.favePhotos].filter((id) => {
          return id !== action.value;
        })
      };
    }

    if (action.type === ACTIONS.SHOW_MODAL) {
      return { ...state, showModal: true, photoDetails: action.value };
    }

    if (action.type === ACTIONS.CLOSE_MODAL) {
      return { ...state, showModal: false, photoDetails: null };
    }

    if (action.type === ACTIONS.SET_PHOTO_DATA) {
      return { ...state, photoData: action.payload };
    }

    if (action.type === ACTIONS.SET_TOPIC_DATA) {
      return { ...state, topicData: action.payload };
    }

    if (action.type === ACTIONS.SET_TOPIC) {
      return { ...state, topicID: action.value };
    }

    if (action.type === ACTIONS.GET_PHOTOS_BY_TOPIC) {
      return { ...state, photoData: action.payload };
    }

    return state;

  };

  const [state, dispatch] = useReducer(reducer, {
    favePhotos: [],
    showModal: false,
    photoDetails: null,
    photoData: [],
    topicData: [],
    topicID: null
  });

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  useEffect(() => {
    if (state.topicID) {
      fetch(`/api/topics/photos/${state.topicID}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data }));
    }
  }, [state.topicID]);

  const updateToFavPhotoIds = (photoID, likeStatus) => {
    if (likeStatus) {
      dispatch({ type: ACTIONS.ADD_PHOTO_TO_FAVOURITES, value: photoID });
    } else {
      dispatch({ type: ACTIONS.REMOVE_PHOTO_FROM_FAVOURITES, value: photoID });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SHOW_MODAL, value: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const setTopic = (topicID) => {
    dispatch({ type: ACTIONS.SET_TOPIC, value: topicID });
  };

  return { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, setTopic };
};

export default useApplicationData;