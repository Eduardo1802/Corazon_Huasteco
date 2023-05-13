import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { app } from '../../../config/firebase/firebase'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { Bread } from '../../../components/customs/Bread'
import GroupSkeleton from "../../Shop/groupSkeleton"
import { HomeRounded, LabelRounded, Checkroom } from '@mui/icons-material';

export const Vestimenta = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [proyectos, setProyectos] = useState([]);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("tematicas").get();
    const proyectosVestimenta = docList.docs.filter((doc) => doc.data().tematica === 'Vestimenta');
    setProyectos(proyectosVestimenta);
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
    <WrapperSingleRoute> 
      <Grid 
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}  
      >
        <Grid item xs={12}>
          <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TEMATICAS", ruta: "/tematicas", icono: <LabelRounded/>},{miga: "VESTIMENTA", ruta: "/tematicas/vestimenta", icono: <Checkroom/>}]}/>
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
              <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
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
    </WrapperSingleRoute>
  
  )
}

