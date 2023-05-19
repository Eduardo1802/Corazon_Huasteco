import React, { useState, useEffect } from "react";
import { app } from "../../../../config/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";
import { tipo_pago } from "./OptionListPago";
import { Form } from "semantic-ui-react";
import { format } from "date-fns"; 

export const AdminVentas = () => {
  const [proyectos, setProyectos] = useState([]);
  const [open, setOpen] = useState(false);
  const [tipo_rol, setTipo_rol] = useState("");

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
        textAlign: "center",
        border: "1px solid #ccc",
        color: "inherit",
      },
    },
  };

  const handleSearch = async () => {
    try {
      console.log(tipo_rol)
      if (tipo_rol === "todos" || tipo_rol === "") {
        obtenerInfo();
      }else{
        const docList = await app.firestore().collection("ventas").get();
        const info_tematicas = docList.docs.filter((doc) => doc.data().metodoPago === tipo_rol );
        setProyectos(info_tematicas.map((doc) => doc.data()));
      }
    } catch (error) {
      console.error(error);
    }
  };


  const obtenerInfo = async () => {
    const docLict = await app.firestore().collection("ventas").get();
    const proyectosData = docLict.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProyectos(proyectosData);
  };

  useEffect(() => {
    obtenerInfo();
  }, []);

  return (
    <div>
      <SimpleBackdrop open={open} />
       {/* Contenido */}
       <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          sx={{bgcolor: "background.paper", p:1}}
        >
          {/* Buscador */}
          <Grid item md={4} sm={6} xs={6}>
            <TextField
              component={Form.Input}
              fullWidth
              select
              label="Método de Pago"
              type="text"
              onChange={(e) => setTipo_rol(e.target.value)}
              value={tipo_rol || ""}
              autoComplete="off"
              >
                {tipo_pago.map((cate) => (
                  <MenuItem key={cate.value} value={cate.value}>
                    {cate.label}
                  </MenuItem>
                ))}
            </TextField>
          </Grid> 
          <Grid item  md={4} sm={12} xs={12}>
            <Box display="flex" height="100%">
              <Button fullWidth  variant="contained" onClick={handleSearch} > 
                Clasificar
              </Button>
            </Box>
        </Grid>
      </Grid>
      {/* TABLA */}
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 460, backgroundColor: "#E0E0E0" }}>
          <Table stickyHeader aria-label="sticky table" sx={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>Núm</TableCell>
                <TableCell>Usuario</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Cantidad del Producto</TableCell>
                <TableCell>Costo Unitario</TableCell>
                <TableCell>Costo Total</TableCell>
                <TableCell>Metodo de Pago</TableCell>
                <TableCell>Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {proyectos.map((proyecto,index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={proyecto.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{proyecto.usuario}</TableCell>
                  <TableCell>{proyecto.nombreProducto}</TableCell>
                  <TableCell>{proyecto.color}</TableCell>
                  <TableCell>{proyecto.categoria}</TableCell>
                  <TableCell>{proyecto.cantidadProducto}</TableCell>
                  <TableCell>{proyecto.costoUnitario}</TableCell>
                  <TableCell>{proyecto.costo_total}</TableCell>
                  <TableCell>{proyecto.metodoPago}</TableCell>
                  <TableCell>{proyecto.fecha.toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
