import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Collapse,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import { categorias, colores } from "./optionListRegistro";
export const AdminProductos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [estado, setEstado] = useState(false);
  const [add, setAdd] = useState("");

  // Obtener datos de Firebase al cargar la página
  useEffect(() => {
    obtenerInfo();
  }, []);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("producto").get();
    setProyectos(docList.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // Eliminar un proyecto por su ID
  const eliminarProyecto = async (id) => {
    const data = await app.firestore().collection("producto").doc(id).get();
    await app.firestore().collection("producto").doc(id).delete();
    const referencia = doc(db, `bajaProductos/${id}`);
    await getDoc(referencia);
    setDoc(referencia, {
      name: data.data().nombre,
      categoria: data.data().categoria,
      color: data.data().color,
      costo: data.data().costo,
      descripcion: data.data().descripcion,
      url: data.data().url,
    });
    obtenerInfo();
    setVariant("info");
    setError(`El produto ${data.data().nombre} fue eliminado`);
    setSnackbarOpen(true);
  };

  const [archivoUrl, setArchivoUrl] = useState("");
  const [nombreProducto, setnombreProducto] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [categoria, setcategoria] = useState("");
  const [color, setcolor] = useState("");
  const [costo, setcosto] = useState("");
  const [idDoc, setIdoc] = useState("");
  const [archivo, setArchivo] = useState("");
  const [error, setError] = useState("");

  const reset = () => {
    setnombreProducto("");
    setdescripcion("");
    setcategoria("");
    setcolor("");
    setcosto("");
    setArchivo(null);
    setArchivoUrl("");
  };
  const archivoHandler = async (e) => {
    const archivos = e.target.files[0];
    setArchivo(archivos);
    const url = URL.createObjectURL(archivos);
    setArchivoUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archivo) {
      setVariant("warning");
      setError("Debe colocar una imagen");
      setSnackbarOpen(true);
      return;
    }
    // Verificar que el archivo sea una imagen
    if (!archivo.type.startsWith("image/")) {
      setVariant("warning");
      setError("Debe ser una imagen");
      setSnackbarOpen(true);
      return;
    }
    const TAM_MAX = 921600; // limit file size to 900 KB
    if (archivo.size > TAM_MAX) {
      setVariant("warning");
      setError("La imagen debe pesar menos de 900kb");
      setSnackbarOpen(true);
      return;
    }
    if (!nombreProducto) return;
    if (!costo) return;
    if (!descripcion) return;
    if (!categoria) return;
    if (!color) return;

    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(`productos/${new Date().getTime()}`);
    await archivoPath.put(archivo);

    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);

    const coleccionRef = app.firestore().collection("producto");
    await coleccionRef.doc(`${new Date().getTime()}`).set({
      nombre: nombreProducto,
      url: enlaceUrl,
      descripcion: descripcion,
      categoria: categoria,
      color: color,
      costo: costo,
    });
    reset();
    obtenerInfo();
    setEstado(false);
    setVariant("info");
    setError("Producto Registrado ");
    setSnackbarOpen(true);
  };
  const editarProyecto = (id) => {
    reset();
    setAdd(false);
    const proyecto = proyectos.find((proyecto) => proyecto.id === id);
    console.log("proyecto seleccionado:", proyecto);
    setEstado(true);
    setArchivoUrl(proyecto.url);
    setnombreProducto(proyecto.nombre);
    setdescripcion(proyecto.descripcion);
    setcategoria(proyecto.categoria);
    setcolor(proyecto.color);
    setcosto(proyecto.costo);
    setIdoc(id);
  };

  const actualizarProyecto = async (e) => {
    const documentRef = doc(db, `producto/${idDoc}`);
    if (archivoUrl === null) {
      await updateDoc(documentRef, {
        nombre: nombreProducto,
        descripcion: descripcion,
        categoria: categoria,
        color: color,
        costo: costo,
      });
    } else {
      await updateDoc(documentRef, {
        nombre: nombreProducto,
        url: archivoUrl,
        descripcion: descripcion,
        categoria: categoria,
        color: color,
        costo: costo,
      });
    }
    reset();
    setVariant("info");
    setError("Producto Editado");
    setSnackbarOpen(true);
    obtenerInfo();
    setEstado(false);
  };

  function crear() {
    reset();
    setAdd(true);
    setEstado(!estado);
  }
  const [variant, setVariant] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  return (
    <div>
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <TableContainer style={{ flex: "3" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={crear}
                    color="primary"
                  >
                    {estado ? "Cerrar" : "Agregar"}
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {proyectos.map((proyecto) => (
                <TableRow key={proyecto.id}>
                  <TableCell>
                    <img
                      alt={proyecto.url}
                      src={proyecto.url}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </TableCell>
                  <TableCell>{proyecto.nombre}</TableCell>
                  <TableCell>{proyecto.descripcion}</TableCell>
                  <TableCell>{proyecto.categoria}</TableCell>
                  <TableCell>{proyecto.color}</TableCell>
                  <TableCell>{proyecto.costo}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        const confirmar = window.confirm(
                          `¿Estás seguro de que quieres eliminar el producto ${proyecto.nombre}?`
                        );
                        if (confirmar) {
                          eliminarProyecto(proyecto.id);
                        }
                      }}
                    >
                      Eliminar
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => editarProyecto(proyecto.id)}
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
        <div style={{ flex: "1", marginLeft: "20px" }}>
          <Collapse in={estado}>
            <Typography variant="h4" align="center">
            {add ? "Agregar" : "Editar"} Producto
            </Typography>
            <input type="file" onChange={archivoHandler} required />
            <img src={archivoUrl} style={{ maxWidth: "100%" }} alt="producto" />

            <br />
            <br />
            <TextField
              label="Nombre del producto"
              value={nombreProducto || ""}
              onChange={(e) => setnombreProducto(e.target.value)}
              required
              error={
                nombreProducto.length === 0 ||
                nombreProducto.length < 5 ||
                nombreProducto.length > 30
              }
              helperText={
                nombreProducto.length === 0
                  ? "El nombre del producto no puede estar vacío"
                  : nombreProducto.length < 5
                  ? "El nombre del producto debe tener al menos 5 caracteres"
                  : nombreProducto.length > 30
                  ? "El nombre del producto  no puede tener más de 30 caracteres"
                  : ""
              }
            />
            <br />
            <br />
            <TextField
              label="Costo"
              type="number"
              value={costo}
              onChange={(e) => setcosto(e.target.value)}
              required
              error={costo === "" || costo < 30 || costo > 2500}
              helperText={
                costo === ""
                  ? "El precio no puede estar vacío"
                  : costo < 30
                  ? "El precio no puede costar menos de $30"
                  : costo > 2500
                  ? "El precio no puede costar más de $2500"
                  : ""
              }
            />
            <br />
            <br />
            <TextField
              label="Descripcion"
              value={descripcion || ""}
              onChange={(e) => setdescripcion(e.target.value)}
              required
              error={
                descripcion.length === 0 ||
                descripcion.length < 30 ||
                descripcion.length > 150
              }
              helperText={
                descripcion.length === 0
                  ? "La descripticon del producto no puede estar vacío"
                  : descripcion.length < 30
                  ? "La descripticon del producto debe tener al menos 30 caracteres"
                  : descripcion.length > 150
                  ? "La descripticon del producto no puede tener más de 150 caracteres"
                  : ""
              }
            />
            <br />
            <br />
            <TextField
              fullWidth
              select
              label="Categoría"
              type="text"
              name="categoria"
              onChange={(e) => setcategoria(e.target.value)}
              value={categoria || ""}
              autoComplete="off"
              required
              error={categoria.length === 0}
              helperText={
                categoria.length === 0
                  ? "La categoría del producto no puede estar vacía"
                  : ""
              }
            >
              {categorias.map((cate) => (
                <MenuItem key={cate.value} value={cate.value}>
                  {cate.label}
                </MenuItem>
              ))}
            </TextField>

            <br />
            <br />
            <TextField
              fullWidth
              select
              label="Color"
              type="text"
              name="color"
              onChange={(e) => setcolor(e.target.value)}
              value={color || ""}
              autoComplete="off"
              error={color.length === 0}
              helperText={
                color.length === 0
                  ? "La categoría del producto no puede estar vacía"
                  : ""
              }
            >
              {colores.map((color) => (
                <MenuItem key={color.value} value={color.value}>
                  {color.label}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <br />
            <input
              type="hidden"
              name="id"
              value={idDoc}
              onChange={(e) => setIdoc(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={add ? handleSubmit : actualizarProyecto}
              color="primary"
            >
              {add ? "Agregar" : "Editar"}
            </Button>
          </Collapse>
        </div>
      </div>
    </div>
  );
};