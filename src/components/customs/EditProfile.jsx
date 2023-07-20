import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React, {useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

export const EditProfile = ({userImage}) => {

    // abrir el dialogo
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
        <Button variant="contained" startIcon={<EditIcon/>} onClick={handleClickOpen}>Editar Perfil</Button>
        <Dialog
            disableScrollLock
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Editar Perfil
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                    position: 'absolute',
                    right: 8,
                    top: 13,
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ width: {md: 600, sm: 500, xs: 250}}}>
                <DialogContentText id="alert-dialog-description">
                    Foto de perfil <Button variant='text' sx={{position: "absolute", right: 8}}>Editar</Button>
                </DialogContentText>
            </DialogContent>
            <DialogContent>
                <Box sx={{ m: 1, display: "flex", justifyContent: "center"}}>
                    <Box
                        component="img"
                        src={userImage} 
                        alt="Perfil" 
                        sx={{width: 168, height: 168, borderRadius: "50%", border: "2px solid #fff"}}
                    />
                </Box>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={handleClose} fullWidth variant='contained'>Ver configuración</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
