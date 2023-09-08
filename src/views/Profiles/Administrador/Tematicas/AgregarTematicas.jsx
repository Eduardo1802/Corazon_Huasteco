import React, { useState } from 'react'
import {Button,TextField,Dialog,DialogTitle,IconButton,DialogContent,MenuItem,Alert} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { app } from "../../../../config/firebase/firebase";
import { categorias } from "./OptionListTematicas";
import { Label } from 'semantic-ui-react';

const AgregarTematicas = () => {
    const [titulo, setTitulo] = useState("");
    const [sinopsis, setSinopsis] = useState("");
    const [informacion, setInformacion] = useState("");
    const [tematica, setTematica] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [logoUrl, setLogoUrl] = useState("");
    const [logo, setLogo] = useState("");   
    const [imagenUrl, setImagenUrl] = useState("");
    const [imagen, setImagen] = useState("");
    const [mensajeAlerta, setMensajeAlerta] = useState(""); 
    const [tipoAlerta, setTipoAlerta] = useState(""); 
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const reset = () => {
        setTitulo("");
        setSinopsis("");
        setInformacion("");
        setLogo(null);
        setLogoUrl("");
        setImagen(null);
        setImagenUrl("");
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
        setLogoUrl(url);
    };

    const archivoHandler2 = async (e) => {
        const archivosImagen = e.target.files[0];
        setImagen(archivosImagen);
        const url2 = URL.createObjectURL(archivosImagen);
        setImagenUrl(url2);
    };
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!logo) {
          setMensajeAlerta("Debe colocar una imagen.");
          setTipoAlerta("warning");
          setMostrarAlerta(true); 
          setTimeout(() => {
            setMostrarAlerta(false); 
          }, 2000);
          return;
        }
        if (!imagen) {
          setMensajeAlerta("Debe colocar una imagen.");
          setTipoAlerta("warning");
          setMostrarAlerta(true); 
          setTimeout(() => {
            setMostrarAlerta(false); 
          }, 2000);
          return;
        }
        // Verificar que el archivo sea una imagen
        if (!logo.type.startsWith("image/")) {
          setMensajeAlerta("Debe ser una imagen.");
          setTipoAlerta("warning");
          setMostrarAlerta(true); 
          setTimeout(() => {
            setMostrarAlerta(false); 
          }, 2000);
          return;
        }
        if (!imagen.type.startsWith("image/")) {
          setMensajeAlerta("Debe ser una imagen.");
          setTipoAlerta("warning");
          setMostrarAlerta(true); 
          setTimeout(() => {
            setMostrarAlerta(false); 
          }, 2000);
          return;
        }
        const TAM_MAX = 921600; // limit file size to 900 KB
        if (logo.size > TAM_MAX) {
          setMensajeAlerta("La imagen debe pesar menos de 900kb.");
          setTipoAlerta("warning");
          setMostrarAlerta(true); 
          setTimeout(() => {
            setMostrarAlerta(false); 
          }, 2000);
          return;
        }
        if (imagen.size > TAM_MAX) {
          setMensajeAlerta("La imagen debe pesar menos de 900kb.");
          setTipoAlerta("warning");
          setMostrarAlerta(true); 
          setTimeout(() => {
            setMostrarAlerta(false); 
          }, 2000);
          return;
        }
        if (!titulo) return;
        if (!sinopsis) return;
        if (!informacion) return;
        if (!tematica) return;

        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(`${tematica}/${new Date().getTime()}`);
        const archivoPath2 = storageRef.child(`${tematica}/${new Date().getTime()}`);
        await archivoPath.put(logo);
        await archivoPath2.put(imagen);

    
        const enlaceUrl = await archivoPath.getDownloadURL();
        setLogoUrl(enlaceUrl);
        const enlaceUrl2 = await archivoPath2.getDownloadURL();
        setImagenUrl(enlaceUrl2);
    
        const coleccionRef = app.firestore().collection("tematicas");
        await coleccionRef.doc(`${new Date().getTime()}`).set({
          titulo: titulo,
          tematica: tematica,
          informacion: informacion,
          imgPortada: enlaceUrl,
          imagen:enlaceUrl2,
          descripcion: sinopsis,
        });
        setTipoAlerta("success");
        setMensajeAlerta("Temática agregada exitosamente.");
        setMostrarAlerta(true); // Establecer la variable de estado mostrarAlerta en true después de enviar el formulario
        setTimeout(() => {
          setMostrarAlerta(false); // Después de 5 segundos, establecer la variable de estado mostrarAlerta en false para ocultar la alerta emergente
          handleClose();
        }, 4000);
        reset();
      };

    return (
        <div>
            <Button variant="contained" startIcon={<AddCircleOutlineIcon/>} sx={{color: "black", background:"#E0E0E0"}} onClick={handleClickOpen}>Agregar</Button>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* TITULO */}
                <DialogTitle id="alert-dialog-title" color="#FFFFFF" sx={{ backgroundColor: 'primary.main', textAlign: "center"}}>
                Agregar Temática
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
                        value={titulo || ""}
                        onChange={(e) => setTitulo(e.target.value)}
                        multiline
                        fullWidth
                        required
                        // sx={{marginBottom: "15px"}}
                        error={
                            titulo.length === 0 ||
                            titulo.length < 5 ||
                            titulo.length > 30
                          }
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

                    <Label> Imagen complementaria a la snopsis:</Label>
                    <input type="file" onChange={archivoHandler} required/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={logoUrl} style={{ maxWidth: "100%" }}/>
                    </div>

                    <TextField
                        label="Sinopsis"
                        value={sinopsis || ""}
                        onChange={(e) => setSinopsis(e.target.value)}
                        multiline
                        fullWidth
                        required
                        sx={{marginTop: "15px"}}
                        error={
                            sinopsis.length === 0 ||
                            sinopsis.length < 30 ||
                            sinopsis.length > 150
                          }
                          helperText={
                            sinopsis.length === 0
                              ? "La sinopsis no puede estar vacía"
                              : sinopsis.length < 30
                              ? "La sinopsis debe tener al menos 30 caracteres"
                              : sinopsis.length > 150
                              ? "La sinopsis no puede tener más de 150 caracteres"
                              : ""
                          }
                    />

                    <Label>Imagen complementaria a la información:</Label>
                    <input type="file" onChange={archivoHandler2} required/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={imagenUrl} style={{ maxWidth: "100%" }}/>
                    </div>

                    <TextField
                        label="Información"
                        value={informacion || ""}
                        onChange={(e) => setInformacion(e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                        required
                        sx={{marginBottom: "15px", marginTop: "15px"}}
                        error={informacion.length === 0 }
                        helperText={
                            informacion.length === 0
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
                        onChange={(e) => setTematica(e.target.value)}
                        value={tematica || ""}
                        autoComplete="off"
                        required
                        error={tematica.length === 0}
                        helperText={
                            tematica.length === 0
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
                        onClick={handleSubmit}
                        color="primary"
                    >
                        Agregar
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

export default AgregarTematicas