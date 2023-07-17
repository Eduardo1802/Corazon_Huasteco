// Carrito.js
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import { CarritoContext } from '../../context/CarritoContext';
import { ShoppingCartRounded } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, useTheme } from '@mui/material';

const Carrito = () => {
  const { contador, open, abrirDialog, cerrarDialog } = useContext(CarritoContext);
  const theme = useTheme();

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
        <Paper elevation={0} sx={{p:1, border: `3px solid ${theme.palette.primary.main}`, borderRightColor: "transparent"}}>
          <Badge color="secondary" badgeContent={contador}>
            <ShoppingCartRounded />
          </Badge>
          {/* <ButtonGroup>
            <Button aria-label="reduce" onClick={disminuirContador}>
            <RemoveIcon fontSize="small" />
            </Button>
            <Button aria-label="increase" onClick={aumentarContador}>
            <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup> */}
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
          <DialogContentText id="alert-dialog-description">
            Item 1
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Item 2
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Item 3
          </DialogContentText>
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
