import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import { Box, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ChevronRightRounded} from '@mui/icons-material';

export default function FullScreenDialog({
  open,
  handleClose,
  Transition,
  project,
}) {
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
        aria-describedby="alert-dialog-description"
      >
          <Toolbar>
            {/* <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" color="secondary.light" fontWeight={500}>
              {project.title}
            </Typography> */}
            <DialogTitle sx={{flex:1, fontWeight: 900, fontSize: {xs: 25, sm:30, md:35}}} variant="h6" id="alert-dialog-title" color="secondary.light" >
              {project.data().nombre}
            </DialogTitle>
            
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
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
