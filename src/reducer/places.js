const ADD_PLACE = 'ADD_PLACE';
const DELETE_PLACE = 'DELETE_PLACE';
const SELECT_PLACE = 'SELECT_PLACE';
const DESELECT_PLACE = 'DESELECT_PLACE';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    };
};

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    };
};

  
const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PLACE:
        return {
          ...state,
          places: state.places.concat({
            key: Math.random(),
            name: action.placeName,
            image: {
              uri:
                "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
            }
          })
        };
      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
          }),
          selectedPlace: null
        };
      case SELECT_PLACE:
        return {
          ...state,
          selectedPlace: state.places.find(place => {
            return place.key === action.placeKey;
          })
        };
      case DESELECT_PLACE:
        return {
          ...state,
          selectedPlace: null
        };
      default:
        return state;
    }
  };
  
  export default reducer;