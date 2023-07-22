import React, { useState } from "react";
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
import { AnalyticsRounded } from "@mui/icons-material";
import ControllableStates from "./ControlallableStates";
import axios from "axios";

export const AdminPrediciones = () => {
  const [nextMonth, setNextMonth] = useState("");
  const [predictionData, setPredictionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyResponse, setIsEmptyResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setIsEmptyResponse(false);

      const formattedNextMonth = parseInt(nextMonth);
      const data = { next_month: formattedNextMonth };

      const response = await axios.post('https://einaromar.pythonanywhere.com/api/predict', data);

      // const response = await axios.post('https://www.pythonanywhere.com/user/EinarOmar/files/home/EinarOmar/app/app.py', data);
      console.log("Respuesta del servidor:", response.data);

      const parsedResponse = JSON.parse(response.data); // Parse the JSON data

      if (Array.isArray(parsedResponse)) {
        // Convertir la respuesta en un objeto JavaScript
        const predictionObject = parsedResponse.reduce((acc, curr) => {
          acc[curr.fecha] = curr;
          return acc;
        }, {});

        setPredictionData(predictionObject);
      } else {
        setPredictionData(parsedResponse);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error al hacer la solicitud POST:", error);
      setIsLoading(false);
    }
  };

  const styles = {
    table: {
      border: "1px solid",
      borderColor: "primary.main",
      "& th": {
        color: "#E0E0E0",
        // color: "#D9CAAD",
        backgroundColor: "primary.main",
        textAlign: "center",
      },
      "& td": {
        backgroundColor: "background.paper",
        border: "1px solid #ccc",
        color: "inherit",
        textAlign: "center",
      },
    },
  };

  return (
    <Box>
      {/* PREDICIÓN - ITEMS */}
      <Grid container spacing={0}>
        <Grid item xs={12} p={3}>
          <Divider>
            <Chip
              label="Prediciones"
              size="large"
              variant="filled"
              icon={<AnalyticsRounded />}
            />
          </Divider>
        </Grid>

        <Grid item xs={12} p={3}>
          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography
              textAlign="left"
              variant="h5"
              color="text.secondary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Predición de Ventas por Producto
            </Typography>
            <Typography textAlign="left" variant="h6" color="text.secondary">
              Ingresa la cantidad de meses a predecir: {`${nextMonth}`}
            </Typography>
            <form
  onSubmit={handleSubmit}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Alinea los elementos hacia la izquierda
    justifyContent: "flex-start",
  }}
>
  <input
    type="number"
    value={nextMonth}
    onChange={(e) => setNextMonth(e.target.value)}
    required
    min={1}
    max={6}
    style={{
      width: "300px",
      height: "40px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginBottom: "10px",
      textAlign: "center",
    }}
  />

  <button
    type="submit"
    style={{
        
      backgroundColor: "#59143A",
      color: "#FFFFFF",
      borderRadius: "10px",
      padding: "10px 20px",
    }}
    disabled={isLoading}
  >
    Predict
  </button>
</form>


            {isLoading && <p>Cargando...</p>}
            {isEmptyResponse && <p>La respuesta está vacía.</p>}
          </Paper>

          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography
              gutterBottom
              textAlign="left"
              variant="h5"
              color="text.secondary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Resultado
            </Typography>

            <TableContainer
              sx={{ maxHeight: 1000, backgroundColor: "#E0E0E0", flex: "3" }}
            >
              <Table stickyHeader aria-label="sticky table" sx={styles.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    {predictionData &&
                      Object.keys(predictionData).length > 0 &&
                      Object.keys(
                        predictionData[Object.keys(predictionData)[0]]
                      ).map((product) => (
                        <TableCell key={product}>{product}</TableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {predictionData &&
                    Object.keys(predictionData).map((date) => (
                      <TableRow key={date}>
                        <TableCell>
                          {new Date(parseInt(date)).toLocaleDateString()}
                        </TableCell>
                        {Object.values(predictionData[date]).map(
                          (value, index) => (
                            <TableCell key={index}>{value}</TableCell>
                          )
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* {predictionData && Object.keys(predictionData).length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  {Object.keys(predictionData).length > 0 &&
                    Object.keys(predictionData[Object.keys(predictionData)[0]]).map((product) => (
                      <th key={product}>{product}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(predictionData).map((date) => (
                  <tr key={date}>
                    <td>{new Date(parseInt(date)).toLocaleDateString()}</td>
                    {Object.values(predictionData[date]).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null} */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
