import React, { useState } from "react";
import axios from "axios";
import SendIcon from '@mui/icons-material/Send';
import { Bread }              from '../../components/customs/Bread';
import { Delete, Face, HomeRounded, SmartToy} from '@mui/icons-material';
import { Box, CircularProgress, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { HelmetComponent } from "../../components/customs/HelmetComponent";

export const ChatBot = () => {
  const [pregunta, setPregunta] = useState("");
  const [predictionData, setPredictionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyResponse, setIsEmptyResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setIsEmptyResponse(false);
      const data = { answer: pregunta };
      const response = await axios.post(
        "http://eduardo1802.pythonanywhere.com/api/predict",
        data
      );      
      console.log("Respuesta del servidor:", response.data);
      setPredictionData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al hacer la solicitud POST:", error);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "CHATBOT", ruta: "/chatbot", icono: <SmartToy/>}]}/>

      <Paper elevation={0}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h4" color="primary" textAlign='center' >Interactua con el ChatBot</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} p={1}>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  value={pregunta}
                  onChange={(e) => setPregunta(e.target.value)}
                  onKeyDown={handleKeyDown}
                  required
                  label="Envia tu pregunta sobre Huejutla"
                  id="outlined-multiline-flexible"
                  color="success"
                  multiline
                  fullWidth
                  maxRows={10}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton 
                        type="submit" aria-label="enviar pregunta al chatbot" 
                        size="large" sx={{color: "#19C37D"}}
                        disabled={isLoading}
                      >
                        <SendIcon fontSize="inherit" />
                      </IconButton>
                    </InputAdornment>,
                  }}
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={12} md={6} p={1}>
              <Paper elevation={1} sx={{ p: 1.4 }}>
                <Typography
                  textAlign="left"
                  variant="h6"
                  color="text.primary"
                  gutterBottom
                >
                  Respuesta: 
                </Typography>
                <Typography>
                  {isLoading && <CircularProgress/> }
                </Typography>
                <Typography
                  textAlign="left"
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {isEmptyResponse && <>La respuesta está vacía.</>}
                  {predictionData.answer && <>{predictionData.answer}</>}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};
