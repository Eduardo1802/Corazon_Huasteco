import { app } from '../../../../config/firebase/firebase';

export const handleBackup =  (value) => {
    if(!value){
        alert("No se ha seleccionado ninguna colección");
        return;
    }else{
        backupOneCollection(value);
    }
};

const backupOneCollection = async(collectionName)=>{
    const collectionRef = app.firestore().collection(collectionName); // Cambia "tu-coleccion" por el nombre de la colección que quieres respaldar
    const querySnapshot = await collectionRef.get();
    const data = {};

    querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data();
    });

    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${collectionName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}