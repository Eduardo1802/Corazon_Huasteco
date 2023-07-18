import React, { useState, useEffect } from "react";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Box, TextField, MenuItem } from "@mui/material";
import { useParams } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";
import { Form } from "semantic-ui-react"

export const AdminProveedor = () => {
    const [proyectos, setProyectos] = useState([]);
    const [open, setOpen] = useState(false);
    const [tipo_rol, setTipo_rol] = useState("");

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
        const docLict = await app.firestore().collection("proveedores").get();
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
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 460, backgroundColor: "#E0E0E0" }}>
          <Table stickyHeader aria-label="sticky table" sx={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>Núm.</TableCell>
                <TableCell>Nombre de la Empresa</TableCell>
                <TableCell>Especialización</TableCell>
                <TableCell>Nombre de el Encargado</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Contacto</TableCell>
                <TableCell>Ubicación</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {proyectos.map((proyecto,index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={proyecto.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{proyecto.nameEmpresa}</TableCell>
                  <TableCell>{proyecto.especializacion}</TableCell>
                  <TableCell>{proyecto.nameEncargado}</TableCell>
                  <TableCell>{proyecto.email}</TableCell>
                  <TableCell>{proyecto.contacto}</TableCell>
                  <TableCell>{proyecto.ubicacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}
