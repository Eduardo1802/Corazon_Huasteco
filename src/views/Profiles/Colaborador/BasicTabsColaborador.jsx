import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { ColaboradorInicio } from './Inicio/ColaboradorInicio'
import { ColaboradorConfiguracion } from './Configuracion/ColaboradorConfiguracion'

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
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BasicTabsColaborador = () => {
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
        <Tab label="Configuración"  icon={<SettingsRoundedIcon/>}         iconPosition="start" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ColaboradorInicio/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ColaboradorConfiguracion/>
      </TabPanel>
      
    </Box>
  )
}
