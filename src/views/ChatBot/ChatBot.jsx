import React, { useState } from "react";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import SendIcon from '@mui/icons-material/Send';
import { Bread }              from '../../components/customs/Bread';
import { HomeRounded} from '@mui/icons-material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {
  Box,
  Grid,
  Divider,
  Chip,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
        "http://eduazuara.pythonanywhere.com/api/predict",
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

  return (
    <Box>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "CHATBOT", ruta: "/chatbot", icono: <QuestionAnswerIcon/>}]}/>
      <Grid container spacing={0}>
        <Grid item xs={12} p={3}>
          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative", width: "600px" }}>
                <input
                  type="text"
                  value={pregunta}
                  onChange={(e) => setPregunta(e.target.value)}
                  style={{
                    width: "100%",
                    height: "60px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                    outline: "none",
                    paddingRight: "40px",
                  }}
                  required
                  placeholder="Envía tu pregunta sobre Huejutla"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#19C37D",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SendIcon style={{ color: "white" }}/>
                </button>
              </div>
            </form>
          </Paper>

          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography
              textAlign="left"
              variant="h5"
              color="text.secondary"
              sx={{ display: "flex" }}
            >
              Respuesta: {isLoading && "Cargando..."}
            </Typography>
            <Typography
              gutterBottom
              textAlign="left"
              variant="h5"
              color="text.secondary"
              sx={{ display: "flex" }}
            >
              {isEmptyResponse && <p>La respuesta está vacía.</p>}
              {predictionData.answer && <p>{predictionData.answer}</p>}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
