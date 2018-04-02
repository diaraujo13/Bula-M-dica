import { LIST_ALL_BULAS, SET_BULAS, SET_CAT, ADD_PAGE, RESET_PAGE } from "./types";
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({
    name : "bulas.db",
    createFromLocation : 1} 
);

export const getBulas = () => {
    return (dispatch, getState) => {

        
        let category = getState().bulas.category.toUpperCase() || 'A';
        let page = getState().bulas.page || 1;

        db.transaction((tx) => {
            tx.executeSql('SELECT id, title FROM bula WHERE categ=(?)', [category], (tx, results) => {
        
                let rows = results.rows.raw(); 
               
                
                dispatch(setBulas(rows));
            });
        });
            
    };
};


export const searchBulas = () => {
    return (dispatch, getState) => {

        
        let searchKey = getState().bulas.searchKey || '';

        db.transaction((tx) => {
            tx.executeSql('SELECT id, title FROM bula WHERE title LIKE %' + searchKey +'%', [], (tx, results) => {
        
                let rows = results.rows.raw(); 
              
                
                dispatch(setBulas(rows));
            });
        });
            
    };
};




export const setBulas = (rows) => {

   return {
        type: SET_BULAS,
        bulas: rows
    }
};

export const setCat = (category) => {

   return {
        type: SET_CAT,
        category
    }
};

export const resetPage = () => {

    return {
         type: RESET_PAGE
     }
 };
 

export const nextPage = () => {

    return {
         type: ADD_PAGE
     }
 };
 
