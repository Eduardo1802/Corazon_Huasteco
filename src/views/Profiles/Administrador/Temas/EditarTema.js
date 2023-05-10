import React, { useState, useEffect } from "react";
import {Button,TextField,Dialog,DialogTitle,IconButton,DialogContent, Alert} from "@mui/material";
import { Label } from 'semantic-ui-react';
import { app } from "../../../../config/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const EditarTema = (props) => {
    const { tema } = props;
    const [openDialog, setOpenDialog] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setImg] = useState("");
    //eslint-disable-next-line
    const [logo, setLogo] = useState("");  

    const [mensajeAlerta, setMensajeAlerta] = useState(""); 
    const [tipoAlerta, setTipoAlerta] = useState(""); 
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const obtenerInfo = async () => {
        const data = await app.firestore().collection("temas").doc(tema).get();
        setTitulo(data.data().titulo);
        setDescripcion(data.data().descripcion);
        setImg(data.data().img);
    };

    const handleClickOpen = () => {
        setOpenDialog(true);
      };
          
    const handleClose = () => {
        setOpenDialog(false);
    };

    const archivoHandler = async (e) => {
        const archivoslogo = e.target.files[0];
        setLogo(archivoslogo);
        const url = URL.createObjectURL(archivoslogo);
        setImg(url);
    };

    const actualizarProyecto = async (e) => {
        const documentRef = doc(db, `temas/${tema}`);
        await updateDoc(documentRef, {
            titulo: titulo,
            img:img,
            descripcion: descripcion,
        });
   
        setTipoAlerta("success");
        setMensajeAlerta("Temática editada exitosamente.");
        setMostrarAlerta(true); // Establecer la variable de estado mostrarAlerta en true después de enviar el formulario
        setTimeout(() => {
          setMostrarAlerta(false); // Después de 5 segundos, establecer la variable de estado mostrarAlerta en false para ocultar la alerta emergente
          handleClose();
        }, 2000);
    };

    useEffect(() => {
        obtenerInfo();
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Button variant="contained" startIcon={<EditIcon/>} sx={{color:"primary", background:"primary.main"}} onClick={handleClickOpen}>Editar</Button>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* TITULO */}
                <DialogTitle id="alert-dialog-title" color="#FFFFFF" sx={{ backgroundColor: 'primary.main', textAlign: "center"}}>
                Editar Tema
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
                <DialogContent dividers sx={{ width: {md: 600, sm: 500, xs: 250}}}>
                    <TextField
                        label="Tema"
                        value={titulo}
                        multiline
                        fullWidth
                        required
                        type={"hidden"}
                        sx={{marginBottom: "15px"}}
                    />
                    
                    <TextField
                        label="Descripción"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        multiline
                        fullWidth
                        required
                        sx={{marginTop: "15px", marginBottom: "15px" }}
                        error={descripcion.length === 0}
                        helperText={
                            descripcion.length === 0
                              ? "La descripción no puede estar vacía"
                              : ""
                        }
                    />
 
                    <Label> Imágen complementaría a la descripción:</Label>
                    <input type="file" onChange={archivoHandler} required/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:"15px", marginBottom:"15px" }}>
                        <img src={img} alt="img" style={{ maxWidth: "100%" }}/>
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={actualizarProyecto}
                        color="primary"
                    >
                        Editar
                    </Button>
                </DialogContent>
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

export default EditarTema