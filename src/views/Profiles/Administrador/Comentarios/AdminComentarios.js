import React, { useState, useEffect } from "react";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { useParams } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";

export const AdminComentarios = () => {
    const [proyectos, setProyectos] = useState([]);
    const [open, setOpen] = useState(false);
    const styles = {
        table: {
          border: "1px solid",
          borderColor: 'primary.main',
          "& th": {
            color: "#E0E0E0",
            // color: "#D9CAAD",
            backgroundColor: "primary.main",
            textAlign: 'center',
          },
          "& td": {
            backgroundColor: "background.paper",
            textAlign: "center",
            border: "1px solid #ccc",
            color:"inherit",
          },
        },
    };

    const obtenerInfo = async () => {
        const docLict = await app.firestore().collection("comentarios").orderBy("tematica", "desc").get();
        const proyectosData = docLict.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProyectos(proyectosData);
    };

    const eliminarProyecto = async (id) => {
        const data = await app.firestore().collection("comentarios").doc(id).get();
        await app.firestore().collection("comentarios").doc(id).delete();
        const referencia = doc(db, `bajaComentarios/${id}`);
        await getDoc(referencia);
        setDoc(referencia, {
          usuario: data.data().usuario,
          titulo: data.data().titulo,
          tematica: data.data().tematica,
          comentario: data.data().comentario,
          puntuacion:data.data().puntuacion,
          fecha: data.data().fecha,
        });
        obtenerInfo();
        console.log(`El comentario del usuario${data.data().usuario} fue eliminado`);
    };

    useEffect(() => {
        obtenerInfo();
    }, []);

    return (
        <div>
            <SimpleBackdrop open={open} />
            {/* TABLA */}
            <Paper sx={{ width: '100%'}}>
                <TableContainer sx={{ maxHeight: 460, backgroundColor:"#E0E0E0"}}>
                <Table stickyHeader aria-label="sticky table" sx={styles.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Titulo</TableCell>
                        <TableCell>Temática</TableCell>
                        <TableCell>Comentario</TableCell>
                        <TableCell>Puntuación</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Acción</TableCell>
                        {/* <TableCell colSpan={2}>
                        <AgregarTematicas/>
                        </TableCell> */}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {proyectos.map((proyecto) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={proyecto.id}>
                        <TableCell>{proyecto.usuario}</TableCell>
                        <TableCell>{proyecto.titulo}</TableCell>
                        <TableCell>{proyecto.tematica}</TableCell>
                        <TableCell>{proyecto.comentario}</TableCell>
                        <TableCell>{proyecto.puntuacion}</TableCell>
                        <TableCell>{proyecto.fecha}</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<DeleteOutlineIcon/>}
                                onClick={() => {
                                    const confirmar = window.confirm(
                                    `¿Estás seguro de que quieres eliminar el comentario del usuario ${proyecto.usuario}?`
                                    );
                                    if (confirmar) {
                                    eliminarProyecto(proyecto.id);
                                    }
                                }}
                                >
                                Eliminar
                                </Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}
