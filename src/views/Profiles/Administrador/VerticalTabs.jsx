import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material';
import { HomeRounded, AnalyticsRounded, CategoryRounded, GroupRounded, AttachMoneyRounded, LocalShippingRounded, AddCommentRounded, VolunteerActivismRounded, DesignServicesRounded, SettingsRounded  } from '@mui/icons-material';
import { AdminInicio } from './Inicio/AdminInicio';
import { AdminEstadisticas } from './Estadisticas/AdminEstadisticas';
import { AdminPrediciones } from './Prediciones/AdminPrediciones'
import { AdminProductos } from './Productos/AdminProductos';
import { AdminUsuarios } from './Usuarios/AdminUsuarios';
import { AdminVentas } from './Ventas/AdminVentas';
import { AdminProveedor } from './Proveedor/AdminProveedor';
import { AdminComentarios } from './Comentarios/AdminComentarios';
import { AdminDonaciones } from './Donaciones/AdminDonaciones';
import { AdminPersonalizar } from './Personalizar/AdminPersonalizar';
import { AdminConfiguracion } from './Configuracion/AdminConfiguracion';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../config/firebase/firebaseDB';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{/* border: "6px solid red", */ width: "100%"}}
    >
      {value === index && (
        <Box sx={{ p: 0, /* border: "6px solid blue", */ height: "100%" }}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

//CONSULTA
export const getVisitas = async() =>{
  const result = await getDocs(query(collection(db, 'visitas')));
  return result;
}

export default function VerticalTabs() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [value, setValue] = useState(0);
  const [datos, setDatos] = useState(null);

  const getVisitasData = async()=>{
    const p = await getVisitas();
    setDatos(p.docs);
  }

  useEffect(() => {
      getVisitasData();
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto", /* border: "6px solid green", */ flexDirection: isSmallScreen ? "column" : "row" }}
    >
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider', /* border: "6px solid orange", */ minWidth: "150px", bgcolor: isSmallScreen ? "background.default" : "background.paper" }}
      >
        <Tab label="Inicio"        icon={<HomeRounded/>}                iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(0)} />
        <Tab label="Estadisticas"  icon={<AnalyticsRounded/>}           iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(1)} />
        <Tab label="Prediciones"   icon={<AnalyticsRounded/>}           iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(2)} />
        <Tab label="Productos"     icon={<CategoryRounded/>}            iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(3)} />
        <Tab label="Usuarios"      icon={<GroupRounded/>}               iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(4)} />
        <Tab label="Ventas"        icon={<AttachMoneyRounded/>}         iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(5)} />
        <Tab label="Proveedores"   icon={<LocalShippingRounded/>}       iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(6)} />
        <Tab label="Comentarios"   icon={<AddCommentRounded/>}          iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(7)} />
        <Tab label="Donaciones"    icon={<VolunteerActivismRounded/>}   iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(8)} />
        <Tab label="Personalizar"  icon={<DesignServicesRounded/>}      iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(9)} />
        <Tab label="Configuración" icon={<SettingsRounded/>}            iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(10)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AdminInicio/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminEstadisticas datos={datos}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminPrediciones/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminProductos/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdminUsuarios/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AdminVentas/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AdminProveedor/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <AdminComentarios/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AdminDonaciones/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <AdminPersonalizar/>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <AdminConfiguracion/>
      </TabPanel>
    </Box>
  );
}
