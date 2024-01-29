import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, useTheme } from '@mui/material';
import { ChevronRightRounded, LocalGroceryStoreRounded} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// firebase component
import { doc, getDoc, updateDoc, setDoc }from "firebase/firestore";
import { db } from "../../config/firebase/firebaseDB";

export default function MediaControlCard({proyecto, handleClickOpen}) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { contador, aumentarContador, disminuirContador } = useContext(CarritoContext);
  const theme = useTheme();
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
      await setDoc(referencia, { [idProduct]: 1, total: 1 });
    } else {
      // Si el producto ya existe en el carrito, aumentar la cantidad
      if (data.hasOwnProperty(idProduct)) {
        await updateDoc(referencia, {
          [idProduct]: data[idProduct] + 1,
          total: data.total ? data.total + 1 : 1, // Sumar 1 al total si ya existe, o crearlo con 1 si aún no existe
        });
      } else {
        // Si el producto no existe en el carrito, agregarlo con cantidad 1
        await updateDoc(referencia, {
          [idProduct]: 1,
          total: data.total ? data.total + 1 : 1, // Sumar 1 al total si ya existe, o crearlo con 1 si aún no existe
        });
      }
    }
  };
  

  return (
    <Card elevation={5} sx={{ transition: "0.2s", "&:hover": {transform: "scale(1.03)"}, display: 'flex', flexDirection: {xs: "column", sm: "row", md: "row"}, minHeight: {xs: 100, sm: 150, md:200, lg:250, xl:"100%"}, borderRadius: 2 }}>
      <CardMedia
        onClick={() => handleClickOpen(proyecto)}
        component="img"
        sx={{ maxWidth: {xs: "100%", sm: 200, md:350, lg:180, xl:180}, height: {xs: 200, sm: 200, md:200, lg:250, xl:250}, objectFit: "cover", '&:hover': {cursor: "pointer"} }}
        image={proyecto.data().url}
        alt={proyecto.data().nombre}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {proyecto.data().nombre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`${proyecto.data().descripcion.slice(0, 100)}...`}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <CardActions>
              <Button aria-label='ir a la vista amplia del producto' variant='contained' size='small' endIcon={<ChevronRightRounded/>} component={Link} to={proyecto.id}>
                  Ver
              </Button>
              
              <Button aria-label='añadir producto al carrito de compras' variant='outlined' size='small' endIcon={<LocalGroceryStoreRounded />} sx={{ ml: 2 }} onClick={() => registrarProducto(proyecto.id)}>
                Añadir
              </Button>
           

          </CardActions>
        </Box>
      </Box>
      
    </Card>
  );
}