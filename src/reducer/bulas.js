import { LIST_ALL_BULAS, SET_BULAS, SET_CAT } from "../actions/types";

 
const initialState = {
    bulas: [],
    page: 1,
    category: 'A',
};

const bulasReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_BULAS:

        return {
          ...state,
          bulas: action.bulas
        };
      break;

      case SET_CAT:
        return {
          ...state,
          category: action.category
        }
      break;
      default:
        return state;
    }
  };
  

  export default bulasReducer;