import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, Typography } from '@mui/material';
import {Link as LinkRouter} from 'react-router-dom'
import { AvisoDePrivacidad } from '../../views/NoticePrivacy/AvisoDePrivacidad';
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
    <div>
      
      <Typography>
        Acepto los {" "} <Link onClick={handleClickOpen}>términos y condiciones</Link>
      </Typography>
      <Dialog
        maxWidth="lg"
        disableScrollLock
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align='center'>
          {"Aviso de privacidad"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextPrivacy/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} component={LinkRouter} to="/aviso-de-privacidad">Ver</Button>
          <Button onClick={handleClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}