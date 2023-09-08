import React, { useState } from "react";
import {Box, Button, Chip, Divider, Grid, Paper, Stack, TextField, Typography,} from "@mui/material";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { app } from "../../../../config/firebase/firebase";
import { handleBackup } from "./fnRestBackDB";
import ControllableStates from "./ControllableStates";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const options = [
  "bajaProductos",
  "producto",
  "temas",
  "tematicas",
  "usuarios",
  "usuarios_correo",
  "visitas",
  "settingsApp"
];

export const AdminConfiguracion = () => {
  // INICIA
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);

  const handleRestore = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = JSON.parse(e.target.result);
        const batch = app.firestore().batch();
        Object.keys(data).forEach((docId) => {
          const docRef = app.firestore().collection(name).doc(docId); // Cambia "tu-coleccion" por el nombre de la colección que quieres restaurar
          batch.set(docRef, data[docId]);
        });
        await batch.commit();
      };
      reader.readAsText(file);
      alert("Se ha restaurado correctamente");
    } else {
      alert("No se ha seleccionado ningún archivo");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setName(e.target.files[0].name.split(".")[0]);
  };
  // TERMINA

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <Box>
      {/* RESPALDO DB - ITEMS */}
      <Grid container spacing={0}>
        {/* SEPARADOR -- DB */}
        <Grid item xs={12} p={3}>
          <Divider>
            <Chip
              label="Base de Datos"
              size="large"
              variant="filled"
              icon={<StorageRoundedIcon />}
            />
          </Divider>
        </Grid>

        {/* COPIA DE SEG. Y RESTAURACIÓN*/}
        <Grid item md={6} sm={6} xs={12}>
          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography textAlign="left" variant="h5" color="text.secondary">
              Respaldar colección: {`${value !== null ? `"${value}"` : "null"}`}
            </Typography>
            <ControllableStates
              value={value}
              setValue={setValue}
              inputValue={inputValue}
              setInputValue={setInputValue}
              options={options}
            />
            <Button
              variant="contained"
              onClick={() => handleBackup(value)}
            >
              Respaldar BD
            </Button>
          </Paper>

          <br />

          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography textAlign="left" variant="h5" color="text.secondary">
              Restauración de la base de datos
            </Typography>
            <Box sx={{ display: "flex", flexFlow: "column wrap" }}>
              <TextField
                sx={{ mb: 1 }}
                type="file"
                onChange={handleFileChange}
              />
              <Stack direction="row" spacing={1}>
              <Button variant="contained" onClick={handleRestore}>
                Restaurar BD
              </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        {/* PROGRAMAR RESPALDO */}
        <Grid item md={6} sm={6} xs={12}>
          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography textAlign="left" variant="h5" color="text.secondary">
              Programar respaldo
            </Typography>
            <Box >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Selecciona una fecha" />
                </DemoContainer>
              </LocalizationProvider>
              <Button variant="contained" sx={{ mt: 1 }}>
                Programar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
