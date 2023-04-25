import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#59143A',
      },
      secondary: {
        main: '#591d55',
      },
      text: {
        primary: '#59143a',
        secondary: '#000',
      },
      background: {
        default: '#d9caad',
        paper: '#e0e0e0',
      },
    },
  });
  
export const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#59143A',
      },
      secondary: {
        main: '#18ffff',
      },
      text: {
        primary: '#eb97c3',
        secondary: '#ffffff',
        disabled: '#ffffff',
        hint: '#ffffff',
        
        
      },
      background: {
        default: '#b2a58e',
        paper: '#2A2D2F',
      },
    },
  });