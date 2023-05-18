import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#59143a',
        light: '#741A4C',
        dark: '#531336',
      },
      secondary: {
        main: '#591d55',
        light: '#6c2367',
        dark: '#4d194a',
      },
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
        main: '#851E57',
        light: '#962262',
        dark: '#741A4C',
      },
      secondary: {
        main: '#7b2876',
        light: '#8b2d84',
        dark: '#6c2367',
      },
    },
  });


  // paleta inicial de colores
// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#59143a',
//       light: '#93184d',
//       dark: '#7e1746',
//     },
//     secondary: {
//       main: '#591d55',
//       light: '#942271',
//       dark: '#7f2167',
//     },
//     background: {
//       paper: '#e0e0e0',
//       default: '#D9CAAD',
//     },
//   },
// });
  
// export const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//       primary: {
//         main: '#a71953',
//         light: '#b71a56',
//         dark: '#93184d',
//       },
//       secondary: {
//         main: '#aa237b',
//         light: '#bb2381',
//         dark: '#942271',
//       },
//     },
//   });