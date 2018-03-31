import { LIST_ALL_BULAS, SET_BULAS, SET_CAT } from "./types";
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

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM bula WHERE categ=(?) LIMIT 10 ', [category], (tx, results) => {
        
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


