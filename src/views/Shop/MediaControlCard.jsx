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

export default function MediaControlCard({proyecto, handleClickOpen}) {

  const { contador, aumentarContador, disminuirContador } = useContext(CarritoContext);
  const theme = useTheme();

  return (
    <Card sx={{ transition: "0.2s", "&:hover": {transform: "scale(1.03)"}, display: 'flex', flexDirection: {xs: "column", sm: "row", md: "row"}, minHeight: {xs: 100, sm: 150, md:200, lg:250, xl:"100%"}, borderRadius: 2, border: `1px dashed ${theme.palette.primary.light}` }}>
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
              <Button variant='contained' size='small' endIcon={<ChevronRightRounded/>} component={Link} to={proyecto.id}>
                  Ver
              </Button>
              <Button variant='outlined' size='small' endIcon={<LocalGroceryStoreRounded/>} sx={{ml:2}} onClick={aumentarContador}>
                  Añadir
              </Button>
          </CardActions>
        </Box>
      </Box>
      
    </Card>
  );
}