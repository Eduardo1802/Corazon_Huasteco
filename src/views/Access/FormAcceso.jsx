import React, { useState }           from 'react'
import { Link, useNavigate }         from 'react-router-dom'; 
import { Box, Button, Container, Divider, Grid, IconButton, InputAdornment, Paper, Snackbar, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import LoginIcon                     from '@mui/icons-material/Login';
import DeleteIcon                    from '@mui/icons-material/Delete';
import MuiAlert                      from '@mui/material/Alert';
import {Form}                        from "semantic-ui-react"  
import { usePassword, handleMouseDownPassword } from '../../context/UsePassword';
import {useAccessFom}                from "./useAccessForm"
import { useAuth }                   from '../../context/AuthContext';
import SimpleBackdrop                from '../../components/customs/SimpleBackDrop';
import GoogleIcon                    from "../../assets/img/app/iconGoogleV2.svg"

export const FormAcceso = () => {
    // muestra la contraseña
    const [showPassword, handleClickShowPassword] = usePassword(false);
    // captura de errores
    const [error, setError] = useState("");
    // loading animation
    const [open, setOpen] = useState(false);
    // alerta y variante de la alerta
    const [variant, setVariant] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    // auth context y navigate
    const {loginWithGoogle} = useAuth();
    const navigate = useNavigate();
    // validaciones y funcionamiento del formulario
    const formik = useAccessFom({ setError, open, setOpen, setSnackbarOpen, setVariant })
    // google signin
    const handleGoogleSignin = async() => {
        try{
            setOpen(true);
            await loginWithGoogle();
            navigate("/user/consultor");
            setOpen(false);
        }catch(error){
            setVariant("error");
            setOpen(true);
            setError("Se ha producido un error al iniciar sesión con Google, intenta de nuevo");
            setOpen(false);
            setSnackbarOpen(true);
        }
    }

  return (
    <Container maxWidth="sm">
        <Paper sx={{p:2}} elevation={0}>
            <Typography variant="h4" color="primary" textAlign='center' my={3}>Inicia sesión en Corazón Huasteco</Typography>
            {/* mensajes */}
            <SimpleBackdrop open={open}/>{/*alerta y loading*/}
            <Snackbar
                aria-label={error}
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: "center" }}
            >
                <MuiAlert elevation={6} variant="filled" severity={variant ? variant : "info"}>
                    {error}
                </MuiAlert>
            </Snackbar>
            
            <Grid container spacing={1}>
                <Grid item xs >
                    <Button  type='button' fullWidth variant="outlined" aria-label='iniciar sesión con google' onClick={handleGoogleSignin} startIcon={<img height="25rem" alt='googleIcon' src={GoogleIcon}/>}
                        sx={{backgroundColor: "#efeaed",textTransform: "none",borderRadius: "20rem",'&:hover': { backgroundColor: "#eae8e9"}}} 
                    >
                        Iniciar sesión con Google
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{my:1}}>o</Divider>

            {/* formulario */}
            <Box component={Form} onSubmit={formik.handleSubmit} 
                sx={{
                    '& > :not(style)': { my:{md:1, sm:0.75, xs:0.50} }
                }}
            >       
                {/* CORREO */}
                <TextField component={Form.Input}
                    fullWidth
                    label="Correo electronico"
                    type='text' 
                    name="email" 
                    onChange={formik.handleChange} 
                    error={formik.errors.email ? true : false}
                    helperText={formik.errors.email}
                    value={formik.values.email}
                    autoComplete="off"
                />

                {/* CONTRASEÑA */}
                <TextField component={Form.Input}
                    fullWidth
                    label="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    name="password" 
                    onChange={formik.handleChange} 
                    error={formik.errors.password ? true : false}
                    helperText={formik.errors.password}
                    value={formik.values.password}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="mostrar u ocultar contraseña"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />

                {/* BOTONES */}
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} >
                        <Button type='submit' fullWidth variant="contained" aria-label='entrar' endIcon={<LoginIcon/>}>
                        Entrar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Button type='button' fullWidth variant="outlined" aria-label='limpiar formulario' onClick={formik.handleReset} endIcon={<DeleteIcon/>}>
                        Limpiar 
                        </Button>
                    </Grid>
                </Grid>

                {/* enlaces */}
                <Grid container spacing={1}>
                    <Grid item xs >
                        <Typography textAlign="center" variant='body2'>¿Sin cuenta? <Link to="/registro">registrate</Link></Typography>
                    </Grid>
                    <Grid item xs >
                        <Typography textAlign="center" variant="body2"><Link to="/acceso/restaurar-pass">Restablecer</Link></Typography>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    </Container>
  )
}
