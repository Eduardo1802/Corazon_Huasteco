import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { app } from "../../../../config/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import { roles } from "../Productos/optionListRegistro";

export const AdminUsuarios = () => {
  const [proyectos, setProyectos] = useState([]);
  const [rol, setRol] = useState("");
  const [variant, setVariant] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState("");
  // Obtener datos de Firebase al cargar la página
  useEffect(() => {
    obtenerInfo();
  }, []);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("usuarios").get();
    setProyectos(docList.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };
  const editarProyecto = async (id, email, nuevoRol) => {
    const referencia = doc(db, `usuarios/${id}`);
    await updateDoc(referencia, {
      rol: nuevoRol,
    });
    const referencia2 = doc(db, `usuarios_correo/${email}`);
    await updateDoc(referencia2, {
      rol: nuevoRol,
    });
    obtenerInfo();
    setVariant("info");
    setError("Rol actualizado");
    setSnackbarOpen(true);
  };
  const handleRolChange = (e, proyecto) => {
    setRol({ ...rol, [proyecto.id]: e.target.value });
  };
  const handleEditarClick = (proyecto) => {
    const nuevoRol = rol[proyecto.id] || proyecto.rol;
    editarProyecto(proyecto.id, proyecto.email, nuevoRol);
  };
  return (
    
    <TableContainer style={{ flex: "3" }}>
       <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={variant ? variant : "info"}
        >
          {error}
        </MuiAlert>
      </Snackbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Ocupacion</TableCell>
            <TableCell>rol</TableCell>
            <TableCell>Selecciona el rol</TableCell>
            <TableCell>Editar rol</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proyectos.map((proyecto) => (
            <TableRow key={proyecto.id}>
              <TableCell>{proyecto.name}</TableCell>
              <TableCell>{proyecto.email}</TableCell>
              <TableCell>{proyecto.age}</TableCell>
              <TableCell>{proyecto.ocupation}</TableCell>
              <TableCell>{proyecto.rol}</TableCell>
              <TableCell>
                {
                  <TextField
                    fullWidth
                    select
                    label="Roles"
                    type="text"
                    name="Roles"
                    onChange={(e) => handleRolChange(e, proyecto)}
                    value={rol[proyecto.id] || proyecto.rol}
                    autoComplete="off"
                  >
                    {roles.map((cate) => (
                      <MenuItem key={cate.value} value={cate.value}>
                        {cate.label}
                      </MenuItem>
                    ))}
                  </TextField>
                }
              </TableCell>
              <TableCell>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={() => handleEditarClick(proyecto)}
                  color="primary"
                >
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
