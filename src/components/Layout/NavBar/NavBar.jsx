import React, { useState, useEffect }  from "react";
import { Link, NavLink, useLocation, useNavigate }  from "react-router-dom";
import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import LoginRoundedIcon                from "@mui/icons-material/LoginRounded";
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon                        from "@mui/icons-material/Menu";
import { doc, getDoc }                 from "firebase/firestore";
import { AnimatedIcon, ElevationScroll, } from "./componentsNavBar";
import { navLinks }                    from "./opNavLinks";
import SimpleBackdrop                  from "../../customs/SimpleBackDrop";
import { db }                          from "../../../config/firebase/firebaseDB";
import { useAuth }                     from "../../../context/AuthContext";
import { useTheme } from "@emotion/react";
import { ToggleThemeSticky } from "../../customs/ToggleThemeSticky";

const drawerWidth = 240;
// const settings = ['Perfil', 'Cuenta', 'Panel', 'Cerrar Sesión'];

export const NavBar = (props) => {
  const {isDarkMode} = props;
  const theme = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/inicio";

  const {handleThemeChange} = props;
  const { logout, user, profileImageUrl } = useAuth();
  const [data, setData] = useState(null);
  const [ruta, setRuta] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const handleLogout = async() => {
    try{
      setOpen(true);
      await logout();
      navigate('/');
      setOpen(false);
    }catch(error){
      setOpen(true);
      console.log(error.message);
      setOpen(false);
    }
  }

  useEffect(() => {
    if (user?.uid) {
      const consultaDato = async () => {
        try {
          const referencia = doc(db, `usuarios/${user.uid}`);
          const docSnap = await getDoc(referencia);
          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.log("No se encontró la información del usuario");
          }
        } catch (error) {
          console.log("Hubo un error al obtener la información del usuario");
        }
      }
      consultaDato();
    } else {
      console.log("Debe iniciar sesión para ver su perfil");
    }
  }, [user]);
  const handleRedirect = () => {
    let ruta;
    if (data.rol === "consultador") {
      ruta = "/user/consultor";
    } else if (data.rol === "administrador") {
      ruta = "/user/administrador";
    } else if (data.rol === "colaborador") {
      ruta = "/user/colaborador";
    } else if (data.rol === "supervisor") {
      ruta = "/user/supervisor";
    }
    if (ruta) {
      setRuta(ruta);
    }
    handleCloseUserMenu();
  }
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Corazón Huasteco
        </Typography>
        <Divider />
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                sx={{ 
                  textAlign: "left",  "&:hover": { color: "primary.main" },
                  mx:1,
                  '&.active': { // Estilos para enlaces activos
                    background: `${theme.palette.primary.light}56`,
                    border: `1px solid ${theme.palette.primary.light}`,
                    borderRadius: 30,
                    mx: 1
                  },
                  
                }}
                component={NavLink}
                to={item.path}
              >
                <ListItemIcon>
                  {item.path === location.pathname ? item.iconSelected : item.icon }
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <List>
        <ListItem >
            <ToggleThemeSticky isDarkMode={isDarkMode} handleThemeChange={handleThemeChange}/>
        </ListItem>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <SimpleBackdrop open={open}/>
          {/* Primer tool */}
          {/* desktop*/}
          <Toolbar sx={{ display: { xs: "none", md: "flex" }}}>
            <AnimatedIcon component={Link} to='/'/>
            <Box sx={{flexGrow:1}}>

            <Tooltip title="Volver al inicio" arrow placement="right">
              <Typography
                variant="h5"
                component={Link}
                to="/inicio"
                fontWeight={700}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                aria-label="volver a la pagina de inicio"
              >
                CORAZÓN HUASTECO
              </Typography>            
            </Tooltip>
            </Box>
            <ToggleThemeSticky isDarkMode={isDarkMode} handleThemeChange={handleThemeChange}/>
          </Toolbar>

          {/* Salida del drawer --- mobile */}
          <Box component="nav">
            <Drawer
              disableScrollLock
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Segundo tool */}
          <Toolbar>
            {/*disableGutters*/}
            {/* Icono menu --- mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu de opciones de navegación"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <Tooltip title="Menú de navegación" arrow>
                  <MenuIcon />
                </Tooltip>
              </IconButton>
            </Box>

            {/* logo --- mobile */}
            <Tooltip title="Volver al inicio" arrow placement="bottom">
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/inicio"
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  
                }}
              >  
                <AnimatedIcon/>
              </Typography>
            </Tooltip>

            {/* pages --- desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              {navLinks.map((item) => (
                <Button
                  aria-label={`botón para ir a la sección de ${item.title}`}
                  startIcon={item.path === location.pathname ? item.iconSelected : item.icon }
                  key={item.title}
                  onClick={handleCloseNavMenu}
                  sx={{
                    mr: 1,
                    fontSize: 16,
                    color: "inherit",                    
                    display: "flex",
                    textTransform: "capitalize",
                    "&:hover": { color: isDarkMode ? 'primary.light' : 'background.default' },
                    '&.active': { // Estilos para enlaces activos
                      color: isDarkMode ? 'primary.light' : 'background.default',
                    },
                    '&:hover svg':{
                      transform: "scale(1.2) rotate(10deg)",  
                      transition: "all 0.2s"
                    },
                  }}
                  variant="text"
                  component={NavLink}
                  to={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            {/* Icono user --- desktop / mobile*/}
            <Box sx={{ flexGrow: 0 }}>
              {user ? (
                <>
                  <Tooltip title="Opciones del perfil" arrow>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} aria-label="abrir las opciones del perfil">
                      <Avatar
                        alt="User"
                        src={profileImageUrl}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    disableScrollLock
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {/* elemento 1 */}
                    <MenuItem
                      onClick={handleRedirect}
                      component={Link}
                      to={ruta}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": { color: "primary.main" },
                      }}
                      aria-label="ir a la sección del perfil"
                    >
                      <Typography textAlign="center">Perfil</Typography>
                    </MenuItem>

                    {/* elemento 2 */}
                    <MenuItem
                      onClick={handleLogout}
                      sx={{
                        "&:hover": { color: "primary.main" },
                      }}
                      aria-label="cerrar la sesión actual"
                    >
                      <Typography textAlign="center">Cerrar Sesión</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Box>
                    <Button
                      aria-label="ir al inicio de sesión"
                      component={Link}
                      to="/acceso"
                      endIcon={<LoginRoundedIcon />}
                      sx={{
                        display: { xs: "none", md: "flex" },
                        textDecoration: "none",
                        textTransform: "none",
                        color: "inherit",
                        "&:hover": {
                          color: "primary.main",
                          bgcolor: "background.default",
                        },
                      }}
                    >
                      Entrar
                    </Button>
                    <Tooltip title="Inicio de sesión" arrow>
                      <IconButton
                        aria-label="ir al apartado de inicio de sesión"
                        component={Link}
                        to="/acceso"
                        sx={{
                          display: { xs: "flex", md: "none" },
                          textDecoration: "none",
                          color: "inherit",
                          "&:hover": {
                            color: "primary.main",
                            bgcolor: "background.default",
                          },
                        }}
                      >
                        <LoginRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* separadores de nav y cotenido */}
      {
        isHome 
        ? 
          null
        : 
        <>
          <Toolbar sx={{ display: { xs: "none", md: "flex" } }} />
          <Toolbar />
        </>
      }
      
    </>
  );
};
