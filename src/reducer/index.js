import placesReducer from './places';
import bulasReducer from './bulas';
import { createStore, combineReducers, compose } from 'redux';


export default rootReducer = combineReducers({
    places: placesReducer,
    bulas: bulasReducer,
    
});
