import { Box, Button, IconButton } from "@mui/material";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import MapIcon from "@mui/icons-material/Map";
import { Link } from "react-router-dom";

export const SwitchCarouselMap = ({ irA }) => {
  if (irA === "carrusel") {
    return (
      <Box sx={{ textAlign: "center", padding: "15px 0" }}>
        <Box
          sx={{
            bgcolor: "primary.main",
            borderRadius: "50px",
            display: "inline-flex",
          }}
        >
          <Box
            sx={{
              padding: "5px",
              borderRadius: "50px",
              borderStyle: "solid",
              borderColor: "transparent",
            }}
          >
            <Button
              component={Link}
              to="/inicio"
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                textDecoration: "none",
                color: "background.default",
                "&:hover": { color: "background.default" },
              }}
              endIcon={<ViewCarouselIcon />}
            >
              Carrusel
            </Button>
            <IconButton
              component={Link}
              to="/inicio"
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                color: "background.default",
              }}
            >
              <ViewCarouselIcon />
            </IconButton>
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="150"
            data-aos-duration="150"
            sx={{
              bgcolor: "background.default",
              padding: "5px",
              borderRadius: "50px",
              borderColor: "primary.main",
              borderStyle: "solid",
            }}
          >
            <Button
              sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
              endIcon={<MapIcon />}
            >
              Mapa
            </Button>
            <IconButton
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                color: "primary.main",
              }}
            >
              <MapIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  } else if (irA === "mapa") {
    return (
      <Box sx={{ textAlign: "center", padding: "15px 0" }}>
        <Box
          sx={{
            bgcolor: "primary.main",
            borderRadius: "50px",
            display: "inline-flex",
          }}
        >
          <Box
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="150"
            data-aos-duration="150"
            sx={{
              bgcolor: "background.default",
              padding: "5px",
              borderRadius: "50px",
              borderColor: "primary.main",
              borderStyle: "solid",
            }}
          >
            <Button
              sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
              endIcon={<ViewCarouselIcon />}
            >
              Carrusel
            </Button>
            <IconButton
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                color: "primary.main",
              }}
            >
              <ViewCarouselIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              padding: "5px",
              borderRadius: "50px",
              borderStyle: "solid",
              borderColor: "transparent",
            }}
          >
            <Button
              component={Link}
              to="/mapa"
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                textDecoration: "none",
                color: "background.default",
                "&:hover": { color: "background.default" },
              }}
              endIcon={<MapIcon />}
            >
              Mapa
            </Button>
            <IconButton
              component={Link}
              to="/mapa"
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                color: "background.default",
              }}
            >
              <MapIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return <>No hay nada aquí</>;
  }
};
