import React, { useState, useEffect } from "react";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

export const AdminTematicas = () => {
  
  const [proyectos, setProyectos] = useState([]);
  const [add, setAdd] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [informacion, setInformacion] = useState("");
  const [tematica, setTematica] = useState("");
  const [imagen, setImagen] = useState("");
  const [imgPortada, setImgPortada] = useState("");

  const styles = {
    table: {
      border: "1px solid #ccc",
      "& th": {
        color: "#E0E0E0",
        // color: "#D9CAAD",
        backgroundColor: "#59143A",
        textAlign: 'center',
      },
      "& td": {
        backgroundColor: "#E0E0E0",
        border: "1px solid #ccc",
        backgroundColor: '#E0E0E0',
        color:"black"
      },
    },
  };
  
  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("tematicas").orderBy("tematica", "desc").get();
    setProyectos(docList.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };
  
  function crear() {
    reset();
    setAdd(true);
  }

  const reset = () => {
    setTitulo("");
    setDescripcion("");
    setTematica("");
    setImagen("");
    setImgPortada("");
    // setArchivo(null);
    // setArchivoUrl("");
  };

  useEffect(() => {
    obtenerInfo();
  }, []);

  return (
    <div>
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
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={crear}
                    // color="primary"
                    sx={{color: "black", background:"#E0E0E0"}}
                    startIcon={<AddCircleOutlineIcon/>}
                  >
                    Agregar
                  </Button>
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
                        <Button
                          type="submit"
                          variant="contained"
                          // onClick={() => editarProyecto(proyecto.id)}
                          color="primary"
                          startIcon={<EditIcon/>}
                        >
                          Editar
                        </Button>       
                    </TableCell>
                    <TableCell>
                        <Button
                            variant="contained"
                            color="primary"
                            // onClick={() => {
                            //   const confirmar = window.confirm(
                            //     `¿Estás seguro de que quieres eliminar el producto ${proyecto.nombre}?`
                            //   );
                            //   if (confirmar) {
                            //     eliminarProyecto(proyecto.id);
                            //   }
                            // }}
                            startIcon={<DeleteOutlineIcon/>}
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
