import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React, {useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db } from '../../config/firebase/firebaseDB';
import CustomSnackbar from '../../views/Profiles/CustomSnackbar';

export const EditProfile = (props) => {

    const { userImage, user } = props;
    // abrir el dialogo
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // Estado para controlar el Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpenDialog(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Validar si el archivo es de tipo imagen en formato JPG y su tamaño es menor a 1 MB
    if (file && file.type.startsWith('image/') && file.size < 1024 * 1024) {
      setSelectedImage(file);
    } else {
      // Si el archivo no cumple las validaciones, mostrar un mensaje de error o tomar alguna otra acción
      setSnackbarMessage('El archivo seleccionado debe ser una imagen en formato JPG con un tamaño menor a 1 MB.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
        setSnackbarMessage('Debes seleccionar una imagen para guardar');
        setSnackbarSeverity('warning');
        setSnackbarOpen(true);
        return;
    }

    try {
      // Subir la imagen a Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `usuarios/${user}/${selectedImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);
      const snapshot = await uploadTask;
      const downloadUrl = await getDownloadURL(snapshot.ref);

      // Actualizar el campo profileImageUrl del usuario en Firestore
      const userDocRef = doc(db, 'usuarios', user);
      await updateDoc(userDocRef, {
        profileImageUrl: downloadUrl,
      });

      // Cerrar el diálogo después de actualizar
      setOpenDialog(false);
      // Snackbar para mostrar un mensaje de éxito
      setSnackbarMessage('¡Foto de perfil actualizada con éxito!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setSelectedImage(null);
    } catch (error) {
      // Snackbar para mostrar un mensaje de error
      setSnackbarMessage('Hubo un error al actualizar la foto de perfil.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
        <Button variant="contained" startIcon={<EditIcon/>} onClick={handleClickOpen} aria-label='editar perfil'>Editar Perfil</Button>
        <Dialog
            disableScrollLock
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="Editar perfil"
            aria-describedby="Editar foto de perfil"
        >
            <DialogTitle id="alert-dialog-title">
                Editar Perfil
                <IconButton
                    aria-label="cerrar"
                    onClick={handleClose}
                    sx={{
                    position: 'absolute',
                    right: 8,
                    top: 13,
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ width: {md: 600, sm: 500, xs: 250}}}>
                <DialogContentText id="alert-dialog-description">
                    Foto de perfil 
                    <Button variant='text' component="label" sx={{position: "absolute", right: 8}} aria-label='abrir explorador de archivos'>
                        Editar
                        <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                    </Button>
                </DialogContentText>
            </DialogContent>
            <DialogContent>
                <Box sx={{ m: 1, display: "flex", justifyContent: "center"}}>
                    <Box
                        component="img"
                        src={userImage} 
                        alt="Perfil" 
                        sx={{width: 168, height: 168, borderRadius: "50%", border: "2px solid #fff"}}
                    />
                </Box>
            </DialogContent>
            
            
            {/* Input para seleccionar la nueva imagen */}
            <DialogActions>
                <Button onClick={handleImageUpload} fullWidth variant="contained" aria-label='guardar imagen'>
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>


        {/* Snackbar para mostrar mensajes */}
        <CustomSnackbar open={snackbarOpen} onClose={handleSnackbarClose} message={snackbarMessage} severity={snackbarSeverity} />
    </Box>
  )
}
