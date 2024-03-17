import { Button, Dialog, Toolbar, IconButton, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Box, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { ChevronRightRounded} from '@mui/icons-material';

export default function FullScreenDialog({ open, handleClose, project }) {
  console.log(project.id);

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="lg"
        disableScrollLock
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
          <Toolbar>
            <DialogTitle sx={{flex:1, fontWeight: 900, fontSize: {xs: 25, sm:30, md:35}}} variant="h6" id="alert-dialog-title" color="secondary.light" >
              {project.data().nombre}
            </DialogTitle>
            
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="cerrar imagen amplia del producto"
              sx={{color: "primary.light"}}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

        <DialogContent>
          <Box>
            <img
              width="100%"
              src={project.data().url}
              alt={project.id}
            />
          </Box>
        </DialogContent>
        <DialogActions /* sx={{bgcolor: "background.default"}} */>
          <Button variant="contained" /* onClick={handleClose} */
            aria-label="ver contenido y descripción del producto"
            component={Link}
            to={project.id}
            sx={{
              '&:hover svg': {
                animation: "expand 1.1s /* infinite */"
              },
              '@keyframes expand': {
                '0%': { transform: "scale(1)", transformOrigin: "left bottom" },
                '50%': { transform: "scale(1.2)", transformOrigin: "left bottom" },
                '100%': { transform: "scale(1)", transformOrigin: "left bottom" }
              }
            }}
            endIcon={<ChevronRightRounded/>}
            size="large"
          >
            Ver
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}