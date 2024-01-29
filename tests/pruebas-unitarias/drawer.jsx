import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { navLinks } from "../../src/components/Layout/NavBar/opNavLinks";

export const drawer = (
    <>
      <Box sx={{ textAlign: "center" }}>
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
                  
                  '&.active': { // Estilos para enlaces activos
                    color: 'primary.main',
                  },
                }}
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
    </>
  );