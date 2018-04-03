import { LIST_ALL_BULAS, SET_BULAS, SET_CAT, ADD_PAGE, RESET_PAGE, SELECT_BULA, DETAILS_BULA } from "./types";
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({
    name : "bulas.db",
    createFromLocation : 1} 
);

db.executeSql("CREATE TABLE IF NOT EXISTS historico ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `bulaId` INTEGER, FOREIGN KEY(`bulaId`) REFERENCES `bula`(`id`) )");

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
            tx.executeSql('SELECT id, title FROM bula WHERE title LIKE %' + searchKey +'% LIMIT 5', [], (tx, results) => {
        
                let rows = results.rows.raw(); 
              
                dispatch(setBulas(rows));
            });
        });
            
    };
};


export const addHistory = () => {
    return (dispatch, getState) => {
        let selected = getState().bulas.selected || '';

        db.transaction((tx) => {
            tx.executeSql('INSERT INTO historico (bulaId) VALUES (' + selected +')', [], (tx, results) => {
                console.log("Adicionado ao histórico")
            });
        });
            
    };
};


export const bulaDetails = () => {
    return (dispatch, getState) => {
        let selected = getState().bulas.selected || '';

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM bula WHERE id = ' + selected, [], (tx, results) => {
                let rows = results.rows.raw(); 

                dispatch(selectBulaDetails(rows[0]))
            });
        });
            
    };
};


export const selectBulaDetails = (bula) => {
    return {
        type: DETAILS_BULA,
        payload: bula
    }
}
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
 
 export const selectBula = (id) => {
     return {
         type: SELECT_BULA,
         payload: id
     }
 }
