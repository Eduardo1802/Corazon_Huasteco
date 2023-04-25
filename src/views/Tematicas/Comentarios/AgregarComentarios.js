import React, { useState } from 'react'
import moment from 'moment';
import {useAuth} from "../../../context/AuthContext"
import {Button,Box,TextField,Alert,Dialog,DialogTitle,IconButton,DialogContent,DialogContentText,DialogActions,Rating} from "@mui/material";
import { app } from "../../../config/firebase/firebase";
import AddCommentIcon from '@mui/icons-material/AddComment';
import CloseIcon from '@mui/icons-material/Close';
import userImage from "../../../assets/img/perfil/noProfilePicture.jpg";


const AgregarComentarios = ({tematica}) => {
  // VARIABLES
  const {user} = useAuth();
  const [comentario, setComentario] = useState("");
  const [puntuacion, setPuntuacion] = useState("");
  const [mensajeAlerta, setMensajeAlerta] = useState(""); 
  const [tipoAlerta, setTipoAlerta] = useState(""); 
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const usuario = user.email;
  const fecha = moment().format('YYYY-MM-DD');
  const tema = tematica.tematica;
  const titulo = tematica.titulo;
  const palabrasProhibidas = ["puto","puta","pendejo","pendeja","imbécil","estupido","estupida","culero","culera","zorra","maldita","maldito","pinche","maricón","puñetas","puñetón"];
  const textosPuntuacion = {
    0.5: "Inútil",
    1: "Inútil",
    1.5: "Pobre",
    2: "Pobre",
    2.5: "De Acuerdo",
    3: "De Acuerdo",
    3.5: "Bueno",
    4: "Bueno",
    4.5: "Excelente",
    5: "Excelente",
  };
  // abrir el dialogo
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
    
  const handleClose = () => {
    setOpenDialog(false);
  };
  // LIMPIAR VARIABLES 
  const reset = () => {
    setComentario("");
    setPuntuacion("");
  };

  // FUNCIÓN PARA ENVIAR 
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevenir envío por defecto
    const docList = await app.firestore().collection("comentarios").get();
    const comentariosDelUsuario  = docList.docs.filter((doc) => doc.data().usuario === user.email);
    const contienePalabraProhibida = palabrasProhibidas.some((palabra) => comentario.toLowerCase().includes(palabra));
    console.log(comentariosDelUsuario);
    if(comentario.length === 0){
      setMensajeAlerta("El comentario es obligatorio.");
      setTipoAlerta("warning");
      setMostrarAlerta(true); 
      setTimeout(() => {
        setMostrarAlerta(false); 
      }, 2000);
    }else if(comentario.length > 280){
      setMensajeAlerta("El comentario no puede tener más de 280 caracteres.");
      setTipoAlerta("warning");
      setMostrarAlerta(true); 
      setTimeout(() => {
        setMostrarAlerta(false); 
      }, 2000);
    }else if(puntuacion.length === 0){
      setMensajeAlerta("La puntuación es obligatoria.");
      setTipoAlerta("warning");
      setMostrarAlerta(true); 
      setTimeout(() => {
        setMostrarAlerta(false); 
      }, 2000);
    }else if(contienePalabraProhibida){
      setMensajeAlerta("Se prohibe palabras obscenas.");
      setTipoAlerta("error");
      setMostrarAlerta(true); 
      setTimeout(() => {
        setMostrarAlerta(false); 
      }, 2000);
    }else if(comentariosDelUsuario.length > 1){
        // console.log("Usuario ya ha comentado.");
        setTipoAlerta("error");
        setMensajeAlerta("Ya existe un comentario con el usuario "+user.email);
        setMostrarAlerta(true); // Establecer la variable de estado mostrarAlerta en true después de enviar el formulario
        setTimeout(() => {
          setMostrarAlerta(false); // Después de 5 segundos, establecer la variable de estado mostrarAlerta en false para ocultar la alerta emergente
          handleClose();
        }, 2000);
        reset();
        return;
    }else{
        // console.log("Usuario aun no tiene comentario");  
        e.preventDefault();
        const coleccionRef = app.firestore().collection("comentarios");
        await coleccionRef.doc(`${new Date().getTime()}`).set({
          usuario: usuario,
          comentario: comentario,
          fecha: fecha,
          puntuacion: puntuacion,
          tematica: tema,
          titulo: titulo,
        });
        setTipoAlerta("success");
        setMensajeAlerta("Comentario agregado exitosamente.");
        setMostrarAlerta(true); // Establecer la variable de estado mostrarAlerta en true después de enviar el formulario
        setTimeout(() => {
          setMostrarAlerta(false); // Después de 5 segundos, establecer la variable de estado mostrarAlerta en false para ocultar la alerta emergente
          handleClose();
        }, 4000);
        reset();
    }


  };

  return (
    <div>
      <Button variant="contained" startIcon={<AddCommentIcon/>} onClick={handleClickOpen}>Agregar Comenterio</Button>        
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      > 
        {/* TITULO */}
        <DialogTitle id="alert-dialog-title">
          Agregar Comentario
          <IconButton
              aria-label="close"
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

        {/* USUARIO */}
        <DialogContent dividers sx={{ width: {md: 600, sm: 500, xs: 250}}}>
            <DialogContentText id="alert-dialog-description">
                Usuario: {user.email}
            </DialogContentText>
        </DialogContent>

       {/* FOTO DEL PERFIL */}
       <DialogContent dividers sx={{ width: {md: 600, sm: 500, xs: 250}}}>
            <DialogContentText id="alert-dialog-description">
                Foto de perfil 
            </DialogContentText>
        {/* </DialogContent> */}
        {/* <DialogContent> */}
            <Box sx={{ m: 1, display: "flex", justifyContent: "center"}}>
                <Box
                    component="img"
                    src={userImage} 
                    alt="Perfil" 
                    sx={{width: 168, height: 168, borderRadius: "50%", border: "2px solid #fff"}}
                />
            </Box>
        </DialogContent>

        <DialogContent dividers sx={{ width: {md: 600, sm: 500, xs: 250}}}>
          <TextField
            label="Comentario"
            value={comentario || ""}
            onChange={(e) => setComentario(e.target.value)}
            multiline
            rows={2}
            fullWidth
            required
            sx={{marginBottom: "15px"}}
          />

          <DialogContentText id="alert-dialog-description">
              Puntuación
          </DialogContentText>

          <div style={{display: 'flex'}}>
            <Rating 
              name="half-rating" 
              defaultValue={2.5} 
              precision={1} 
              value={parseInt(puntuacion)}
              onChange={(e) => setPuntuacion(e.target.value)}
              required
              sx={{marginRight: "15px"}}
            />
            {puntuacion in textosPuntuacion && <p>{textosPuntuacion[puntuacion]}</p>}
          </div>

        </DialogContent>

        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            fullWidth
          >
            Agregar comentario
          </Button>
        </DialogActions>

        {/* ALERTA */}
        <DialogContent>
          {mostrarAlerta && (
            <Alert severity={tipoAlerta} sx={{ mt: 2 }}>
              {mensajeAlerta}
            </Alert>
          )}
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default AgregarComentarios