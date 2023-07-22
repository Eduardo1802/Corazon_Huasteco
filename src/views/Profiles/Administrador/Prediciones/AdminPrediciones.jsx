import React, { useState } from "react";
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

      const response = await axios.post(
        "http://localhost:5000/api/predict",
        data
      );
      console.log("Respuesta del servidor:", response.data);

      if (Array.isArray(response.data)) {
        setPredictionData(response.data);
      } else {
        setPredictionData([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error al hacer la solicitud POST:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nextMonth}
          onChange={(e) => setNextMonth(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Predict
        </button>
      </form>
      {isLoading && <p>Cargando...</p>}
      {isEmptyResponse && <p>La respuesta está vacía.</p>}

      {predictionData && Object.keys(predictionData).length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              {Object.keys(predictionData).length > 0 &&
                Object.keys(predictionData[Object.keys(predictionData)[0]]).map(
                  (product) => <th key={product}>{product}</th>
                )}
            </tr>
          </thead>
          <tbody>
            {Object.keys(predictionData).map((date) => (
              <tr key={date}>
                <td>{date}</td>
                {Object.values(predictionData[date]).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
