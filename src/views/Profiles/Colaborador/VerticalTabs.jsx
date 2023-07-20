import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useMediaQuery } from '@mui/material'
import { ColaboradorInicio } from './Inicio/ColaboradorInicio'
import { ColaboradorConfiguracion } from './Configuracion/ColaboradorConfiguracion'

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

export default function VerticalTabs() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [value, setValue] = useState(0);

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
        <Tab label="Inicio"         icon={<HomeRoundedIcon/>}      iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(0)} />
        <Tab label="Configuración"  icon={<SettingsRoundedIcon/>}  iconPosition={isSmallScreen ? "start": "top"} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ColaboradorInicio/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ColaboradorConfiguracion/>
      </TabPanel>
    </Box>
  );
}
