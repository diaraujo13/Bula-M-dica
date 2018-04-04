import bulasReducer from './bulas';
import { createStore, combineReducers, compose } from 'redux';
import util from './util';
import historico from './historico';


export default rootReducer = combineReducers({
    bulas: bulasReducer,
    util: util,
    historico: historico
});
