import React, { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import {Box, ThemeProvider} from '@mui/material';
import {lightTheme, darkTheme} from './styles/ThemeMui';


function App() {
  const [isDarkMode, setIsDarkmode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkmode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;
  // Aplica los estilos a toda la página
  const styles = `
  body {
    scrollbar-width: thin;
    scrollbar-color: ${theme.palette.primary.main} ${theme.palette.background.default};
    ${/*overflow-x: hidden*/ ""}
  }
  body::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: ${theme.palette.background.default};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.primary.main};
    border-radius: 20px;
  }
  `;

  useEffect(() => {
    // Obtiene el valor del color que deseas para el modo claro y el modo oscuro
    const lightModeColor = lightTheme.palette.primary.main;
    const darkModeColor = darkTheme.palette.primary.main;

    // Actualiza el valor de la etiqueta "theme-color" utilizando el valor del color correspondiente al modo claro/oscuro
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute(
      "content",
      isDarkMode ? darkModeColor : lightModeColor
    );
  }, [isDarkMode]);

  return (
    <Box>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
      </ThemeProvider>
      <Box component={"style"}>{styles}</Box>
    </Box>
  );
}

export default App;
