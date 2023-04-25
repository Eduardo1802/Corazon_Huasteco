import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      // type: 'light',
      mode: 'light',
      primary: {
        main: '#59143a',
        light: '#93184d',
        dark: '#7e1746',
      },
      secondary: {
        main: '#591d55',
        light: '#942271',
        dark: '#7f2167',
      },
      // text: {
      //   primary: '#59143a',
      //   secondary: '#000',
      // },
      background: {
        paper: '#e0e0e0',
        default: '#D9CAAD',
      },
    },
  });
  
export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#a71953',
        light: '#b71a56',
        dark: '#93184d',
      },
      secondary: {
        main: '#aa237b',
        light: '#bb2381',
        dark: '#942271',
      },
      // text: {
      //   primary: '#eb97c3',
      //   secondary: '#ffffff',
      //   disabled: '#ffffff',
      //   hint: '#ffffff',
        
        
      // },
      // background: {
      //   default: '#b2a58e',
      //   paper: '#2A2D2F',
      // },
    },
  });