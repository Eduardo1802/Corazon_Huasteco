import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Grid,
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
  Paper,
  Toolbar,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import { app } from "../../../../config/firebase/firebase";
import firebase from "../../../../config/firebase/firebaseDB";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import { categorias, colores, tipos_productos } from "./optionListRegistro";
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Form } from "semantic-ui-react";
import { async } from "q";
import { set } from "lodash";
import { setUserLogHandler } from "@firebase/logger";
import { useAuth } from "../../../../context/AuthContext";

export const AdminProductos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [estado, setEstado] = useState(false);
  const [add, setAdd] = useState("");
  const [tablaProyectos, setTablaProyectos] = useState([]);
  const [open, setOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("");
  const [archivoUrl, setArchivoUrl] = useState("");
  const [nombreProducto, setnombreProducto] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [categoria, setcategoria] = useState("");
  const [color, setcolor] = useState("");
  const [costo, setcosto] = useState("");
  const [costot, setcostot] = useState("");
  const [idDoc, setIdoc] = useState("");
  const [archivo, setArchivo] = useState("");
  const [error, setError] = useState("");
  const [variant, setVariant] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [cantidad, setcantidad] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const { logout, user } = useAuth();
  const [costoTotal, setCostoTotal] = useState("0.00");
  
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value.toString().toUpperCase());
    console.log(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = tablaProyectos.filter((elemento) => {
      return elemento.data().nombre.includes(terminoBusqueda);
    });
    setProyectos(
      resultadoBusqueda.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  const handleSearch = async () => {
    try {
      console.log(tipo);
      if (tipo === "Todos" || tipo === "") {
        obtenerInfo();
      } else {
        const docList = await app.firestore().collection("producto").get();
        const info_prductos = docList.docs.filter(
          (doc) => doc.data().categoria === tipo
        );
        setProyectos(info_prductos.map((doc) => doc.data()));
      }
    } catch (error) {
      console.error(error);
    }
  };
  // Obtener datos de Firebase al cargar la página
  useEffect(() => {
    obtenerInfo();
  }, []);

  const obtenerInfo = async () => {
    const docList = await app
      .firestore()
      .collection("producto")
      .orderBy("categoria", "desc")
      .get();
    setTablaProyectos(docList.docs.map((doc) => doc));
    setProyectos(docList.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

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
        border: "1px solid #ccc",
        color: "inherit",
        textAlign: "center",
      },
    },
  };
  const realizarCompra = async (e) => {
    e.preventDefault();
  
    const coleccionRef = app.firestore().collection("ventas");
    const fechaActual = new Date();
  
    for (let i = 0; i < 15; i++) {
      const cantidadAleatoria = Math.floor(Math.random() * 4) + 1;
      const costoTotalAleatorio = calcularCostoTotal(cantidadAleatoria);
  
      await coleccionRef.doc().set({
        fecha: fechaActual,
        usuario: user.uid,
        nombreProducto: nombreProducto,
        categoria: categoria,
        color: color,
        costoUnitario: costo,
        cantidadProducto: cantidadAleatoria,
        costo_total: costoTotalAleatorio,
        metodoPago: "tarjeta de credito",
      });
    }
  
    setEliminar(false);
  };
  
  const calcularCostoTotal = (cantidad) => {
    const cantidadNum = parseFloat(cantidad);
    const costoNum = parseFloat(costo);
    const resultado = (cantidadNum * costoNum).toFixed(2);
  
    if (isNaN(resultado)) {
      return 0;
    } else {
      return resultado;
    }
  };
  
  useEffect(() => {
    calcularCostoTotal(cantidad); // Llamada inicial para el valor original de cantidad
  }, [cantidad]);
  

  // Eliminar un proyecto por su ID
  const eliminarProyecto = async (id) => {
    // const data = await app.firestore().collection("producto").doc(id).get();
    // await app.firestore().collection("producto").doc(id).delete();
    // const referencia = doc(db, `bajaProductos/${id}`);
    // await getDoc(referencia);
    // setDoc(referencia, {
    //   name: data.data().nombre,
    //   categoria: data.data().categoria,
    //   color: data.data().color,
    //   costo: data.data().costo,
    //   descripcion: data.data().descripcion,
    //   url: data.data().url,
    //   cantidad: data.data(),
    // });
    // obtenerInfo();
    // setVariant("info");
    // setError(`El produto ${data.data().nombre} fue eliminado`);
    // setSnackbarOpen(true);
    reset();
    setEliminar(true);
    const proyecto = proyectos.find((proyecto) => proyecto.id === id);
    console.log("proyecto seleccionado:", proyecto);

    setArchivoUrl(proyecto.url);
    setnombreProducto(proyecto.nombre);
    setdescripcion(proyecto.descripcion);
    setcategoria(proyecto.categoria);
    setcolor(proyecto.color);
    setcosto(proyecto.costo);
    setcantidad(proyecto.cantidad);
    setIdoc(id);
  };

  const reset = () => {
    setnombreProducto("");
    setdescripcion("");
    setcategoria("");
    setcolor("");
    setcosto("");
    setArchivo(null);
    setArchivoUrl("");
    setcantidad("");
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
    if (!cantidad) return;

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
      cantidad: cantidad,
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
    setcantidad(proyecto.cantidad);
    setIdoc(id);
  };

  const actualizarProyecto = async (e) => {
    const documentRef = doc(db, `producto/${idDoc}`);
    if (!nombreProducto) return;
    if (!costo) return;
    if (!descripcion) return;
    if (!categoria) return;
    if (!color) return;
    if (!cantidad) return;
    if (archivoUrl === null) {
      await updateDoc(documentRef, {
        nombre: nombreProducto,
        descripcion: descripcion,
        categoria: categoria,
        color: color,
        costo: costo,
        cantidad: cantidad,
      });
    } else {
      await updateDoc(documentRef, {
        nombre: nombreProducto,
        url: archivoUrl,
        descripcion: descripcion,
        categoria: categoria,
        color: color,
        costo: costo,
        cantidad: cantidad,
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

  return (
    <div>
      <SimpleBackdrop open={open} />
      {/* Contenido */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ bgcolor: "background.paper", p: 1 }}
      >
        {/* B U S C A D O R 1 */}
        <Grid item xs={12}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
                value={busqueda}
                onChange={handleChange}
              />
            </Search>
          </Toolbar>
        </Grid>

        {/* B U S C A D O R 2 -- FIltros*/}
        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Categoria"
            type="text"
            name="categoria"
            onChange={(e) => setTipo(e.target.value)}
            value={tipo || ""}
            autoComplete="off"
          >
            {tipos_productos.map((cate) => (
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
      {/* TABLA */}
      <Paper sx={{ width: "100%" }}>
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
          <TableContainer
            sx={{ maxHeight: 1000, backgroundColor: "#E0E0E0", flex: "3" }}
          >
            <Table stickyHeader aria-label="sticky table" sx={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Núm</TableCell>
                  <TableCell>Imagen</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell>Categoría</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell colSpan={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={crear}
                      sx={{ color: "black", background: "#E0E0E0" }}
                      startIcon={
                        estado ? <CloseIcon /> : <AddCircleOutlineIcon />
                      }
                    >
                      {estado ? "Cerrar" : "Agregar"}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {proyectos.map((proyecto, index) => (
                  <TableRow key={proyecto.id}>
                    <TableCell>{index + 1}</TableCell>
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
                    <TableCell>{proyecto.cantidad}</TableCell>
                    <TableCell>
                      <Button
                        type="submit"
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => editarProyecto(proyecto.id)}
                        color="primary"
                      >
                        Editar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<DeleteOutlineIcon />}
                        onClick={() => {
                          // const confirmar = window.confirm(
                          //   `¿Estás seguro de que quieres eliminar el producto ${proyecto.nombre}?`
                          // );
                          //if (confirmar) {
                          eliminarProyecto(proyecto.id);
                          //}
                        }}
                      >
                        Comprar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ flex: "1", marginLeft: "20px" }}>
            <Collapse in={estado}>
              <Typography
                variant="h4"
                color="#FFFFFF"
                sx={{
                  backgroundColor: "primary.main",
                  textAlign: "center",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                {add ? "Agregar" : "Editar"} Producto
              </Typography>
              <input type="file" onChange={archivoHandler} required />
              <img
                src={archivoUrl}
                style={{ maxWidth: "100%" }}
                alt="producto"
              />

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
                label="Cantidad"
                type="number"
                value={cantidad || ""}
                onChange={(e) => setcantidad(e.target.value)}
                required
                error={
                  cantidad.length === 0 ||
                  parseInt(cantidad) === 0 ||
                  parseInt(cantidad) > 999
                }
                helperText={
                  cantidad.length === 0
                    ? "La cantidad no puede estar vacía"
                    : parseInt(cantidad) === 0
                    ? "La cantidad no puede ser cero"
                    : parseInt(cantidad) > 999
                    ? "La cantidad no puede ser mayor a 999"
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
                    ? "La descripticon del producto no puede estar vacio"
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
                fullWidth
                onClick={add ? handleSubmit : actualizarProyecto}
                sx={{ marginBottom: "15px" }}
                color="primary"
              >
                {add ? "Agregar" : "Editar"}
              </Button>
            </Collapse>
          </div>
          <div style={{ flex: "1", marginLeft: "20px" }}>
            <Collapse in={eliminar}>
              <Typography
                variant="h4"
                color="#FFFFFF"
                sx={{
                  backgroundColor: "primary.main",
                  textAlign: "center",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                Compar Producto
              </Typography>
              <input type="file" onChange={archivoHandler} required />
              <img
                src={archivoUrl}
                style={{ maxWidth: "100%" }}
                alt="producto"
              />

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
                label="Cantidad"
                type="number"
                value={cantidad || ""}
                onChange={(e) => setcantidad(e.target.value)}
              />
              <br />
              <br />
              <TextField
                label="Costo unitario"
                type="number"
                value={costo || ""}
                onChange={(e) => setcosto(e.target.value)}
                required
              />
              <TextField
                label="Costo total"
                type="number"
                value={costoTotal}
                required
              />
              <input
                type="hidden"
                name="id"
                value={idDoc}
                onChange={(e) => setIdoc(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                onClick={realizarCompra}
                sx={{ marginBottom: "15px" }}
                color="primary"
              >
                comprar
              </Button>
            </Collapse>
          </div>
        </div>
      </Paper>
    </div>
  );
};

// DISEÑOS DEL BUSCADOR
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
})); //FIN DE DISEÑO DE BUSCADOR
