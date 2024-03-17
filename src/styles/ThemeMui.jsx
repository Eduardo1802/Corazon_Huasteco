import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#581859',
      light: '#812471',
      dark: '#3d113e',
    },
    background: {
      paper: '#fff',
      default: '#DDD2AD',
    },
  },
});
  
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bc69a2',
      light: '#d192bc',
      dark: '#ad4a8f',
    },
    secondary: {
      main: '#7b2876',
      light: '#8b2d84',
      dark: '#6c2367',
    },
    background: {
      paper: '#0E050E',
      default: '#252025',
    },
  },
});