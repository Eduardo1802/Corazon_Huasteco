import React, { useState, useEffect } from "react";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";
import EditarTema from './EditarTema'

export const AdminTemas = () => {
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
          border: "1px solid #ccc",
          color:"inherit",
        },
      },
    };
    const obtenerInfo = async () => {
        const docLict = await app.firestore().collection("temas").get();
        const proyectosData = docLict.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProyectos(proyectosData);
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
                        <TableCell>Tema</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Imágen</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {proyectos.map((proyecto) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={proyecto.id}>
                            <TableCell>{proyecto.titulo}</TableCell>
                            <TableCell>
                                {proyecto.descripcion ?
                                proyecto.descripcion
                                :
                                "Sin descripcion"
                                }
                            </TableCell>
                            <TableCell>                    
                                <img
                                alt={proyecto.img}
                                src={proyecto.img}
                                style={{ width: "100px", height: "100px" }}
                                />
                            </TableCell>
                            
                            <TableCell>
                                <EditarTema tema={proyecto.id}/>
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
