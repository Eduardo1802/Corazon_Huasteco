import React, { useState, useEffect } from "react";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Box, TextField, MenuItem } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AgregarTematicas from "./AgregarTematicas";
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";
import EditarTematicas from "./EditarTematicas"
import {tipo_tematicas} from "./OptionListTematicas"
import { Form } from "semantic-ui-react"

export const AdminTematicas = () => {
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
        border: "1px solid #ccc",
        color:"inherit",
      },
    },
  };

  const handleSearch = async () => {
    try {
      console.log(tipo_rol)
      if (tipo_rol === "todos" || tipo_rol === "") {
        obtenerInfo();
      }else{
        const docList = await app.firestore().collection("tematicas").get();
        const info_tematicas = docList.docs.filter((doc) => doc.data().tematica === tipo_rol );
        setProyectos(info_tematicas.map((doc) => doc.data()));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarProyecto = async (id) => {
    const data = await app.firestore().collection("tematicas").doc(id).get();
    await app.firestore().collection("tematicas").doc(id).delete();
    const referencia = doc(db, `bajaTematicas/${id}`);
    await getDoc(referencia);
    setDoc(referencia, {
      titulo: data.data().titulo,
      tematica: data.data().tematica,
      informacion: data.data().informacion,
      imgPortada: data.data().imgPortada,
      imagen:data.data().imagen,
      descripcion: data.data().descripcion,
    });
    obtenerInfo();
    console.log(`La tematica ${data.data().titulo} fue eliminada`);
  };
  
  const obtenerInfo = async () => {
    const docLict = await app.firestore().collection("tematicas").orderBy("tematica", "desc").get();
    const proyectosData = docLict.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProyectos(proyectosData);
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
          rowSpacing={1}
          columnSpacing={1}
          sx={{bgcolor: "background.paper", p:1}}
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
          <Grid item  md={4} sm={12} xs={12}>
            <Box display="flex" height="100%">
              <Button fullWidth  variant="contained" onClick={handleSearch} > 
                Clasificar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* TABLA */}
      <Paper sx={{ width: '100%'}}>
        <TableContainer sx={{ maxHeight: 460, backgroundColor:"#E0E0E0"}}>
        <Table stickyHeader aria-label="sticky table" sx={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Sinopsis</TableCell>
                <TableCell>Información</TableCell>
                <TableCell>Temática</TableCell>
                <TableCell>Logo</TableCell>
                <TableCell>Imágen</TableCell>
                <TableCell colSpan={2}>
                  <AgregarTematicas/>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {proyectos.map((proyecto) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={proyecto.id}>
                  <TableCell>{proyecto.titulo}</TableCell>
                  <TableCell>
                    {proyecto.descripcion ?
                      proyecto.descripcion.split(" ").slice(0,40).join(" ") + "..."
                      :
                      "Sin descripcion"
                    }
                  </TableCell>
                  <TableCell> 
                    {proyecto.informacion ?
                      proyecto.informacion.split(" ").slice(0,50).join(" ") + "..."
                      :
                      "Sin información"
                    }
                  </TableCell>
                  <TableCell>{proyecto.tematica}</TableCell>
                  <TableCell>                    
                    <img
                      alt={proyecto.imgPortada}
                      src={proyecto.imgPortada}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <img
                      alt={proyecto.imagen}
                      src={proyecto.imagen}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <EditarTematicas tematica={proyecto.id}/>
                  </TableCell>
                    <TableCell>
                      <Button
                          variant="contained"
                          color="primary"
                          startIcon={<DeleteOutlineIcon/>}
                          onClick={() => {
                            const confirmar = window.confirm(
                              `¿Estás seguro de que quieres eliminar la temática ${proyecto.titulo}?`
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
