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
import { Paper, useTheme } from '@mui/material';

const Carrito = () => {
  const { contador } = useContext(CarritoContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
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
  );
};

export default Carrito;
