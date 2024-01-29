import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Typography } from '@mui/material';
import {Link as LinkRouter} from 'react-router-dom'
import { TextPrivacy } from '../../views/NoticePrivacy/TextPrivacy';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Typography>
        Acepto los {" "} <Link onClick={handleClickOpen}>términos y condiciones</Link>
      </Typography>
      <Dialog
        maxWidth="lg"
        disableScrollLock
        open={open}
        onClose={handleClose}
        aria-describedby="aviso-de-privacidad"
        aria-labelledby="descripción-aviso-de-privacidad"
      >
        <DialogTitle id="aviso-de-privacidad" align='center'>
          {"Aviso de privacidad"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="descripción-aviso-de-privacidad">
            <TextPrivacy/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} component={LinkRouter} to="/aviso-de-privacidad" aria-label='Ver aviso de privacidad en la sección correspondiente'>Ver</Button>
          <Button onClick={handleClose} autoFocus aria-label='cerrar mensaje de avis ode privacidad'>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}