import { LIST_ALL_BULAS, SET_BULAS, SET_CAT, ADD_PAGE, RESET_PAGE } from "./types";
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({
    name : "bulas.db",
    createFromLocation : 1}, 
    (data)=>{
        console.info("Conectado com sucesso");
        console.info(data);
    }, (err)=>{
        console.log(err)
    }
);

export const getBulas = () => {
    return (dispatch, getState) => {

        
        let category = getState().bulas.category.toUpperCase() || 'A';
        let page = getState().bulas.page || 1;

        console.log(page);
        
        db.transaction((tx) => {
            tx.executeSql('SELECT id, title FROM bula WHERE categ=(?) LIMIT ' + (10 * page), [category], (tx, results) => {
        
                let rows = results.rows.raw(); 
                dispatch(nextPage());
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
 
