import React, { useState, useEffect } from "react";
import {Button,TextField,Dialog,DialogTitle,IconButton,DialogContent,MenuItem,Alert} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { app } from "../../../../config/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import { categorias } from "./OptionListTematicas";
import { Label } from 'semantic-ui-react';

const EditarTematicas = (props) => {
    const { tematica } = props;
    const [openDialog, setOpenDialog] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imgPortada, setImgPortada] = useState("");
    const [logo, setLogo] = useState("");  
    const [imagen, setImagen] = useState("");
    const [img, setImg] = useState("");
    const [info, setInfo] = useState("");
    const [tematic, setTematic] = useState("");

    const [mensajeAlerta, setMensajeAlerta] = useState(""); 
    const [tipoAlerta, setTipoAlerta] = useState(""); 
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const obtenerInfo = async () => {
        const data = await app.firestore().collection("tematicas").doc(tematica).get();
        setTitulo(data.data().titulo);
        setDescripcion(data.data().descripcion);
        setImgPortada(data.data().imgPortada);
        setImagen(data.data().imagen);
        setInfo(data.data().informacion?.split(" ").join(" ") || '');
        setTematic(data.data().tematica);
    };

    const actualizarProyecto = async (e) => {
        const documentRef = doc(db, `tematicas/${tematica}`);
        await updateDoc(documentRef, {
            titulo: titulo,
            tematica: tematic,
            informacion: info,
            imgPortada: imgPortada,
            imagen:imagen,
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
    }, []);

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
        setImgPortada(url);
    };

    const archivoHandler2 = async (e) => {
        const archivosImagen = e.target.files[0];
        setImg(archivosImagen);
        const url2 = URL.createObjectURL(archivosImagen);
        setImagen(url2);
    };

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
                Editar Temática
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
                        label="Titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        multiline
                        fullWidth
                        required
                        sx={{marginBottom: "15px"}}
                        error={titulo.length === 0 || titulo.length < 5 || titulo.length > 30}
                        helperText={
                            titulo.length === 0
                            ? "El nombre del titulo no puede estar vacío"
                            : titulo.length < 5
                            ? "El nombre del titulo debe tener al menos 5 caracteres"
                            : titulo.length > 30
                            ? "El nombre del titulo no puede tener más de 30 caracteres"
                            : ""
                        }
                    />

                    <Label> Imágen complementaría a la sinopsis:</Label>
                    <input type="file" onChange={archivoHandler} required/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={imgPortada} style={{ maxWidth: "100%" }}/>
                    </div>

                    <TextField
                        label="Sinopsis"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        multiline
                        fullWidth
                        required
                        sx={{marginTop: "15px", marginBottom: "15px" }}
                        error={descripcion.length === 0 ||descripcion.length < 30 || descripcion.length > 300}
                        helperText={
                            descripcion.length === 0
                              ? "La sinopsis no puede estar vacía"
                              : descripcion.length < 30
                              ? "La sinopsis debe tener al menos 30 caracteres"
                              : descripcion.length > 300
                              ? "La sinopsis no puede tener más de 300 caracteres"
                              : ""
                        }
                    />
                  
                    <Label>Imágen complementaría a la información:</Label>
                    <input type="file" onChange={archivoHandler2} required/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={imagen} style={{ maxWidth: "100%" }}/>
                    </div>

                    <TextField
                        label="Información"
                        value={info || ""}
                        onChange={(e) => setInfo(e.target.value)}
                        multiline
                        // rows={5}
                        fullWidth
                        required
                        sx={{marginBottom: "15px", marginTop: "15px"}}
                        error={info.length === 0 }
                        helperText={
                            info.length === 0
                              ? "La informacion no puede estar vacía"
                              : ""
                        }
                    >
                    </TextField>

                    <TextField
                        fullWidth
                        select
                        label="temática"
                        type="text"
                        sx={{marginBottom: "15px"}}
                        onChange={(e) => setTematic(e.target.value)}
                        value={tematic}
                        autoComplete="off"
                        required
                        error={tematic.length === 0}
                        helperText={
                            tematic.length === 0
                            ? "La tematica no puede estar vacía"
                            : ""
                        }
                    >
                        {categorias.map((cate) => (
                            <MenuItem key={cate.value} value={cate.value}>
                            {cate.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    
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

export default EditarTematicas