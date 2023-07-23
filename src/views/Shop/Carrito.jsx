
import React, { useEffect, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import { ShoppingCartRounded } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, useTheme } from '@mui/material';
import { doc, getDoc, updateDoc, setDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseDB";
import { CarritoContext } from '../../context/CarritoContext';
import { useAuth } from "../../context/AuthContext";

const Carrito = () => {
  const { contador, open, abrirDialog, cerrarDialog } = useContext(CarritoContext);
  const theme = useTheme();
  const { user } = useAuth();
  const [sumaNumeros, setSumaNumeros] = useState(contador);

  // const obtenerDatosCarritoYSumar = async () => {
  //   if (user) {
  //     const referencia = doc(db, `carritoUsuario/${user.uid}`);
  //     const docSnap = await getDoc(referencia);
  //     const data = docSnap.exists() ? docSnap.data() : null;
  //     setSumaNumeros(data ? data.total : 0);
  //   }
  // };
  const obtenerDatosCarritoYSumar = async () => {
    if (user) {
      const referencia = doc(db, `carritoUsuario/${user.uid}`);
      // Utilizar onSnapshot para escuchar cambios en el documento del carrito del usuario
      onSnapshot(referencia, (docSnap) => {
        const data = docSnap.exists() ? docSnap.data() : null;
        setSumaNumeros(data ? data.total : 0);
        console.log("Se recibieron datos actualizados del carrito:", data);
      });
     
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
          <DialogContentText>
            Total: {sumaNumeros}
          </DialogContentText>
          {/* Aquí puedes mostrar los productos del carrito si lo deseas */}
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={cerrarDialog}>Cerrar</Button>
          <Button variant='contained' onClick={cerrarDialog} autoFocus>
            Comprar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Carrito;
