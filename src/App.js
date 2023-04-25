import React, { useState } from "react";
import { Router } from "./routes/Router";
import {Box, ThemeProvider} from '@mui/material';
import {lightTheme, darkTheme} from './styles/ThemeMui';


function App() {
  const [isDarkMode, setIsDarkmode] = useState(false);

  const handleThemeChange = () =>{
    setIsDarkmode((prevMode) => !prevMode);
  }

  return (
    <Box>
      <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
        <Router isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
      </ThemeProvider>
    </Box>
  );
}

export default App;
