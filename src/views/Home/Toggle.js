import React from 'react';
import "./Toggle.css";
import { Box } from '@mui/material';

export const Toggle = ({isDarkMode, handleThemeChange}) => {
  return (
    <div>
        <Box component={"div"} className="wrapper">
        <Box component={"input"} type="checkbox" id="hide-checkbox" checked={isDarkMode} onChange={handleThemeChange} />
            <Box component={"label"} htmlFor="hide-checkbox" className="toggle">
                <Box component={"span"} className="toggle-button">
                <Box component={"span"} className="crater crater-1"></Box>
                <Box component={"span"} className="crater crater-3"></Box>   
                <Box component={"span"} className="crater crater-2"></Box>
                <Box component={"span"} className="crater crater-4"></Box>
                <Box component={"span"} className="crater crater-5"></Box>
                <Box component={"span"} className="crater crater-6"></Box>
                <Box component={"span"} className="crater crater-7"></Box>
                </Box>
                <Box component={"span"} className="star star-2"></Box>
                <Box component={"span"} className="star star-1"></Box>
                <Box component={"span"} className="star star-3"></Box>
                <Box component={"span"} className="star star-4"></Box>
                <Box component={"span"} className="star star-5"></Box>
                <Box component={"span"} className="star star-6"></Box>
                <Box component={"span"} className="star star-7"></Box>
                <Box component={"span"} className="star star-8"></Box>
            </Box>
        </Box>
    </div>
  )
}
