import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase/firebaseDB";

const actualizarVisita = async (fieldName, valorActual) => {
  const fecha = new Date();
  const fechaFormateada = formatDate(fecha)
  const ref = doc(db, `visitas/${fechaFormateada}`); //colección de visitas

  await updateDoc(ref, {
    [fieldName]: !valorActual ? 1 : valorActual + 1,
  });
};

const crearDocumentoVisitas = async () => {
  const fecha = new Date();
  const fechaFormateada = formatDate(fecha)
  const ref = doc(db, `visitas/${fechaFormateada}`);

  try {
    const docSnap = await getDoc(ref);
    if (!docSnap.exists()) {
      await setDoc(ref, {});
    }
  } catch (error) {
    console.log("Error creating document:", error);
  }
};

export const contadorVisitas = async (fieldName) => {
  await crearDocumentoVisitas();

  const fecha = new Date();
  const fechaFormateada = formatDate(fecha)
  const docRef = doc(db, "visitas", `${fechaFormateada}`);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data()[fieldName]);
      actualizarVisita(fieldName, docSnap.data()[fieldName]);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error getting document:", error);
  }
};


// formato para la fecha
function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  
  if (month < 10) {
    month = "0" + month;
  }
  
  if (day < 10) {
    day = "0" + day;
  }
  
  return year + "-" + month + "-" + day;
}


