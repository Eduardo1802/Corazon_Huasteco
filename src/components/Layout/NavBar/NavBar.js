import React, { useState, useEffect }  from "react";
import { Link, NavLink, useNavigate }  from "react-router-dom";
import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import LoginRoundedIcon                from "@mui/icons-material/LoginRounded";

import MenuIcon                        from "@mui/icons-material/Menu";
import { doc, getDoc }                 from "firebase/firestore";
import { CustomizedBtn, HideOnScroll } from "./componentsNavBar";
import { navLinks }                    from "./opNavLinks";
import SimpleBackdrop                  from "../../customs/SimpleBackDrop";
import { db }                          from "../../../config/firebase/firebaseDB";
import { useAuth }                     from "../../../context/AuthContext";
import imgUser from "../../../assets/img/perfil/imgUser.jpg";
import { Toggle } from "../../../views/Home/Toggle";

const drawerWidth = 240;
// const settings = ['Perfil', 'Cuenta', 'Panel', 'Cerrar Sesión'];

export const NavBar = (props) => {
  const {isDarkMode} = props;
  const {handleThemeChange} = props;
  const { logout, user } = useAuth();
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

  // eslint-disable-next-line
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Corazón Huasteco
      </Typography>
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: "left",  "&:hover": { color: "primary.main" } }}
              component={Link}
              to={`/${item.path}`}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
          <ListItem disablePadding>
            <ListItemButton>
              
              <Toggle isDarkMode={isDarkMode} handleThemeChange={handleThemeChange}/>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <SimpleBackdrop open={open}/>
          {/* Primer tool */}
          {/* desktop*/}
          <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h5"
              component={Link}
              to="/inicio"
              fontWeight={700}
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: "background.default" },
              }}
            >
              CORAZÓN HUASTECO
            </Typography>
            
            <Toggle isDarkMode={isDarkMode} handleThemeChange={handleThemeChange}/>
          </Toolbar>

          {/* Salida del drawer --- mobile */}
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block" },
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
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <Tooltip title="Más opciones de navegación">
                  <MenuIcon />
                </Tooltip>
              </IconButton>
            </Box>

            {/* logo --- mobile */}
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/inicio"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "background.default" },
              }}
            >
              Corazón Huasteco
            </Typography>

            {/* pages --- desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              {navLinks.map((item) => (
                <Button
                  key={item.title}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    fontSize: 16,
                    color: "background.default",                    
                    display: "block",
                    "&:hover": { color: "background.paper" },
                    textTransform: "capitalize",
                  }}
                  component={NavLink}
                  to={`/${item.path}`}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            {/* Icono user --- desktop / mobile*/}
            <Box sx={{ flexGrow: 0 }}>
              {user ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="User"
                        src={user.photoURL ? user.photoURL : imgUser}
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
                    >
                      <Typography textAlign="center">Perfil</Typography>
                    </MenuItem>

                    {/* elemento 2 */}
                    <MenuItem
                      onClick={handleLogout}
                      sx={{
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      <Typography textAlign="center">Cerrar Sesión</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Box>
                    <CustomizedBtn
                      component={Link}
                      to="/acceso"
                      endIcon={<LoginRoundedIcon />}
                      sx={{
                        display: { xs: "none", md: "flex" },
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": {
                          color: "primary.main",
                          bgcolor: "background.default",
                        },
                      }}
                    >
                      Entrar
                    </CustomizedBtn>
                    <IconButton
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
                  </Box>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* separadores de nav y cotenido */}
      <Toolbar sx={{ display: { xs: "none", md: "flex" } }} />
      <Toolbar />
    </>
  );
};
