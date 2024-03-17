import { Container, Grid } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const pasos = [
  "Se debe iniciar sesión para poder donar.",
  "Formulario Tarjeta",
  "Formulario Paypal",
  "Formulario Oxxo",
  "Formulario Transferencia",
];

export const Oxxo = () => {
  return (
    <Container maxWidth="sm">
      <Grid container rowSpacing={1} columnSpacing={1} sx={{ bgcolor: "background.paper", p: 1 }}>
        <Stepper>
          <Step>
            <StepLabel>{pasos[3]}</StepLabel>
          </Step>
        </Stepper>
      </Grid>
    </Container>
  );
};