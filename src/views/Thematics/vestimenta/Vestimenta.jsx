import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'
// import { app } from '../../../config/firebase/firebase'
import { useDataContext } from '../../../context/DataContext'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { Bread } from '../../../components/customs/Bread'
import GroupSkeleton from "../../Shop/groupSkeleton"
import { HomeRounded, LabelRounded, Checkroom } from '@mui/icons-material';
import { HelmetComponent } from '../../../components/customs/HelmetComponent'

export const Vestimenta = () => {

  const {data, loading} = useDataContext();
  // const [isLoading, setIsLoading] = useState(true);
  // const [proyectos, setProyectos] = useState([]);

  // const obtenerInfo = async () => {
  //   const docList = await app.firestore().collection("tematicas").get();
  //   const proyectosVestimenta = docList.docs.filter((doc) => doc.data().tematica === 'Vestimenta');
  //   setProyectos(proyectosVestimenta);
  // }

  // useEffect(() => {
  //   obtenerInfo();
  //   // Simulamos una carga de datos de 2 segundos
  //   const timeoutId = setTimeout(() => {
  //     // Una vez que se han cargado los datos, actualizamos el estado
  //     setIsLoading(false);
  //   }, 1000);
  //   console.log("Proyectos", proyectos)
  //     // Limpiamos el timeout si el componente se desmonta antes de que termine la carga
  //     return () => clearTimeout(timeoutId);
  // }, [])

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TEMATICAS", ruta: "/tematicas", icono: <LabelRounded/>},{miga: "VESTIMENTA", ruta: "/tematicas/vestimenta", icono: <Checkroom/>}]}/>

      <Paper elevation={0}>
        <Grid container spacing={1}> {/* G R I D  G R A L. */}
          {
            loading ? (
              <GroupSkeleton/>
            ) : (
              data
                .filter(proyecto => proyecto.tematica === 'Vestimenta')
                .map(proyecto => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={proyecto.id}>
                    <ItemListCard
                      key={proyecto.id}
                      id={proyecto.id}
                      titulo={proyecto.titulo}
                      descripcion={proyecto.subtitulo}
                      ancla={`../${proyecto.id}`}
                      img={proyecto.portada} />
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

