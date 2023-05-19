import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, TextField,IconButton, InputAdornment } from "@mui/material";
import { usePassword, handleMouseDownPassword } from '../../context/UsePassword';
import { useTheme } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useAuth } from "../../context/AuthContext";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TodayIcon from "@mui/icons-material/Today";
import { Visibility, VisibilityOff } from '@mui/icons-material'

const pasos = [
  "Se debe iniciar sesión para poder donar.",
  "Formulario Tarjeta",
  "Formulario Paypal",
  "Formulario Oxxo",
  "Formulario Transferencia",
];

export const Tarjeta = () => {
  const { user } = useAuth();
  const [monto, setMonto] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");
  const [cvv, setCvv] = useState("");
  const [showPassword, handleClickShowPassword] = usePassword(false);
  const [nombre, setNombre] = useState("");
  const theme = useTheme();
  const tipo = "Tarjeta";

  const handleSubmit = async (e) => {

  };

  return (
    <Container maxWidth="sm">
    <Grid
      container
      rowSpacing={1}
      columnSpacing={1}
      sx={{ bgcolor: "background.paper", p: 1}} // display:"flex", justifyContent:"center" 
    >
      <Stepper>
        <Step>
          <StepLabel>{pasos[1]}</StepLabel>
        </Step>
      </Stepper>

      <TextField
        label="Usuario"
        value={user ? user.email : user.displayName}
        fullWidth
        multiline
        type={"hidden"}
        sx={{ marginBottom: "15px", marginTop: "15px" }}
        InputProps={{
          startAdornment: <AccountCircleIcon sx={{ marginRight: "5px" }} />,
        }}
      />

      <TextField
        label="Monto"
        type="number"
        fullWidth
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        required
        error={monto === "" || monto <= 0}
        helperText={
          monto === ""
            ? "El monto no puede estar vacío"
            : monto <= 0
            ? "El mes no debe ser menor a 1"
            : ""
        }
        InputProps={{
          startAdornment: <AttachMoneyIcon sx={{ marginRight: "5px" }} />,
        }}
      />

      <Typography
        variant="h6"
        color="primary"
        sx={{
          textAlign: "center",
          marginTop: "15px",
          marginButtom: "15px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Datos de tarjeta
      </Typography>

      <TextField
        label="Nombre"
        value={nombre || ""}
        fullWidth
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        onChange={(e) => setNombre(e.target.value)}
        required
        error={nombre.length === 0 || nombre.length < 5 || nombre.length > 30}
        helperText={
          nombre.length === 0
            ? "El nombre no puede estar vacío"
            : nombre.length < 5
            ? "El nombre del nombre debe tener al menos 5 caracteres"
            : nombre.length > 50
            ? "El nombre del nombre no puede tener más de 50 caracteres"
            : ""
        }
        InputProps={{
          startAdornment: <PersonIcon sx={{ marginRight: "5px" }} />,
        }}
      />

      <TextField
        label="No. Tarjeta"
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        value={tarjeta || ""}
        fullWidth
        onChange={(e) => setTarjeta(e.target.value)}
        required
        error={isNaN(tarjeta) || tarjeta.length !== 16}
        helperText={
          isNaN(tarjeta)
            ? "El Número de tarjeta debe ser un valor numérico"
            : tarjeta.length !== 16
            ? "El Número de tarjeta debe tener 16 dígitos"
            : ""
        }
        InputProps={{
          startAdornment: <CreditCardIcon sx={{ marginRight: "5px" }} />,
        }}
      />

      <TextField
        label="Mes"
        type="number"
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        fullWidth
        value={mes}
        onChange={(e) => setMes(e.target.value)}
        required
        error={mes === "" || mes <= 0 || mes > 12}
        helperText={
          mes === ""
            ? "El mes no puede estar vacío"
            : mes <= 0
            ? "El mes no debe ser menor a 1"
            : mes > 12
            ? "El mes no debe ser mayor a 12"
            : ""
        }
        InputProps={{
          min: 1,
          max: 12,
          startAdornment: <CalendarMonthIcon sx={{ marginRight: "5px" }} />,
        }}
      />

      <TextField
        label="Año"
        type={"number"}
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        fullWidth
        value={anio}
        onChange={(e) => setAnio(e.target.value)}
        required
        error={anio === "" || anio < 2000 || anio > 2050}
        helperText={
          anio === ""
            ? "El mes no puede estar vacío"
            : anio < 2000
            ? "El mes no debe ser menor a 2000"
            : anio > 2050
            ? "El mes no debe ser mayor a 2050"
            : ""
        }
        InputProps={{
          startAdornment: <TodayIcon sx={{ marginRight: "5px" }} />,
        }}
      />

      <TextField
        label="CVV"
        type={showPassword ? 'text' : 'password'}
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        fullWidth
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
        error={cvv === "" || cvv.length !== 3 }
        helperText={
          cvv === ""
            ? "El CVV no puede estar vacío"
            : cvv.length !== 3
            ? "El cvv debe tener 3 digitos"
            : ""
        }
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
          )
      }}
      />
      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        sx={{ marginTop: "15px" }}
      >
        Donar
      </Button>
    </Grid>
    </Container>
  );
};
