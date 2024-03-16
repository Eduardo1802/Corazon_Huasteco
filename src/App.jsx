import React, { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/ThemeMui";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline } from '@mui/material';

function App() {
  const savedDarkMode = localStorage.getItem("darkMode");
  const initialDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false;

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);
  const [themeColor, setThemeColor] = useState(
    isDarkMode ? darkTheme.palette.primary.main : lightTheme.palette.primary.main
  );

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    setThemeColor(isDarkMode ? darkTheme.palette.primary.main : lightTheme.palette.primary.main);
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ToastContainer />
      <CssBaseline enableColorScheme />
      <meta name="theme-color" content={themeColor} />
      <Router isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
}

export default App;
