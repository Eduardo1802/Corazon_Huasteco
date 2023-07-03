import React, { useState, useEffect } from 'react'
import { Box, Grid, Toolbar, TextField, MenuItem, Button } from '@mui/material'
import { app } from '../../config/firebase/firebase'
import SearchIcon from '@mui/icons-material/Search';
import { HomeRounded, StoreRounded } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { ItemListCard } from '../../components/customs/ItemListCard';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';
import GroupSkeleton from './groupSkeleton';
import { categoria, colores } from "../Registro/optionListRegistro"
import { Form } from "semantic-ui-react"
import { contadorVisitas } from '../../utils/fnCountStatus';
export const Tienda = () => {
  // PARA LA BUSQUEDA NORMAL
  const [proyectos, setProyectos] = useState([]);
  const [tablaProyectos, setTablaProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [categori, setCategori] = useState("");
  const [color, setColor] = useState("");
  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value.toString().toUpperCase());
    console.log(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
     // eslint-disable-next-line
    var resultadoBusqueda = tablaProyectos.filter((elemento) => {
      if (elemento.data().nombre.includes(terminoBusqueda)) {
        return elemento;
      }
    });
    setProyectos(resultadoBusqueda);
    setDocs(resultadoBusqueda);
  }

  // eslint-disable-next-line
  const [docs, setDocs] = useState([]);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("producto").get();
    setDocs(docList.docs.map((doc) => doc));
    setProyectos(docList.docs.map((doc) => doc));
    setTablaProyectos(docList.docs.map((doc) => doc));
  }

  useEffect(() => {
    
    contadorVisitas("tienda");
    
    obtenerInfo()
    // Simulamos una carga de datos de 2 segundos
    const timeoutId = setTimeout(() => {
      // Una vez que se han cargado los datos, actualizamos el estado
      setIsLoading(false);
    }, 1000);
    // Limpiamos el timeout si el componente se desmonta antes de que termine la carga
    return () => clearTimeout(timeoutId);
  }, [])
  const handleSearch = async () => {
    try {
      console.log(categori)
      let query = app.firestore().collection("producto");
      if (categori === "Todos" || categori === "") {
        if (color === "Todos" || color === "") {
          const docList = await app.firestore().collection("producto").get();
          setProyectos(docList.docs.map((doc) => doc));
        }
        else {
          const snapshot = await query.where('color', '==', color).get();
          setProyectos(snapshot.docs.map((doc) => doc));
        }
      } else {

        if (color === "Todos" || color === "") {
          const snapshot = await query.where('categoria', '==', categori).get();
          setProyectos(snapshot.docs.map((doc) => doc));
        } else {
          const snapshot = await query.where('categoria', '==', categori)
            .where('color', '==', color)
            .get();
          setProyectos(snapshot.docs.map((doc) => doc));
        }
      }


    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box sx={{bgcolor: "background.default"}}> {/**CONTENEDOR GLOBAL */}
      <Grid container>
        {/* B R E A D C R U M B S */}
        <Grid item xs={12}>
          <Bread migas={[{ miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/> }, { miga: "TIENDA", ruta: "/tienda", icono: <StoreRounded/> }]} />
        </Grid>
      </Grid>

      {/* Contenido */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{bgcolor: "background.paper", p:1}}
      >
        {/* B U S C A D O R 1 */}
        <Grid item xs={12} >
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'search' }}
                value={busqueda}
                onChange={handleChange}
                />
            </Search>
          </Toolbar>
        </Grid>

        {/* B U S C A D O R 2 -- FIltros*/}
        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Categoria"
            type="text"
            name="categoria"
            onChange={(e) => setCategori(e.target.value)}
            value={categori || ""}
            autoComplete="off"
            >
            {categoria.map((categoria) => (
              <MenuItem  key={categoria.value} value={categoria.value}>
                {categoria.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item  md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Color"
            type="text"
            name="color"
            onChange={(e) => setColor(e.target.value)}
            value={color || ""}
            autoComplete="off"
            >
            {colores.map((color) => (
              <MenuItem key={color.value} value={color.value}>
                {color.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item  md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button fullWidth  variant="contained" onClick={handleSearch}>
              Buscar
            </Button>
          </Box>
        </Grid>
            
      </Grid>






      

      <Box sx={{ m: 3, flexGrow: 1 }}> {/*O R A N G E*/}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            isLoading ? (
              <GroupSkeleton />
            )
              :
              (proyectos.map(proyecto => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
                    <ItemListCard
                      key={proyecto.id}
                      id={proyecto.id}
                      titulo={proyecto.data().nombre}
                      descripcion={`${proyecto.data().descripcion.slice(0, 100)}...`}
                      ancla={`${proyecto.id}`}
                      img={proyecto.data().url} />
                  </Grid>
                )
              }))
          }
        </Grid>
      </Box>
    </Box>
  )
}




// DISEÑOS DEL BUSCADOR
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); //FIN DE DISEÑO DE BUSCADOR