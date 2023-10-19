import React, { useState, useEffect } from 'react'
import { Box, Grid, Toolbar, TextField, MenuItem, Button } from '@mui/material'
import { app } from '../../config/firebase/firebase'
import SearchIcon from '@mui/icons-material/Search';
import { HomeRounded, StoreRounded } from '@mui/icons-material';
// import { ItemListCard } from '../../components/customs/ItemListCard';
import { Bread } from '../../components/customs/Bread';
import GroupSkeleton from './groupSkeleton';
import { categoria, colores } from "../Register/optionListRegistro"
import { Form } from "semantic-ui-react"
import { contadorVisitas } from '../../utils/fnCountStatus';
import { Search, SearchIconWrapper, StyledInputBase } from './elements/Elements.Tienda';
import MediaControlCard from './MediaControlCard';
import FullScreenDialog from './elements/FullScreenDialog';
import Carrito from './Carrito';

export const Tienda = () => {
  // logica para abrir dialog
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Busqueda normal
  const [proyectosCargados, setProyectosCargados] = useState([]);
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categori, setCategori] = useState("");
  const [color, setColor] = useState("");
  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value.toString().toUpperCase());
    console.log(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = proyectosFiltrados.filter((elemento) => 
      elemento.data().nombre.includes(terminoBusqueda)
    );
    setProyectosCargados(resultadoBusqueda);
    setDocumentos(resultadoBusqueda);
  }

  const [documentos, setDocumentos] = useState([]);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("producto").get();
    setDocumentos(docList.docs.map((doc) => doc));
    setProyectosCargados(docList.docs.map((doc) => doc));
    setProyectosFiltrados(docList.docs.map((doc) => doc));
  }

  useEffect(() => {
    contadorVisitas("tienda");
    obtenerInfo()
  }, [])

  const handleSearch = async () => {
    try {
      console.log(categori)
      let query = app.firestore().collection("producto");
      if (categori === "Todos" || categori === "") {
        if (color === "Todos" || color === "") {
          const docList = await app.firestore().collection("producto").get();
          setProyectosCargados(docList.docs.map((doc) => doc));
        }
        else {
          const snapshot = await query.where('color', '==', color).get();
          setProyectosCargados(snapshot.docs.map((doc) => doc));
        }
      } else {
        if (color === "Todos" || color === "") {
          const snapshot = await query.where('categoria', '==', categori).get();
          setProyectosCargados(snapshot.docs.map((doc) => doc));
        } else {
          const snapshot = await query.where('categoria', '==', categori).where('color', '==', color).get();
          setProyectosCargados(snapshot.docs.map((doc) => doc));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{bgcolor: "background.paper"}}> {/**CONTENEDOR GLOBAL */}
      <Bread migas={[{ miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/> }, { miga: "TIENDA", ruta: "/tienda", icono: <StoreRounded/> }]} />
      <Carrito/>

      {/* Contenido */}
      <Grid container rowSpacing={1} columnSpacing={1}
        sx={{bgcolor: "background.paper", p:1}}
      >
        {/* Buscador */}
        <Grid item xs={12} >
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'buscar un producto de la tienda' }}
                value={busqueda}
                onChange={handleChange}
                />
            </Search>
          </Toolbar>
        </Grid>

        {/* Filtros */}
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
              <MenuItem  key={categoria.value} value={categoria.value} aria-label={`elegiste la categoria: ${categoria.value}`}>
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
              <MenuItem key={color.value} value={color.value} aria-label={`elegiste el lcolor ${color.label}`}>
                {color.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item  md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button aria-label='buscar productos' fullWidth  variant="contained" onClick={handleSearch}>
              Buscar
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ p: {xs:1, md:3}, flexGrow: 1 }}> {/*Listado*/}
        <Grid container spacing={{ xs: 3, sm: 2, md: 2 }}>
          {
            proyectosCargados.length === 0 ? (
              <GroupSkeleton />
            )
              :
              (proyectosCargados.map((proyecto, index) => {
                return (
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={4} key={index}>
                      {/* <ItemListCard
                        key={proyecto.id}
                        id={proyecto.id}
                        titulo={proyecto.data().nombre}
                        descripcion={`${proyecto.data().descripcion.slice(0, 100)}...`}
                        ancla={`${proyecto.id}`}
                        img={proyecto.data().url} /> */}

                      <MediaControlCard proyecto={proyecto} handleClickOpen={handleClickOpen}/>
                    </Grid>
                )
              }))
          }
        </Grid>

        {selectedProject && (
            <FullScreenDialog
              open={open}
              handleClose={handleClose}
              project={selectedProject}
            />
          )}
      </Box>
    </Box>
  )
}