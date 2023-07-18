import React, { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { Box, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase/firebaseDB";
AOS.init();

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [palette, setPalette] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async (themeMode) => {
    try {
      const docRef = doc(db, 'settingsApp', 'C5sl8yZRgXubsme5uBws');
      const docSnapshot = await getDoc(docRef);
      const data = docSnapshot.data();
      setPalette(data[themeMode]);
      setLoading(false); // Marcar la carga como completada
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(themeMode);
  }, [themeMode]);

  const handleThemeToggle = () => {
    setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
    AOS.refresh();
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      ...palette,
    },
  });

  if (loading) {
    // Mostrar un mensaje de carga mientras los datos se están cargando
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Router isDarkMode={themeMode} handleThemeChange={handleThemeToggle} />
      </ThemeProvider>
    </Box>
  );
}

export default App;
