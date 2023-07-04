import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { app } from '../../../config/firebase/firebase'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { Bread } from '../../../components/customs/Bread'
import GroupSkeleton from "../../Shop/groupSkeleton"
import { HomeRounded, LabelRounded, FlagRounded } from '@mui/icons-material';

export const Tradiciones = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [proyectos, setProyectos] = useState([]);


  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("tematicas").get();
    const proyectosGastronomia = docList.docs.filter((doc) => doc.data().tematica === 'Tradiciones');
    setProyectos(proyectosGastronomia);
  }

  useEffect(() => {
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
      <Grid 
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}  
      >
        <Grid item xs={12}>
        <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TEMATICAS", ruta: "/tematicas", icono: <LabelRounded/>},{miga: "TRADICIONES", ruta: "/tematicas/tradiciones", icono: <FlagRounded/>}]}/>
        </Grid>
      </Grid>

      {/* L I S T A D O   D E   T E M A T I C A S */}

      <Grid container spacing={1}> {/* G R I D  G R A L. */}
        {
          isLoading ? (
            <GroupSkeleton/>
          )
          :
          (proyectos.map(proyecto => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={proyecto.id}>
                <ItemListCard
                  key={proyecto.id}
                  id={proyecto.id}
                  titulo={proyecto.data().titulo}
                  descripcion={proyecto.data().descripcion}
                  ancla={`../${proyecto.id}`}
                  img={proyecto.data().imgPortada} />
              </Grid>
            )
          }))
        }
      </Grid>

      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </Box>
  
  )
}
