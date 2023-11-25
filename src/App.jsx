import React, { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/ThemeMui";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState(lightTheme.palette.primary.main);

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    setThemeColor(isDarkMode ? darkTheme.palette.primary.main : lightTheme.palette.primary.main);
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ToastContainer />
      <Router isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
      <meta name="theme-color" content={themeColor} />
    </ThemeProvider>
  );
}

export default App;
