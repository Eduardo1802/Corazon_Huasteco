import { Avatar, Box, Button, Chip, Divider, Grid, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { ItemListCard } from '../../components/customs/ItemListCard'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HomeRounded, StoreRounded, LocalOfferRounded } from '@mui/icons-material';



export const DetalleProduct = ({productos}) => {

    const [datos, setDatos] = useState("");
    
    const params = useParams();

    useEffect(() => {
        let p = productos.filter(producto => producto.id === params.id);
        setDatos(p[0].data()); 
        //eslint-disable-next-line 
    }, []);  
    

  return (
    <WrapperSingleRoute>
        {/* BREADCUMBS */}
        <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{xs: 1, sm: 3, md: 5}}
        >
            <Grid item xs > 
                <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TIENDA", ruta: "/tienda", icono: <StoreRounded/>},{miga: `${datos.nombre}`, ruta: `/tienda/${params.id}`, icono: <LocalOfferRounded/>}]}/>
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
                <Paper sx={{p:1, m:2}}>
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
                        <Chip label={datos.categoria} color="primary" variant="outlined" sx={{mr:1}} />
                    </Box>
                    <Divider variant='inset' light />
                    <Box textAlign="left" p={3}>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" startIcon={<AttachMoneyIcon/>}>Buy</Button>
                            <Button variant="outlined" startIcon={<ShoppingCartIcon/>}>Add car</Button>
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
                    <ListItem alignItems="center" sx={{width: "70%"}}>
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" sx={{bgcolor: "primary.main"}}>R</Avatar>
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
                <Paper sx={{ml:5, mr:5, p:3}}>
                    <Typography variant='h5' textAlign="left" component="p" fontWeight="bold" p={1}>
                        Descripcion
                    </Typography>
                    <Typography variant='body1' textAlign="left" component="p" fontWeight="10">
                        <Typography>
                            {">"} Diseño clásico y eficiente, esta taza hogareña adopta la tradición mexicana de beber de cerámica de arcilla o Barro. La arcilla roja se recoge de las colinas circundantes. Las brocas de madera, piedra y maíz se utilizan como herramientas para moldear la arcilla en una rueda de banda tradicional.
                        </Typography>
                        <Typography>
                            {">"} Esta taza está hecha perfecta para disfrutar de bebidas calientes como champurrado, chocolate caliente, café y mucho más. También puedes mantener tus bebidas frías y frías, ya que funciona tan bien para mantener las bebidas y líquidos fríos como para mantenerlos calientes.
                        </Typography>
                        <Typography>
                            {">"} Como lo utilices, disfruta de tu bebida favorita de elección en esta hermosa taza pintada a mano y hecha a mano. La forma especial y auténtica de la mano del Barro los hace únicos en proporción... un elemento que hace que la mano sea tan hermosamente perfecta.
                        </Typography>
                        <Typography>
                            {">"} Este "Taza", como se conoce en español, es perfecto para bebidas frías y calientes, ya que está hecho para preservar el calor o el frío por igual. Excelente para cualquier ocasión, desde tomar un café caliente por la mañana hasta despertar hasta beber una taza fría de agua en los días más calurosos. No hay roturas, pero ten en cuenta que este material de arcilla está manejado a mano, forma y hecho; el mínimo astillado es natural.
                        </Typography>
                        <Typography>
                            {">"} Esta taza decorativa nunca dejará de destacar con su brillante acristalamiento Barro y cuello ingeniosamente redondeado. Es una gran pieza que también adornará tu cocina, dado un auténtico y tradicional estilo mexicano. Esta taza será una maravillosa adición a cualquier colección de cocina o cerámica mexicana, pero también es una fina decoración. Este artículo incluye 1 taza de barro y mide con una apertura de 3 x 3.5 pulgadas de alto x 5 pulgadas de profundidad. Capacidad para 10 onzas.
                        </Typography>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>

        {/* PRODUCTOS RELACIONADOS */}
        <Grid container >
            <Grid item xs>
                <Paper sx={{ml:5, mr:5, p:3, bgcolor: 'background.default'}} elevation={2}>
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
    </WrapperSingleRoute>
  )
}
