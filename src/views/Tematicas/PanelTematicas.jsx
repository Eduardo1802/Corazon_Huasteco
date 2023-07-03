import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { app } from '../../config/firebase/firebase'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute'
import { Bread } from '../../components/customs/Bread'
import GroupSkeleton from "../Shop/groupSkeleton"
import { contadorVisitas } from '../../utils/fnCountStatus'
import { HomeRounded, LabelRounded } from '@mui/icons-material';

export const PanelTematicas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [proyectos, setProyectos] = useState([]);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("temas").get();
    setProyectos(docList.docs.map((doc) => doc));
  }

  useEffect(() => {
    contadorVisitas("tematicas");
    obtenerInfo();
    // Simulamos una carga de datos de 2 segundos
    const timeoutId = setTimeout(() => {
      // Una vez que se han cargado los datos, actualizamos el estado
      setIsLoading(false);
    }, 1000);
      // Limpiamos el timeout si el componente se desmonta antes de que termine la carga
      return () => clearTimeout(timeoutId);
  }, [])

  return (
    <Box sx={{bgcolor: "background.default"}}>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TEMATICAS", ruta: "/tematicas", icono: <LabelRounded/>},]}/>

      {/* L I S T A D O   D E   T E M A T I C A S */}
      <Paper elevation={0}>
        <Grid container spacing={1}> {/* G R I D  G R A L. */}
          <Grid item xs={12} sx={{p:3}}> 
            <Typography variant="h4" color="primary" textAlign='center' >Explora las diferentes tematicas</Typography>
          </Grid>
          {
            isLoading ? (
              <GroupSkeleton/>
            )
            :
            (proyectos.map(proyecto => {
              return (
                <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
                  <ItemListCard
                    key={proyecto.id}
                    id={proyecto.id}
                    titulo={proyecto.data().titulo}
                    descripcion={proyecto.data().descripcion}
                    ancla={proyecto.data().ancla}
                    img={proyecto.data().img}
                    shoWActions={false}
                   />  
                </Grid>
              )
            }))
          }
        </Grid>
      </Paper>
      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </Box>
  )
}
