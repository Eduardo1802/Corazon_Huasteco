import React from "react";
import {Box, Chip, Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import { useAuth } from "../../../../context/AuthContext";
import noProfileUser from "../../../../assets/img/perfil/noProfilePicture.jpg";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import { EditProfile } from "../../../../components/customs/EditProfile";
import { BannerProfile } from "../../../../components/customs/BannerProfile";

export const AdminInicio = () => {
  const { user } = useAuth();
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  console.log("vista administrador: id del usuario =>", user.uid);

  return (
    <Box>
      {/* CONTENEDOR GRID */}
      <Grid container sx={{ bgcolor: "background.paper" }}>
        {/* BANNER */}
        <Grid item xs={12}>
          <BannerProfile />
        </Grid>
        {/*FIN BANNER */}

        {/* FLOAT CONT */}
        <Grid container sx={{ position: "relative", bottom: "70px" }}>
          {/* IMAGEN PERFIL */}
          <Grid item md={3} sm={4} xs={12}>
            <Box
              sx={{
                m: 1,
                display: "flex",
                justifyContent: {
                  md: "flex-end",
                  sm: "flex-end",
                  xs: "center",
                },
              }}
            >
              <Box
                component="img"
                src={noProfileUser}
                alt="Perfil"
                sx={{
                  width: 168,
                  height: 168,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                }}
              />
            </Box>
          </Grid>
          {/* FIN IMAGEN PERFIL */}

          {/* DATOS PERFIL */}
          <Grid item md={6} sm={8} xs={12}>
            <Box
              sx={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Stack
                direction="row"
                justifyContent={{ md: "left", sm: "left", xs: "center" }}
              >
                <Chip
                  icon={<AdminPanelSettingsRoundedIcon />}
                  label="Administrador"
                  color="success"
                />
              </Stack>
              <Typography
                textAlign={{ md: "left", sm: "left", xs: "center" }}
                variant="h5"
                color="text.secondary"
              >
                Hola, Bienvenido
              </Typography>
              <Typography
                textAlign={{ md: "left", sm: "left", xs: "center" }}
                variant="body1"
                color="text.primary"
              >
                {user ? user.email : user.displayName}
              </Typography>
            </Box>
          </Grid>
          {/* FIN DATOS PERFIL */}

          {/* BOTON EDITAR PERFIL */}
          <Grid item md={3} sm={12} xs={12}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                p: 3,
              }}
            >
              <EditProfile userImage={noProfileUser} />
            </Box>
          </Grid>
          {/* FIN BOTON EDITAR PERFIL */}
        </Grid>
        {/* FIN FLOAT CONT */}

        <Container maxWidth="md" sx={{ marginTop: "-90px", p: 3 }}>
          <hr />
          <Typography color="text.secondary" sx={{fontStyle: "italic"}} variant={isSmallScreen ? "body1" : "h5"}>
            "Eres el motor que impulsa nuestra empresa hacia la excelencia en el ámbito cultural. Valoramos tu dedicación y liderazgo estratégico para llevar adelante nuestra visión de destacar en el municipio de Huejutla de Reyes, Hidalgo, y proyectar nuestra cultura a nivel nacional e internacional. Trabajemos juntos para promover la libre expresión cultural y llevar nuestra región al mundo. ¡Tu compromiso es fundamental para alcanzar nuestros objetivos!"
          </Typography>
        </Container>
      </Grid>
      {/* FIN CONTENEDOR GRID */}
    </Box>
  );
};
