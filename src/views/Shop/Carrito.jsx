import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography, Container, Grid, Paper, TextField, Button, IconButton, InputAdornment, TableCell, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TodayIcon from '@mui/icons-material/Today';
import { ShoppingCartRounded, Delete } from '@mui/icons-material';
import { doc, getDoc, updateDoc, setDoc, collection, onSnapshot, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseDB";
import { CarritoContext } from '../../context/CarritoContext';
import { useAuth } from "../../context/AuthContext";

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
  const [numeroExterno, setNumeroExterno] = useState('');
  const [referencias, setReferencias] = useState('');
  const [etapa, setEtapa] = useState(0);  // 0: Carrito, 1: Tarjeta, 2: Dirección
  const [tarjeta, setTarjeta] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');
  const [cvv, setCvv] = useState('');
  const [nombre, setNombre] = useState('');
  const [infoUsuario, setinfoUsuario] = useState([])
  const [showPassword, setShowPassword] = useState(false);
  const validateCalle = (value) => {
    // The first "calle" should have at least 1 digit or 3 letters and a maximum of 30 characters.
    return /^(?=\d{1,30}$)|^(?=\D{3,30}$)/.test(value);
  };

  const validateColonia = (value) => {
    // "Colonia" should only contain letters and spaces and be between 3 and 30 characters long.
    return /^[A-Za-z\s]{3,30}$/.test(value);
  };
  


  const validateNumeroExterno = (value) => {
    // "Código Postal" should be exactly 4 digits.
    return /^(?=\d{1,5}$)|^(?=\D{2}$)/.test(value);
  };

  const validateNumeroInterno = (value) => {
    
    return /^(?=\d{1,5}$)|^(?=\D{2}$)/.test(value);
  };

  const validateReferencias = (value) => {
    // "Referencias" should be between 3 and 100 characters long.
    return /^.{3,100}$/.test(value);
  };
  const handleToggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [formDataValid, setFormDataValid] = useState(false);

  // Step 2: Update validation logic for each TextField
  const validateForm = () => {
    const isNombreValid = nombre.length > 0 && nombre.length >= 5 && nombre.length <= 30;
    const isTarjetaValid = !isNaN(tarjeta) && tarjeta.length === 16;
    const isMesValid = mes !== '' && parseInt(mes) > 0 && parseInt(mes) <= 12;
    const isAnioValid = anio !== '' && parseInt(anio) >= 2000 && parseInt(anio) <= 2050;
    const isCvvValid = cvv !== '' && cvv.length === 3;

    // Set the formDataValid state based on all fields' validity
    setFormDataValid(isNombreValid && isTarjetaValid && isMesValid && isAnioValid && isCvvValid);

    return isNombreValid && isTarjetaValid && isMesValid && isAnioValid && isCvvValid;
  };

  // Step 3: Modify registrarTarjeta function to check form data validity before advancing
  const registrarTarjeta = async () => {
    const isFormValid = validateForm();
  
    if (isFormValid) {
      setEtapa(etapa + 1);
      const referencia = doc(db, `usuarios/${user.uid}`);
  
      // Obtener los datos del carrito del usuario
      const docSnap = await getDoc(referencia);
      const data = docSnap.exists() ? docSnap.data() : null;
  
      // Verificar si el número de tarjeta ha cambiado
      if (data && data.numeroTarjeta !== tarjeta) {
        await updateDoc(referencia, {
          numeroTarjeta: tarjeta
        });
        console.log('Número de tarjeta actualizado con éxito.');
      } else {
        console.log('El número de tarjeta no ha cambiado. No se realizaron cambios.');
      }
    } else {
      // Add any logic to handle invalid form data if needed
      console.log('Form data is not valid. Please check the fields.');
    }
  };
  const validateFormDireccion = () => {
    const isCalleValid = validateCalle(calle);
    const isColoniaValid = validateColonia(colonia);
    const isNumeroInternoValid = validateNumeroInterno(numeroInterno);
    const isNumeroExternoValid = validateNumeroExterno(numeroExterno);
    const isReferenciasValid = validateReferencias(referencias);
  
    // Set the formDataValid state based on all fields' validity
    return (
      isCalleValid &&
      isColoniaValid &&
      isNumeroInternoValid &&
      isNumeroExternoValid &&
      isReferenciasValid
    );
  };
  
  const registrarDireccion = async () => {
    const isFormValid = validateFormDireccion();
  
    if (isFormValid) {
      setEtapa(etapa + 1);
      const referencia = doc(db, `usuarios/${user.uid}`);
  
      // Obtener los datos del carrito del usuario
      const docSnap = await getDoc(referencia);
      const data = docSnap.exists() ? docSnap.data() : null;
  
      // Verificar si hay cambios en los datos de envío o en el número de tarjeta
      const direccionActualizada =
        data.calle !== calle ||
        data.colonia !== colonia ||
        data.numeroInterno !== numeroInterno ||
        data.numeroExterno !== numeroExterno ||
        data.referencias !== referencias;
  
  
      if (direccionActualizada) {
        await updateDoc(referencia, {
          calle: calle,
          colonia: colonia,
          numeroInterno: numeroInterno,
          numeroExterno: numeroExterno,
          referencias: referencias,
        });
        console.log('Información de envío y/o número de tarjeta actualizados con éxito.');
      } else {
        console.log('No se realizaron cambios en la información de envío ni en el número de tarjeta.');
      }
    } else {
      // Add any logic to handle invalid form data if needed
      console.log('Form data is not valid. Please check the fields.');
    }
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
      const ventaRef2 = collection(db, "ventasPendiendes");

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
          await addDoc(ventaRef2, {
            usuario: user.uid,
            nombreProducto: productoData.nombre,
            cantidadProducto: cantidad,
            costo: productoData.costo,
            costo_total: cantidad * productoData.costo,
            fecha: new Date().toISOString(),
            categoria: productoData.categoria,
            color: productoData.color,
            tarjeta:tarjeta,
            metodoPago: "tarjeta de crédito",
            calle: calle,
            colonia: colonia,
            numeroInterno: numeroInterno,
            numeroExterno: numeroExterno,
            referencias: referencias,
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
      const referenciaUsuario = doc(db, `usuarios/${user.uid}`);
      onSnapshot(referenciaUsuario, (docSnap) => {
        const data = docSnap.exists() ? docSnap.data() : null;
        setTarjeta(data ? data.numeroTarjeta : '');
        setCalle(data ? data.calle : '')
        setColonia(data ? data.colonia : '')
        setNumeroExterno(data ? data.numeroExterno : '')
        setNumeroInterno(data ? data.numeroInterno : '')
        setReferencias(data ? data.referencias : '')
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
    if (Object.keys(productosData).length > 0) { // Check if productosData is not empty
      // Your existing code for calculating the total cost of products goes here
    } else {
      // Handle the case when productosData is empty or undefined
      console.log('No product data available.');
    }
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
          <Badge color="error" badgeContent={sumaNumeros}>
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
        aria-describedby="Carrito de compras"
      >
        <DialogTitle id="alert-dialog-title">Carrito de compras</DialogTitle>
        {productosData ? (
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
                          <TableCell>{productosData[id].costo || 0}</TableCell>
                          <TableCell>{(item * productosData[id].costo).toFixed(2)}</TableCell>
                          <TableCell>
                          <div id="labelCantidad" style={{ display: 'none' }}>Selecciona la cantidad:</div>
                          <select aria-labelledby="labelCantidad" aria-label="seleccione la cantidad" value={item} onChange={(e) => editarCantidad(id, e.target.value)}>
                            {[1, 2, 3, 4, 5].map((cantidad) => (
                              <option key={cantidad} value={cantidad}>
                                {cantidad}
                              </option>
                            ))}
                          </select>
                          </TableCell>
                          <TableCell>
                            <IconButton aria-label='eliminar producto del carrito de compras' onClick={() => handleEliminar(id)}>
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
                      <TableCell>{carritoData.reduce((total, [id, item]) => (id !== "total" ? total + item * (productosData[id]?.costo || 0) : total), 0).toFixed(2)}</TableCell>

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
                            aria-label="mostrar u ocultar codigo de seguridad"
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
                    error={!validateCalle(calle)}
                    helperText={!validateCalle(calle) && 'La Calle debe tener al menos 1 dígito o 3 letras, y un máximo de 30 caracteres.'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Colonia"
                    fullWidth
                    value={colonia}
                    onChange={(e) => setColonia(e.target.value)}
                    required
                    error={!validateColonia(colonia)}
                    helperText={!validateColonia(colonia) && 'La Colonia debe contener solo letras y tener entre 3 y 30 caracteres.'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Número Interno"
                    fullWidth
                    value={numeroInterno}
                    onChange={(e) => setNumeroInterno(e.target.value)}
                    required
                    error={!validateNumeroInterno(numeroInterno)}
                    helperText={!validateNumeroInterno(numeroInterno) && 'El Número Interno debe tenter minimo 1 numero a 5, de no haber numero colocar SN.'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Número Externo"
                    fullWidth
                    value={numeroExterno}
                    onChange={(e) => setNumeroExterno(e.target.value)}
                    required
                    error={!validateNumeroExterno(numeroExterno)}
                    helperText={!validateNumeroExterno(numeroExterno) && 'El Número externo debe tenter minimo 1 numero a 5, de no haber numero colocar SN  .'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Referencias"
                    fullWidth
                    value={referencias}
                    onChange={(e) => setReferencias(e.target.value)}
                    required
                    error={!validateReferencias(referencias)}
                    helperText={!validateReferencias(referencias) && 'Las Referencias deben tener entre 3 y 100 caracteres.'}
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
                  <p>Dirección de envío: calle {calle} colonia {colonia} No. {numeroInterno}</p>
                  <p>Refernecias: {referencias}</p>
                </div>
              </div>
            ) : null}
          </DialogContent>
        ) : (
          <DialogContent>
            <DialogContentText>Loading...</DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          {/* Mostrar botones de acuerdo a la etapa actual */}
          {etapa === 0 && (
            <>
              <Button aria-label='cancelar compra y cerrar carrito' variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              {sumaNumeros > 0 && (
                <Button aria-label='siguiente paso para introducir los datos de la tarjeta' variant="contained" onClick={() => setEtapa(etapa + 1)}>
                  Siguiente
                </Button>
              )}
            </>
          )}
          {etapa === 1 && (
            <>
              <Button aria-label='cancelar y cerrar carrito de compras' variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button aria-label='vover al paso anterior' variant="outlined" onClick={() => setEtapa(etapa - 1)}>
                Anterior
              </Button>
              <Button aria-label='ir al siguiente paso: información de envio' variant="contained" onClick={() => registrarTarjeta()}>
                Siguiente
              </Button>
            </>
          )}
          {etapa === 2 && (
            <>
              <Button aria-label='cancelar proceso y cerrar carrito' variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button aria-label='volver al paso anterior' variant="outlined" onClick={() => setEtapa(etapa - 1)}>
                Anterior
              </Button>
              <Button aria-label='ir al siguiente paso: vista final del pedido' variant="contained" onClick={() => registrarDireccion()}>
                Siguiente
              </Button>
            </>
          )}
          {etapa === 3 && (
            <>
              <Button aria-label='cancelar compra y cerrar carrito' variant="outlined" onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button aria-label='volver al paso anterior' variant="outlined" onClick={() => setEtapa(etapa - 1)}>
                Anterior
              </Button>
              <Button aria-label='finalizar compra de los productos' variant="contained" onClick={handleFinalizarCompra}>
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
