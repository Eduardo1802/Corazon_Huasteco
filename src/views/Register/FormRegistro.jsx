import React, { useState, useEffect } from "react";
import axios from "axios";
// material components
import { Button, Collapse, Container, Grid, Paper, Box, Typography, TextField, MenuItem, IconButton, InputAdornment, Checkbox, FormControlLabel } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EditIcon from '@mui/icons-material/Edit';

// react router components
import { Link } from "react-router-dom";
// semantic ui
import { Form } from "semantic-ui-react";
// show pass hook
import {
  usePassword,
  handleMouseDownPassword,
} from "../../context/UsePassword";
// form logic  validation
import { useFormikConfig } from "./useFormikConfig";
// aditional components
import BasicAlerts from "../../components/customs/BasicAlerts";
import SimpleBackdrop from "../../components/customs/SimpleBackDrop";
// options
import { sexos, tipos, secreta } from "./optionListRegistro";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AlertDialog from "../../components/customs/AlertDialog";

export const FormRegistro = () => {
  const [email, setEmail] = useState("");

  // muestra la contraseña
  const [showPassword, handleClickShowPassword] = usePassword(false);
  // captura de errores
  const [error, setError] = useState("");
  // loading animation
  const [open, setOpen] = useState(false);

  //   validaciones               -- con muestra de errores y estado de carga
  const formik = useFormikConfig({ setError, open, setOpen });
  // eslint-disable-next-line
  const [isEmailValid, setIsEmailValid] = useState(null);
  // eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState("");
  const [estado, setEstado] = useState(false);
  const [mensaje, setMsj] = useState("");
  // eslint-disable-next-line
  const recibir = (event) => {
    setEmail(event.target.value);
  };
  const [variant, setVariant] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [cp, setCp] = useState("");
  const [result, setResult] = useState(" ");
  const [est, setEst] = useState("");
  const [color, setColor] = useState("");
  const editar = () => {
    setEstado(false);
  };
  const validar = async (event) => {
    event.preventDefault();
    if (!email) {
      setVariant("warning");
      setError("Por favor ingresa un correo electrónico");
      setSnackbarOpen(true);
      return;
    }
    try {
      setIsEmailValid(false); // initialize to false
      const response = await axios.get(
        `https://api.hunter.io/v2/email-verifier?email=${email}&domain_search=uthh.edu.mx&api_key=b7c17eb8a0f0ee28d6606f2677710cd1bf7f1bc0`
      );
      const isValid = response.data.data.result === "deliverable";
      setIsEmailValid(isValid);
      setErrorMessage("");
      if (isValid) {
        setVariant("info");
        setError("Tu correo es real, procede con el registro");
        setSnackbarOpen(true);
        setEstado(true);
      } else {
        setVariant("error");
        setError("Tu correo no es real, ingresa uno existente para continuar");
        setSnackbarOpen(true);
        setEstado(false);
        setEmail("");
      }
    } catch (error) {
      setVariant("warning");
      setError('Tu "correo" tiene un formato incorrecto');
      setSnackbarOpen(true);
      setEmail("");
    }
  };
  const codigoPostal = async () => {
    if (cp.length === 5) {
      const response = await fetch(`https://api.zippopotam.us/mx/${cp}`);
      const data = await response.json();
      setResult(data.places[0]);
    } else {
      setResult(null);
      setEst(""); // Restablece el valor del estado est a una cadena vacía
      setMsj("El codigo postal no existe");
    }
  };

  useEffect(() => {
    if (cp) {
      codigoPostal();
    }
    if (result && result.state) {
      setEst(result.state);
      setMsj("");
      formik.setFieldValue("state", result.state);
      setColor("default");
    } else {
      setEst("");
      setMsj("El codigo postal no existe");
      formik.setFieldValue("state", ""); // Restablece el valor de formik.values.state a una cadena vacía
      setColor("error");
    }
    // eslint-disable-next-line
  }, [cp, result]);

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 2 }} elevation={0}>
        <Typography
          variant="h5"
          color="primary.dark"
          sx={{ textAlign: "center", margin: "15px 0" }}
        >
          Crea una cuenta nueva
        </Typography>
        <SimpleBackdrop open={open} />

        {error && <BasicAlerts message={error} />}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MuiAlert
            elevation={20}
            variant="filled"
            severity={variant ? variant : "info"}
          >
            {error}
          </MuiAlert>
        </Snackbar>
        <Box
          component={Form}
          onSubmit={formik.handleSubmit}
          sx={{
            "& > :not(style)": { my: { md: 1, sm: 0.75, xs: 0.5 } },
          }}
        >
          {/* NOMBRE Y APELLIDOS */}
          <Grid container spacing={1}>
            <Grid item md={6} sm={6} xs={12}>
              {/* NOMBRE */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Nombre(s)"
                type="text"
                name="name"
                onChange={formik.handleChange}
                error={formik.errors.name ? true : false}
                helperText={formik.errors.name}
                value={formik.values.name}
                autoComplete="off"
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              {/* APELLIDOS */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Apellidos"
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                error={formik.errors.lastName ? true : false}
                helperText={formik.errors.lastName}
                value={formik.values.lastName}
                autoComplete="off"
              />
            </Grid>
          </Grid>
          
          {/* EDAD Y SEXO */}
          <Grid container spacing={1}>
            <Grid item md={6} sm={6} xs={6}>
              {/* EDAD */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Edad"
                type="text"
                name="age"
                onChange={formik.handleChange}
                error={formik.errors.age ? true : false}
                helperText={formik.errors.age}
                value={formik.values.age}
                autoComplete="off"
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              {/* SEXO */}
              <TextField
                component={Form.Input}
                fullWidth
                select
                label="Sexo"
                type="text"
                name="gender"
                onChange={formik.handleChange}
                error={formik.errors.gender ? true : false}
                helperText={formik.errors.gender}
                value={formik.values.gender}
                autoComplete="off"
              >
                {sexos.map((sexo) => (
                  <MenuItem key={sexo.value} value={sexo.value}>
                    {sexo.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          {/* OCUPACIÓN Y CP */}
          <Grid container spacing={1}>
            <Grid item md={6} sm={6} xs={6}>
              {/* OCUPACION */}
              <TextField
                component={Form.Input}
                fullWidth
                select
                label="Ocupación"
                type="text"
                name="ocupation"
                onChange={formik.handleChange}
                error={formik.errors.ocupation ? true : false}
                helperText={formik.errors.ocupation}
                value={formik.values.ocupation}
                autoComplete="off"
              >
                {tipos.map((tipo) => (
                  <MenuItem key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* CP */}
            <Grid item md={6} sm={6} xs={6}>
              <TextField
                fullWidth
                label="Código postal"
                type="text"
                name="zipCode"
                onChange={(e) => {
                  formik.handleChange(e);
                  setCp(e.target.value);
                  setColor("default"); // Restablece el color a "default" cuando se modifica el valor del TextField
                }}
                value={formik.values.zipCode || cp}
                autoComplete="off"
                variant="outlined"
                error={Boolean(formik.errors.zipCode) || color === "error"}
               helperText={formik.errors.zipCode || mensaje}
               style={{ color: color === "error" ? "red" : "" }} // Establece el estilo de color del helperText
              />
            </Grid>
          </Grid>
          
          {/* ESTADO */}
          <TextField
            fullWidth
            label="Estado"
            type="text"
            name="state"
            onChange={(e) => {
              setEst(e.target.value);
              formik.setFieldValue("state", e.target.value); // Actualiza el valor de formik.values.state
            }}
            error={formik.errors.state ? true : false}
            helperText={formik.errors.state}
            value={est || formik.values.state}
            autoComplete="off"
            disabled={true}
          />



          {/* CORREO */}
          <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
              <TextField
                fullWidth
                label="Correo electronico"
                type="text"
                name="email"
                onChange={(e) => {
                  formik.handleChange(e);
                  setEmail(e.target.value);
                }}
                error={formik.errors.email ? true : false}
                helperText={formik.errors.email}
                value={formik.values.email || email}
                autoComplete="off"
                disabled={estado ? true : false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{height: "100%", display: "flex", alignItems: "center"}}>  
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={estado ? <EditIcon /> : <MarkEmailReadIcon/>}
                  onClick={estado ? editar : validar}
                >
                  {estado ? "Editar" : "Validar"}
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* SUBCONTENEDOR */}
          <Collapse in={estado}>
            <Box
              sx={{
                "& > :not(style)": { my: { md: 1, sm: 0.75, xs: 1 } },
              }}
            >
              {/* CONTRASEÑA */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={formik.handleChange}
                error={formik.errors.password ? true : false}
                helperText={formik.errors.password}
                value={formik.values.password}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
              {/* REPETIR CONTRASEÑA */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Repetir contraseña"
                type={showPassword ? "text" : "password"}
                name="repeatPassword"
                onChange={formik.handleChange}
                error={formik.errors.repeatPassword ? true : false}
                helperText={formik.errors.repeatPassword}
                value={formik.values.repeatPassword}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
              {/* Pregunta secreta */}
              <TextField
                component={Form.Input}
                fullWidth
                select
                label="Pregunta secreta de recuperación de contraseña"
                type="text"
                name="secretQuestion"
                onChange={formik.handleChange}
                error={formik.errors.secretQuestion ? true : false}
                helperText={formik.errors.secretQuestion}
                value={formik.values.secretQuestion}
                autoComplete="off"
              >
                {secreta.map((secreta) => (
                  <MenuItem key={secreta.value} value={secreta.value}>
                    {secreta.label}
                  </MenuItem>
                ))}
              </TextField>
              
              {/* Respuesta a pregunta */}
              <TextField
                component={Form.Input}
                fullWidth
                label="Respuesta de la pregunta secreta"
                type={showPassword ? "text" : "password"}
                name="secretQuestionAnswer"
                onChange={formik.handleChange}
                error={formik.errors.secretQuestionAnswer ? true : false}
                helperText={formik.errors.secretQuestionAnswer}
                value={formik.values.secretQuestionAnswer}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* POLITICAS */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.checkBoxValue}
                    onChange={formik.handleChange}
                    name="checkBoxValue"
                    inputProps={{ "aria-label": "Aceptar términos y condiciones" }}
                  />
                } 
                label={<AlertDialog/>}
              />

              {formik.touched.checkBoxValue && formik.errors.checkBoxValue ? (
                <div>{formik.errors.checkBoxValue}</div>
              ) : null}

              {/* BOTONES */}
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<LoginIcon />}
                  >
                    Registrar
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    onClick={formik.handleReset}
                    endIcon={<DeleteIcon />}
                  >
                    Limpiar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
          {/*  FIN DEL SUBCONTENEDOR */}

          {/* enlaces */}
          <Grid container spacing={1}>
              <Grid item xs>
                <Typography textAlign="center" variant="body1">
                  ¿Tienes cuenta? <Link to="/acceso">inicia sesión</Link>
                </Typography>
              </Grid>
            </Grid>
        </Box>{/**FIN DEL FORMULARIO */}
      </Paper>
    </Container>
  );
};
