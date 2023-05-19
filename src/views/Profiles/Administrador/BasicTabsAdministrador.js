import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { AdminInicio } from './Inicio/AdminInicio';
import { AdminEstadisticas } from './Estadisticas/AdminEstadisticas';
import { AdminTematicas } from './Tematicas/AdminTematicas';
import { AdminProductos } from './Productos/AdminProductos';
import { AdminUsuarios } from './Usuarios/AdminUsuarios';
import { AdminDonaciones } from './Donaciones/AdminDonaciones';
import { AdminPersonalizar } from './Personalizar/AdminPersonalizar';
import { AdminConfiguracion } from './Configuracion/AdminConfiguracion';
import { AdminComentarios } from './Comentarios/AdminComentarios';
import { AdminTemas } from './Temas/AdminTemas'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import TopicRoundedIcon from '@mui/icons-material/TopicRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddCommentIcon from '@mui/icons-material/AddComment';
import BallotIcon from '@mui/icons-material/Ballot';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../config/firebase/firebaseDB';
import AttachMoneyIcon from '@mui/icons-material/AddBusiness';
import { AdminVentas } from './Ventas/AdminVentas';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { AdminProveedor } from './Proveedor/AdminProveedor';
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
//CONSULTA
export const getVisitas = async() =>{
  const result = await getDocs(query(collection(db, 'visitas')));
  return result;
}

export default function BasicTabsAdministrador() {
  const [value, setValue] = useState(0);
  const [datos, setDatos] = useState(null);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getVisitasData = async()=>{
    const p = await getVisitas();
    setDatos(p.docs);
  }

  useEffect(() => {
      getVisitasData();
  }, [])
  // FIN DE CONSULTA

  
  

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
        <Tab label="Inicio"       icon={<HomeRoundedIcon/>}              iconPosition="start" {...a11yProps(0)} />
        <Tab label="Estadisticas" icon={<AnalyticsRoundedIcon/>}         iconPosition="start" {...a11yProps(1)} />
        <Tab label="Temas"        icon={<BallotIcon/>}                   iconPosition="start" {...a11yProps(2)} />
        <Tab label="Tematicas"    icon={<TopicRoundedIcon/>}             iconPosition="start" {...a11yProps(3)} />
        <Tab label="Productos"    icon={<CategoryRoundedIcon/>}          iconPosition="start" {...a11yProps(4)} />
        <Tab label="Usuarios"     icon={<GroupRoundedIcon/>}             iconPosition="start" {...a11yProps(5)} />
        <Tab label="Ventas"       icon={<AttachMoneyIcon/>}              iconPosition="start" {...a11yProps(6)} />
        <Tab label="Proveedor"    icon={<LocalShippingIcon/>}            iconPosition="start" {...a11yProps(7)} />
        <Tab label="Comentarios"  icon={<AddCommentIcon/>}               iconPosition="start" {...a11yProps(8)} />
        <Tab label="Donaciones"   icon={<VolunteerActivismRoundedIcon/>} iconPosition="start" {...a11yProps(9)} />
        <Tab label="Personalizar" icon={<DesignServicesRoundedIcon/>}    iconPosition="start" {...a11yProps(10)} />
        <Tab label="Configuración" icon={<SettingsRoundedIcon/>}         iconPosition="start" {...a11yProps(11)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AdminInicio/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminEstadisticas datos={datos}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminTemas/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminTematicas/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdminProductos/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AdminUsuarios/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AdminVentas/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <AdminProveedor/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AdminComentarios/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <AdminDonaciones/>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <AdminPersonalizar/>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <AdminConfiguracion/>
      </TabPanel>
    </Box>
  );
}