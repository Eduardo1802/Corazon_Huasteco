import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Button, Chip, Divider, Grid, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ItemListCard } from '../../components/customs/ItemListCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, StoreRounded, LocalOfferRounded } from '@mui/icons-material';
import Carrito  from './Carrito';
import { CarritoContext } from '../../context/CarritoContext';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseDB";

export const DetalleProduct = ({ productos }) => {
  const [datos, setDatos] = useState(null);

  const params = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si los datos de 'productos' están disponibles y no están vacíos antes de configurar 'datos'
    if (productos && productos.length > 0) {
      console.log('Productos:', productos);
      let p = productos.filter((producto) => producto.id === params.id);
      console.log('Datos filtrados:', p);
      setDatos(p[0].data());
      console.log('Datos:', p[0].data());
    }
    //eslint-disable-next-line
  }, [productos]);

  
  const registrarProducto = async (idProduct) => {
    if (!user) {
      return navigate("/acceso");
    }
  
    // Obtener la referencia del documento del carrito del usuario
    const referencia = doc(db, `carritoUsuario/${user.uid}`);
  
    // Obtener los datos del carrito del usuario
    const docSnap = await getDoc(referencia);
    const data = docSnap.exists() ? docSnap.data() : null;
  
    // Si el carrito no existe, crearlo con el producto y cantidad 1
    if (!data) {
      await setDoc(referencia, { [params.id]: 1, total: 1 });
    } else {
      // Si el producto ya existe en el carrito, aumentar la cantidad
      if (data.hasOwnProperty(params.id)) {
        await updateDoc(referencia, {
          [params.id]: data[params.id] + 1,
          total: data.total ? data.total + 1 : 1, // Sumar 1 al total si ya existe, o crearlo con 1 si aún no existe
        });
      } else {
        // Si el producto no existe en el carrito, agregarlo con cantidad 1
        await updateDoc(referencia, {
          [params.id]: 1,
          total: data.total ? data.total + 1 : 1, // Sumar 1 al total si ya existe, o crearlo con 1 si aún no existe
        });
      }
    }
  };
  
  
  // Conditional rendering to handle the case where 'datos' is not available yet
  if (!datos) {
    return <div>Loading...</div>; // You can also show a loading spinner here.
  }

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* BREADCUMBS */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}
      >
        <Grid item xs >
          <Bread migas={[
            { miga: "INICIO", ruta: "/inicio", icono: <HomeRounded /> },
            { miga: "TIENDA", ruta: "/tienda", icono: <StoreRounded /> },
            { miga: `${datos.nombre}`, ruta: `/tienda/${params.id}`, icono: <LocalOfferRounded /> }
          ]} />
          <Carrito />
        </Grid>
      </Grid>

      {/* CONTENIDO */}
      {/* Imagen principal */}{/* Precio-botones-descBreve */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <ItemListCard
            img={datos.url}
            heightImg={500}
            showContent={false}
          />

          <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item xs={6} md={4} >
              <ItemListCard
                img={datos.url}
                heightImg={150}
                showContent={false}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <ItemListCard
                img={datos.url}
                heightImg={150}
                showContent={false}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <ItemListCard
                img={datos.url}
                heightImg={150}
                showContent={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 1, m: 2 }}>
            <Typography variant='h3' textAlign="center" component="p" >
              {datos.nombre}
            </Typography>
            <Typography variant='h5' textAlign="center" component="p" fontWeight="10" p={3}>
              ${datos.costo} MXN
            </Typography>
            <Typography variant='body1' textAlign="center" component="p" fontWeight="10">
              {datos.descripcion}
            </Typography>
            <Box textAlign="center" p={3}>
              <Typography fontWeight="bold" textAlign="left">Categoria(s):</Typography>
              <Chip label={datos.categoria} color="primary" variant="outlined" sx={{ mr: 1 }} />
            </Box>
            <Divider variant='inset' light />
            <Box textAlign="left" p={3}>
              <Stack spacing={2} direction="row">
                <Button aria-label='comprar producto ahora' variant="contained" startIcon={<AttachMoneyIcon />}>Comprar</Button>
                <Button aria-label='añadir al carrito' variant="outlined" startIcon={<ShoppingCartIcon />} onClick={() => registrarProducto()}>Añadir</Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* TESTIMONIOS */}
      <Grid container>
        <Grid item xs>
          <Typography variant='h5' textAlign="center" component="p" fontWeight="50" p={1}>
            Testimonios
          </Typography>
          <Box display="flex" justifyContent="center" >
            <ListItem alignItems="center" sx={{ width: "70%" }}>
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" sx={{ bgcolor: "primary.main" }}>R</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant='h6' component="p">Great product</Typography>}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body1"
                      color="text.primary"
                    >
                      Remy Sharp
                    </Typography>
                    {' —  Despite seeing no many bad reviews on them coming in broken , I took the risk and happy I did. I got the 8 piece and they were all in perfect condition. Thanks!'}
                  </>
                }
              />
            </ListItem>
          </Box>
        </Grid>
      </Grid>

      {/* DESCRIPCION LARGA */}
      <Grid container >
        <Grid item xs>
          <Paper sx={{ ml: 5, mr: 5, p: 3 }}>
            <Typography variant='h5' textAlign="left" component="p" fontWeight="bold" p={1}>
              Descripcion
            </Typography>
            <Typography variant='body1' textAlign="left" component="p" fontWeight="10">
              {/* Long description content */}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* PRODUCTOS RELACIONADOS */}
      <Grid container >
        <Grid item xs>
          <Paper sx={{ ml: 5, mr: 5, p: 3, bgcolor: 'background.default' }} elevation={2}>
            <Typography variant='h5' textAlign="left" component="p" fontWeight="bold" p={1}>
              Productos relacionados
            </Typography>

            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* FIN DEL CONTENIDO QUE SERÁ EL DEFINITIVO */}
    </Box>
  )
}
