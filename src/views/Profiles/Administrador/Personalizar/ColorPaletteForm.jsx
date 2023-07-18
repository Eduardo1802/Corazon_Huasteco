import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Stack, Switch, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";

const ColorPaletteForm = () => {
  const [themeMode, setThemeMode] = useState('light');
  const [backgroundDefault, setBackgroundDefault] = useState('');
  const [backgroundPaper, setBackgroundPaper] = useState('');
  const [primaryDark, setPrimaryDark] = useState('');
  const [primaryLight, setPrimaryLight] = useState('');
  const [primaryMain, setPrimaryMain] = useState('');
  const [secondaryDark, setSecondaryDark] = useState('');
  const [secondaryLight, setSecondaryLight] = useState('');
  const [secondaryMain, setSecondaryMain] = useState('');

  useEffect(() => {
    fetchData();
  }, [themeMode]);

  const fetchData = async () => {
    try {
      const docRef = doc(db, 'settingsApp', 'C5sl8yZRgXubsme5uBws');
      const docSnapshot = await getDoc(docRef);
      const data = docSnapshot.data();
      const theme = data[themeMode];

      setBackgroundDefault(theme.background.default);
      setBackgroundPaper(theme.background.paper);
      setPrimaryDark(theme.primary.dark);
      setPrimaryLight(theme.primary.light);
      setPrimaryMain(theme.primary.main);
      setSecondaryDark(theme.secondary.dark);
      setSecondaryLight(theme.secondary.light);
      setSecondaryMain(theme.secondary.main);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleThemeToggle = () => {
    setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
  };

  const handleResetPalette = () => {
    if (themeMode === 'dark') {
      setBackgroundDefault('#121212');
      setBackgroundPaper('#121212');
      setPrimaryDark('#741A4C');
      setPrimaryLight('#962262');
      setPrimaryMain('#851E57');
      setSecondaryDark('#6c2367');
      setSecondaryLight('#8b2d84');
      setSecondaryMain('#7b2876');
    } else {
      // Set the values for the light theme palette
      // You can replace these values with the desired default light theme colors
      setBackgroundDefault('#D9CAAD');
      setBackgroundPaper('#e0e0e0');
      setPrimaryDark('#531336');
      setPrimaryLight('#741A4C');
      setPrimaryMain('#59143a');
      setSecondaryDark('#4d194a');
      setSecondaryLight('#6c2367');
      setSecondaryMain('#591d55');
    }
  };

  const handleUpdatePalette = async () => {
    try {
      const docRef = doc(db, 'settingsApp', 'C5sl8yZRgXubsme5uBws');
      const docSnapshot = await getDoc(docRef);
      const data = docSnapshot.data();
      data[themeMode] = {
        background: {
          default: backgroundDefault,
          paper: backgroundPaper,
        },
        primary: {
          dark: primaryDark,
          light: primaryLight,
          main: primaryMain,
        },
        secondary: {
          dark: secondaryDark,
          light: secondaryLight,
          main: secondaryMain,
        },
      };
      await updateDoc(docRef, data);
      console.log('Palette updated successfully!');
      alert('Palette updated successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error updating palette:', error);
    }
  };

  return (
    <Grid container spacing={0} sx={{padding: 1}}>
        <Grid item xs={12}>
            <FormGroup>
                <FormControlLabel
                control={<Switch checked={themeMode === 'dark'} onChange={handleThemeToggle} />}
                label="¿Modo oscuro?"
                />
            </FormGroup>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Stack sx={{ width: "100%" }} spacing={1}>
                <TextField
                type="color"
                label="Background Default"
                value={backgroundDefault}
                onChange={(e) => setBackgroundDefault(e.target.value)}
                />
                <TextField
                type="color"
                label="Background Paper"
                value={backgroundPaper}
                onChange={(e) => setBackgroundPaper(e.target.value)}
                />
                <TextField
                type="color"
                label="Primary Dark"
                value={primaryDark}
                onChange={(e) => setPrimaryDark(e.target.value)}
                />
                <TextField
                type="color"
                label="Primary Light"
                value={primaryLight}
                onChange={(e) => setPrimaryLight(e.target.value)}
                />
                <TextField
                type="color"
                label="Primary Main"
                value={primaryMain}
                onChange={(e) => setPrimaryMain(e.target.value)}
                />
                <TextField
                type="color"
                label="Secondary Dark"
                value={secondaryDark}
                onChange={(e) => setSecondaryDark(e.target.value)}
                />
                <TextField
                type="color"
                label="Secondary Light"
                value={secondaryLight}
                onChange={(e) => setSecondaryLight(e.target.value)}
                />
                <TextField
                type="color"
                label="Secondary Main"
                value={secondaryMain}
                onChange={(e) => setSecondaryMain(e.target.value)}
                />
            </Stack>
        </Grid> 
        <Grid item xs={12} sm={8}>
            <Box>
                Aqui puedes ver una vista de como se verían algunos elementos de la aplicación con los nuevos colores
                <Button variant="contained">hola buenas</Button>
            </Box>
        </Grid>
        <Grid item xs={12} sx={{paddingTop: 1}}>
            <Stack direction="row" spacing={1}>
                <Button variant="contained" color="success" onClick={handleUpdatePalette}>
                    Actualizar
                </Button>
                <Button variant="outlined" color="warning" onClick={handleResetPalette}>
                    Restablecer
                </Button>
            </Stack>
        </Grid>
    </Grid>
  );
};

export default ColorPaletteForm;
