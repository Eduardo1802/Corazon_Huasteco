import React from 'react';
import { Box } from '@mui/material';

export const ToggleTheme = ({isDarkMode, handleThemeChange}) => {
  return (
    <Box sx={{styles}}>
        <Box component={"input"} type="checkbox" id="toggle_checkbox" checked={isDarkMode} onChange={handleThemeChange} />
        <Box component={"label"} htmlFor="toggle_checkbox">
          <Box id="star">
            <Box className="star" id="star-1">★</Box>
            <Box className="star" id="star-2">★</Box>
          </Box>
          <Box id="moon"></Box>
        </Box>
    </Box>
  )
}

export const styles = `
#toggle_checkbox{
  display: none;
  user-select: none;
}

label{
  display: block;
  position: relative;
  width: 75.4px;
  height: 36.4px;
  background-color: #77b5fe;
  border-radius: 36.4px;
  cursor: pointer;
  transition: 0.3s ease background-color;
  overflow: hidden;
  user-select: none;
}

#star{
  position: absolute;
  top: 8.45px;
  left: 8.45px;
  width: 19.5px;
  height: 19.5px;
  background-color: #fafd0f;
  transform: scale(1);
  border-radius: 50%;
  transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
  z-index: 1;
  user-select: none;
}

#star-1{
  position: relative;
  user-select: none;
}

#star-2{
  position: absolute;
  transform: rotateZ(36deg);
  user-select: none;
}

.star{
  top: 0;
  left: -4.55px;
  font-size: 35.1px;
  line-height: 18.2px;
  color: #fafd0f;
  transition: 0.3s ease color;
  user-select: none;
}

#moon{
  position: absolute;
  bottom: -33.8px;
  right: 5.2px;
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s ease bottom;
  user-select: none;
}

#moon:before{
  content: "";
  position: absolute;
  top: -7.8px;
  left: -11.05px;
  width: 26px;
  height: 26px;
  background-color:#03a9f4;
  border-radius: 50%;
  transition: 0.3s ease background-color;
  user-select: none;
}

#toggle_checkbox:checked + label{
  background-color: #000;
  user-select: none;
}

#toggle_checkbox:checked + label #star{
  top: 1.95px;
  left: 41.6px;
  transform: scale(0.3);
  background-color: yellow;
  user-select: none;
}

#toggle_checkbox:checked + label .star{
  color: yellow;
  user-select: none;
}

#toggle_checkbox:checked + label #moon{
  bottom: 5.2px;
  user-select: none;
}

#toggle_checkbox:checked + label #moon:before{
  background-color: #000;
  user-select: none;
}
`;