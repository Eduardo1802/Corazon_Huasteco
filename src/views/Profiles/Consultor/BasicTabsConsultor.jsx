import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { ConsultorInicio } from './Inicio/ConsultorInicio'
import { ConsultorCompras } from './Compras/ConsultorCompras'
import { ConsultorBiblioteca } from './Biblioteca/ConsultorBiblioteca'
import { ConsultorConfiguracion } from './Configuracion/ConsultorConfiguracion'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ m: {md: 1, sm: 1, xs: 0}, bgcolor: "background.paper", minHeight:"60vh"}}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BasicTabsConsultor = () => {

    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="Inicio"         icon={<HomeRoundedIcon/>}              iconPosition="start" {...a11yProps(0)} />
        <Tab label="Compras"        icon={<ShoppingCartRoundedIcon/>}         iconPosition="start" {...a11yProps(1)} />
        <Tab label="Biblioteca"      icon={<LibraryBooksRoundedIcon/>}             iconPosition="start" {...a11yProps(2)} />
        <Tab label="Configuración"  icon={<SettingsRoundedIcon/>}         iconPosition="start" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ConsultorInicio/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ConsultorCompras/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ConsultorBiblioteca/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ConsultorConfiguracion/>
      </TabPanel>
    </Box>
  )
}
