  import React, { useEffect, useState, useContext } from 'react';
  import Box from '@mui/material/Box';
  import Badge from '@mui/material/Badge';
  import Button from '@mui/material/Button';
  import { ShoppingCartRounded } from '@mui/icons-material';
  import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, useTheme } from '@mui/material';
  import { doc, getDoc, updateDoc, setDoc, collection, query, where, onSnapshot, getDocs, FieldValue,addDoc,deleteDoc } from "firebase/firestore";

  import { db } from "../../config/firebase/firebaseDB";
  import { app } from "../../config/firebase/firebase";
  import { CarritoContext } from '../../context/CarritoContext';
  import { useAuth } from "../../context/AuthContext";

  const Carrito = () => {
    const { contador, open, abrirDialog, cerrarDialog } = useContext(CarritoContext);
    const theme = useTheme();
    const { user } = useAuth();
    const [sumaNumeros, setSumaNumeros] = useState(contador);
    const [carritoData, setCarritoData] = useState([]);
    const [productosData, setProductosData] = useState({});
  
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
            await addDoc(ventaRef,  {
              usuario: user.uid,
              nombreProducto: productoData.nombre,
              cantidadProducto: cantidad,
              costo: productoData.costo,
              costo_total: cantidad * productoData.costo,
              fecha: new Date().toISOString(),
              categoria:productoData.categoria,
              color:productoData.color,
              metodoPago:"tarjeta de crédito"
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
            total: carritoData.total-carritoData[id], // Sumar 1 al total si ya existe, o crearlo con 1 si aún no existe
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
          onClose={cerrarDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Carrito de compras
          </DialogTitle>
          <DialogContent>
          {sumaNumeros === 0 ? (
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
                    <tr key={id}>
                      <td>
                        <img
                          src={productosData[id].url}
                          alt={productosData[id].nombre}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{productosData[id].nombre}</td>
                      <td>{item}</td>
                      <td>{productosData[id].costo}</td>
                      <td>{(item * productosData[id].costo).toFixed(2)}</td>
                      <td>
                        <select value={item} onChange={(e) => editarCantidad(id, e.target.value)}>
                          {[1, 2, 3, 4, 5].map((cantidad) => (
                            <option key={cantidad} value={cantidad}>
                              {cantidad}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <button onClick={() => handleEliminar(id)}>
                          {/* Add the icon for "Eliminar" here */}
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                ))}
                <tr>
                  <td colSpan={4}></td>
                  <td>Total</td>
                  <td>{carritoData.reduce((total, [id, item]) => (id !== "total" ? total + item * productosData[id].costo : total), 0).toFixed(2)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={cerrarDialog}>Cerrar</Button>
          {sumaNumeros !== 0 && (
            <Button variant='contained' onClick={registrarVentas} autoFocus>
              Comprar
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Carrito;