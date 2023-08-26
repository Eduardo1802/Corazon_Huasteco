// THIS CODE ALLOW GET THE COLOR DATA FROM FIREBASE AND SET THE THEME AT THE FIRST TIME
// import React, { useEffect, useState } from "react";
// import { Router } from "./routes/Router";
// import { Box, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "./config/firebase/firebaseDB";
// AOS.init({once: true});

// function App() {
//   const [themeMode, setThemeMode] = useState('light');
//   const [palette, setPalette] = useState({});
//   const [loading, setLoading] = useState(true);

//   const fetchData = async (themeMode) => {
//     try {
//       const docRef = doc(db, 'settingsApp', 'C5sl8yZRgXubsme5uBws');
//       const docSnapshot = await getDoc(docRef);
//       const data = docSnapshot.data();
//       setPalette(data[themeMode]);
//       setLoading(false); // Marcar la carga como completada
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(themeMode);
//   }, [themeMode]);

//   const handleThemeToggle = () => {
//     setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
//     AOS.refresh();
//   };

//   const theme = createTheme({
//     palette: {
//       mode: themeMode,
//       ...palette,
//     },
//   });

//   if (loading) {
//     // Mostrar un mensaje de carga mientras los datos se están cargando
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box>
//       <ThemeProvider theme={theme}>
//         <Router isDarkMode={themeMode} handleThemeChange={handleThemeToggle} />
//       </ThemeProvider>
//     </Box>
//   );
// }

// export default App;
// END OF THE GET DATA



// THIS CODE USE THE LOCAL COLOR DATA FROM THE PROJECT, WITHOUT USE FIREBASE
import React, { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import {Box, ThemeProvider} from '@mui/material';
import {lightTheme, darkTheme} from './styles/ThemeMui';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isDarkMode, setIsDarkmode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkmode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // Actualiza el valor de la etiqueta "theme-color" utilizando el valor del color correspondiente al modo claro/oscuro
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", isDarkMode ? darkTheme.palette.primary.main : lightTheme.palette.primary.main);
  }, [isDarkMode, theme]);

  return (
    <Box>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
      </ThemeProvider>
    </Box>
  );
}

export default App;

// END OF THE LOCAL DATA