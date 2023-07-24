import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography, Container, Grid, Paper, TextField, Button, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TodayIcon from '@mui/icons-material/Today';
import { ShoppingCartRounded, Delete } from '@mui/icons-material';
import { doc, getDoc, updateDoc, setDoc, collection, query, where, onSnapshot, getDocs, FieldValue, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseDB";
import { app } from "../../config/firebase/firebase";
import { CarritoContext } from '../../context/CarritoContext';
import { useAuth } from "../../context/AuthContext";
import * as Icons from '@mui/icons-material';
const Carrito = () => {
  const { contador, open, abrirDialog, cerrarDialog } = useContext(CarritoContext);
  const theme = useTheme();
  const { user } = useAuth();
  const [sumaNumeros, setSumaNumeros] = useState(contador);
  const [carritoData, setCarritoData] = useState([]);
  const [productosData, setProductosData] = useState({});
  const [calle, setCalle] = useState('');
  const [colonia, setColonia] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [numeroInterno, setNumeroInterno] = useState('');
  const [referencias, setReferencias] = useState('');
  const [etapa, setEtapa] = useState(0); // 0: Carrito, 1: Tarjeta, 2: Dirección
  const [tarjeta, setTarjeta] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');
  const [cvv, setCvv] = useState('');
  const [nombre, setNombre] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleToggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFinalizarCompra = () => {
    // Realizar la compra aquí (tus lógicas de compra, actualización de datos, etc.)
    registrarVentas();

    // Volver a la etapa 0 (mostrar productos) después de finalizar la compra
    setEtapa(0);

    // Cerrar el diálogo después de finalizar la compra
    cerrarDialog();
  };

  const handleSiguiente = () => {
    if (etapa === 0) {
      // Verificar que haya productos en el carrito antes de pasar a la siguiente etapa
      if (sumaNumeros !== 0) {
        setEtapa(1);
      }
    } else if (etapa === 1) {
      // Validar la información de la tarjeta antes de pasar a la siguiente etapa
      if (tarjeta !== '') {
        setEtapa(2);
      }
    } else if (etapa === 2) {
      // Validar la información de la dirección antes de pasar a la etapa de confirmación
      if (direccion !== '') {
        setEtapa(3);
      }
    } else if (etapa === 3) {
      // Finalizar la compra (volver a la etapa 0 después)
      handleFinalizarCompra();
    }
  };

  const handleCancelar = () => {
    // Reiniciar las etapas y los campos al presionar el botón "Cancelar"
    setEtapa(0);
    setTarjeta('');
    setDireccion('');
    cerrarDialog();
  };

  const editarCantidad = async (item, valor) => {
    const valorNumerico = parseInt(valor);

    const referencia = doc(db, `carritoUsuario/${user.uid}`);
    // Obtener los datos del carrito del usuario
    const docSnap = await getDoc(referencia);
    const data = docSnap.exists() ? docSnap.data() : null;

    // Obtener la cantidad anterior del producto
    const cantidadAnterior = data && data[item] !== undefined ? data[item] : 0;

    // Calcular la diferencia entre la cantidad anterior y la nueva cantidad
    const diferenciaCantidad = valorNumerico - cantidadAnterior;

    // Actualizar el carrito con la nueva cantidad del producto y el total actualizado
    await updateDoc(referencia, {
      [item]: valorNumerico,
      total: data.total + diferenciaCantidad,
    });
  };

  const registrarVentas = async () => {
    if (user) {
      const ventaRef = collection(db, "ventas");

      // Loop through each product in the carritoData and create a sale record
      for (const [id, item] of carritoData) {
        if (id !== "total" && productosData[id]) {
          const productoData = productosData[id];
          const cantidad = item;

          // Create a sale record for each product
          await addDoc(ventaRef, {
            usuario: user.uid,
            nombreProducto: productoData.nombre,
            cantidadProducto: cantidad,
            costo: productoData.costo,
            costo_total: cantidad * productoData.costo,
            fecha: new Date().toISOString(),
            categoria: productoData.categoria,
            color: productoData.color,
            metodoPago: "tarjeta de crédito"
          });
        }
      }

      // After creating the sale records, remove the carritoUsuario document
      const referenciaCarrito = doc(db, `carritoUsuario/${user.uid}`);
      await deleteDoc(referenciaCarrito);
    }
  };

  const handleEliminar = async (id) => {
    if (user) {
      const referenciaCarrito = doc(db, `carritoUsuario/${user.uid}`);
      const carritoSnapshot = await getDoc(referenciaCarrito);
      const carritoData = carritoSnapshot.exists() ? carritoSnapshot.data() : null;

      if (carritoData && carritoData[id] !== undefined) {
        // Creamos una copia del objeto carritoData para evitar la modificación directa del estado
        const carritoDataActualizado = { ...carritoData };
        delete carritoDataActualizado[id];

        // Actualizamos el carritoUsuario en la base de datos con la nueva data sin la id eliminada
        await setDoc(referenciaCarrito, carritoDataActualizado);
        await updateDoc(referenciaCarrito, {
          total: carritoData.total - carritoData[id], // Sumar 1 al total si ya existe, o crearlo con 1 si aún no existe
        });
      }
    }
  };

  const obtenerDatosCarritoYSumar = async () => {
    if (user) {
      const referenciaCarrito = doc(db, `carritoUsuario/${user.uid}`);
      onSnapshot(referenciaCarrito, (docSnap) => {
        const data = docSnap.exists() ? docSnap.data() : null;
        setSumaNumeros(data ? data.total : 0);
        setCarritoData(data ? Object.entries(data) : []);
      });

      const referenciaProductos = collection(db, "producto");
      const querySnapshot = await getDocs(referenciaProductos);
      const productos = {};
      setNombre(user.email)

      querySnapshot.forEach((doc) => {
        const producto = doc.data();
        productos[doc.id] = producto;
      });

      setProductosData(productos);
    }
  };

  useEffect(() => {
    obtenerDatosCarritoYSumar();
  }, [user]);

  const handleConfirmarProductos = () => {
    setEtapa(3); // Establecemos la etapa en 3 para mostrar el historial y confirmar la compra
  };

  return (
    <>
      <Box
        onClick={abrirDialog}
        sx={{
          cursor: "pointer",
          position: "fixed",
          right: -15,
          zIndex: 1,
          color: 'action.active',
          display: 'flex',
          flexDirection: 'column',
          '& > *': {
            marginBottom: 2,
          },
          '& .MuiBadge-root': {
            marginRight: 4,
          },
        }}
      >
        <Paper elevation={0} sx={{ p: 1, border: `3px solid ${theme.palette.primary.main}`, borderRightColor: "transparent" }}>
          <Badge color="secondary" badgeContent={sumaNumeros}>
            <ShoppingCartRounded />
          </Badge>
        </Paper>
      </Box>

      <Dialog
        fullWidth
        disableScrollLock
        open={open}
        onClose={handleCancelar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Carrito de compras</DialogTitle>
        <DialogContent>
          {etapa === 0 ? (
            sumaNumeros === 0 ? (
              <DialogContentText>No cuentas con ningún producto registrado.</DialogContentText>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Precio Total</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {carritoData.map(([id, item]) => (
                    // Check if the id is not equal to "total" before rendering the row
                    id !== "total" && productosData[id] && (
                      <TableRow key={id}>
                        <TableCell>
                          <img
                            src={productosData[id].url}
                            alt={productosData[id].nombre}
                            style={{ width: "50px", height: "50px" }}
                          />
                        </TableCell>
                        <TableCell>{productosData[id].nombre}</TableCell>
                        <TableCell>{item}</TableCell>
                        <TableCell>{productosData[id].costo}</TableCell>
                        <TableCell>{(item * productosData[id].costo).toFixed(2)}</TableCell>
                        <TableCell>
                          <select value={item} onChange={(e) => editarCantidad(id, e.target.value)}>
                            {[1, 2, 3, 4, 5].map((cantidad) => (
                              <option key={cantidad} value={cantidad}>
                                {cantidad}
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleEliminar(id)}>
                            {/* Utiliza el componente Delete en lugar de DeleteIcon */}
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  ))}
                  <TableRow>
                    <TableCell colSpan={4}></TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>{carritoData.reduce((total, [id, item]) => (id !== "total" ? total + item * productosData[id].costo : total), 0).toFixed(2)}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </tbody>
              </table>
            )
          ) : etapa === 1 ? (
            // Formulario para registrar la tarjeta
            <Container maxWidth="sm">
              <Grid container rowSpacing={1} columnSpacing={1} sx={{ bgcolor: 'background.paper', p: 1 }}>
                <Typography variant="h6" color="primary" sx={{ textAlign: 'center', my: 2 }}>
                  Datos de la tarjeta
                </Typography>

                <TextField
                  label="Nombre"
                  value={nombre || ''}
                  fullWidth
                  sx={{ my: 1 }}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  error={nombre.length === 0 || nombre.length < 5 || nombre.length > 30}
                  helperText={
                    nombre.length === 0
                      ? 'El nombre no puede estar vacío'
                      : nombre.length < 5
                        ? 'El nombre debe tener al menos 5 caracteres'
                        : nombre.length > 30
                          ? 'El nombre no puede tener más de 30 caracteres'
                          : ''
                  }
                  InputProps={{
                    startAdornment: <AccountCircleIcon sx={{ marginRight: '5px' }} />,
                  }}
                />

                <TextField
                  label="No. Tarjeta"
                  sx={{ my: 1 }}
                  value={tarjeta || ''}
                  fullWidth
                  onChange={(e) => setTarjeta(e.target.value)}
                  required
                  error={isNaN(tarjeta) || tarjeta.length !== 16}
                  helperText={
                    isNaN(tarjeta)
                      ? 'El número de tarjeta debe ser un valor numérico'
                      : tarjeta.length !== 16
                        ? 'El número de tarjeta debe tener 16 dígitos'
                        : ''
                  }
                  InputProps={{
                    startAdornment: <CreditCardIcon sx={{ marginRight: '5px' }} />,
                  }}
                />

                <Grid container item rowSpacing={1} columnSpacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      label="Mes"
                      type="number"
                      value={mes}
                      fullWidth
                      onChange={(e) => setMes(e.target.value)}
                      required
                      error={mes === '' || mes <= 0 || mes > 12}
                      helperText={
                        mes === ''
                          ? 'El mes no puede estar vacío'
                          : mes <= 0
                            ? 'El mes no debe ser menor a 1'
                            : mes > 12
                              ? 'El mes no debe ser mayor a 12'
                              : ''
                      }
                      InputProps={{
                        min: 1,
                        max: 12,
                        startAdornment: <CalendarMonthIcon sx={{ marginRight: '5px' }} />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Año"
                      type="number"
                      value={anio}
                      fullWidth
                      onChange={(e) => setAnio(e.target.value)}
                      required
                      error={anio === '' || anio < 2000 || anio > 2050}
                      helperText={
                        anio === ''
                          ? 'El año no puede estar vacío'
                          : anio < 2000
                            ? 'El año no debe ser menor a 2000'
                            : anio > 2050
                              ? 'El año no debe ser mayor a 2050'
                              : ''
                      }
                      InputProps={{
                        startAdornment: <TodayIcon sx={{ marginRight: '5px' }} />,
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  label="CVV"
                  type={showPassword ? 'text' : 'password'}
                  value={cvv}
                  fullWidth
                  sx={{ my: 1 }}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  error={cvv === '' || cvv.length !== 3}
                  helperText={
                    cvv === ''
                      ? 'El CVV no puede estar vacío'
                      : cvv.length !== 3
                        ? 'El CVV debe tener 3 dígitos'
                        : ''
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleToggleShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Container>
          ) : etapa === 2 ? (
            <Container maxWidth="sm">
            <Grid container rowSpacing={1} columnSpacing={1} sx={{ bgcolor: 'background.paper', p: 1 }}>
              <Typography variant="h6" color="primary" sx={{ textAlign: 'center', my: 2 }}>
                Información de envío
              </Typography>
              <Grid item xs={12}>
                <TextField
                  label="Calle"
                  fullWidth
                  value={calle}
                  onChange={(e) => setCalle(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Colonia"
                  fullWidth
                  value={colonia}
                  onChange={(e) => setColonia(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Código Postal"
                  fullWidth
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Número Interno"
                  fullWidth
                  value={numeroInterno}
                  onChange={(e) => setNumeroInterno(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Referencias"
                  fullWidth
                  value={referencias}
                  onChange={(e) => setReferencias(e.target.value)}
                />
              </Grid>
            </Grid>
          </Container>
          ) : etapa === 3 ? (
            // Mostrar el historial y confirmar la compra
            <div>
              <h2>Historial de productos:</h2>
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carritoData.map(([id, item]) => (
                    // Check if the id is not equal to "total" before rendering the row
                    id !== "total" && productosData[id] && (
                      <tr key={id}>
                        <td>{productosData[id].nombre}</td>
                        <td>{item}</td>
                        <td>{(item * productosData[id].costo).toFixed(2)}</td>
                      </tr>
                    )
                  ))}
                  <tr>
                    <td colSpan={2}>Total</td>
                    <td>{carritoData.reduce((total, [id, item]) => (id !== "total" ? total + item * productosData[id].costo : total), 0).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <h2>Información de pago y envío:</h2>
                <p>Tarjeta: {tarjeta}</p>
                <p>Dirección de envío: {direccion}</p>
              </div>
            </div>
          ) : null}
        </DialogContent>
        <DialogActions>
          {/* Mostrar botones de acuerdo a la etapa actual */}
          {etapa === 0 && (
            <>
              <Button variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              {sumaNumeros > 0 && (
                <Button variant="contained" onClick={() => setEtapa(etapa + 1)}>
                  Siguiente
                </Button>
              )}
            </>
          )}
          {etapa === 1 && (
            <>
              <Button variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button variant="outlined" onClick={() => setEtapa(etapa - 1)}>
                Anterior
              </Button>
              <Button variant="contained" onClick={() => setEtapa(etapa + 1)}>
                Siguiente
              </Button>
            </>
          )}
          {etapa === 2 && (
            <>
              <Button variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button variant="outlined" onClick={() => setEtapa(etapa - 1)}>
                Anterior
              </Button>
              <Button variant="contained" onClick={() => setEtapa(etapa + 1)}>
                Siguiente
              </Button>
            </>
          )}
          {etapa === 3 && (
            <>
              <Button variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button variant="outlined" onClick={() => setEtapa(etapa - 1)}>
                Anterior
              </Button>
              <Button variant="contained" onClick={handleFinalizarCompra}>
                Finalizar Compra
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Carrito;
