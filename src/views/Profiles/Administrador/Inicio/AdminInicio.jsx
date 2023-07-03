import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleBackdrop from "../../../../components/customs/SimpleBackDrop";
import { WrapperSingleRoute } from "../../../../components/customs/WrapperSingleRoute";
import { useAuth } from "../../../../context/AuthContext";
import "firebase/firestore";
import noProfileUser from "../../../../assets/img/perfil/noProfilePicture.jpg";
import banner from "../../../../assets/img/perfil/banner.jpg";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import { EditProfile } from "./EditProfile";

export const AdminInicio = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  console.log("vista administrador: id del usuario =>", user.uid);

  // eslint-disable-next-line
  const handleLogout = async () => {
    try {
      setOpen(true);
      await logout();
      navigate("/");
      setOpen(false);
    } catch (error) {
      setOpen(true);
      console.log(error.message);
      setOpen(false);
    }
  };

  return (
    <Box>
      <SimpleBackdrop open={open} />
      {/* CONTENEDOR GRID */}
      <Grid container sx={{ bgcolor: "background.paper" }}>
        {/* BANNER */}
        <Grid
          item
          xs={12}
          sx={{
            height: "20vh",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
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
          <Typography color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>

          <Divider variant="middle" />

          <Typography color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Container>
      </Grid>
      {/* FIN CONTENEDOR GRID */}
    </Box>
  );
};
