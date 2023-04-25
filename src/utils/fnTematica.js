import { db } from "../config/firebase/firebaseDB";
import { collection, getDocs, query } from "firebase/firestore"


//CONSULTA
export const getTematicas = async() =>{
    const result = await getDocs(query(collection(db, 'tematicas')));
    return result;
}


