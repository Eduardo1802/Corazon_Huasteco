import React, { useState, useEffect } from "react";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";
import { tipo_tematicas } from "./OptionListTematicas";
import { Form } from "semantic-ui-react";

export const AdminComentarios = () => {
  const [proyectos, setProyectos] = useState([]);
  const [open, setOpen] = useState(false);
  const [tipo_rol, setTipo_rol] = useState("");

  const styles = {
    table: {
      border: "1px solid",
      borderColor: "primary.main",
      "& th": {
        color: "#E0E0E0",
        // color: "#D9CAAD",
        backgroundColor: "primary.main",
        textAlign: "center",
      },
      "& td": {
        backgroundColor: "background.paper",
        textAlign: "center",
        border: "1px solid #ccc",
        color: "inherit",
      },
    },
  };

  const obtenerInfo = async () => {
    const docLict = await app
      .firestore()
      .collection("comentarios")
      .orderBy("tematica", "desc")
      .get();
    const proyectosData = docLict.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProyectos(proyectosData);
  };

  const eliminarProyecto = async (id) => {
    const data = await app
      .firestore()
      .collection("comentarios")
      .doc(id)
      .orderBy("tematica", "desc")
      .get();
    await app.firestore().collection("comentarios").doc(id).delete();
    const referencia = doc(db, `bajaComentarios/${id}`);
    await getDoc(referencia);
    setDoc(referencia, {
      usuario: data.data().usuario,
      titulo: data.data().titulo,
      tematica: data.data().tematica,
      comentario: data.data().comentario,
      puntuacion: data.data().puntuacion,
      fecha: data.data().fecha,
    });
    obtenerInfo();
    console.log(
      `El comentario del usuario${data.data().usuario} fue eliminado`
    );
  };

  const handleSearch = async () => {
    try {
      console.log(tipo_rol);
      if (tipo_rol === "todos" || tipo_rol === "") {
        obtenerInfo();
      } else {
        const docList = await app.firestore().collection("comentarios").get();
        const info_tematicas = docList.docs.filter(
          (doc) => doc.data().tematica === tipo_rol
        );
        setProyectos(info_tematicas.map((doc) => doc.data()));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerInfo();
  }, []);

  return (
    <div>
      <SimpleBackdrop open={open} />
      <Grid container>
        {/* Contenido */}
        <Grid
          container
          spacing={0}
          sx={{ bgcolor: "background.paper", p: 1 }}
        >
          {/* Buscador */}
          <Grid item md={4} sm={6} xs={6}>
            <TextField
              component={Form.Input}
              fullWidth
              select
              label="Tematica"
              type="text"
              onChange={(e) => setTipo_rol(e.target.value)}
              value={tipo_rol || ""}
              autoComplete="off"
            >
              {tipo_tematicas.map((cate) => (
                <MenuItem key={cate.value} value={cate.value}>
                  {cate.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" height="100%">
              <Button fullWidth variant="contained" onClick={handleSearch}>
                Clasificar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* TABLA */}
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 460, backgroundColor: "#E0E0E0" }}>
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
                      startIcon={<DeleteOutlineIcon />}
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
  );
};
