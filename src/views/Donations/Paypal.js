import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Paper, TextField, Tab, Tabs, AppBar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useAuth } from "../../context/AuthContext";
import Button from "@mui/material/Button";

const pasos = [
  "Se debe iniciar sesión para poder donar.",
  "Formulario Tarjeta",
  "Formulario Paypal",
  "Formulario Oxxo",
  "Formulario Transferencia",
];

export const Paypal = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ bgcolor: "background.paper", p: 1 }}
      >
        <Stepper>
          <Step>
            <StepLabel>{pasos[2]}</StepLabel>
          </Step>
        </Stepper>
      </Grid>
    </Container>
    
  );
};
