import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

export const ToggleThemeSticky = ({isDarkMode, handleThemeChange}) => {
  const theme = useTheme();  

  const styles = `
    .toggle--checkbox {
      user-select: none;
      display: none;
    }

    .toggle--checkbox:checked + .toggle--label {
      cursor: pointer;
      background: ${theme.palette.primary.dark};
      /** Change the cloud to stars **/
      /** Change the sun into the moon **/
      /** Show the dimples on the moon **/
      border: 1.9px solid ${theme.palette.primary.light};
    }
    .toggle--checkbox:checked + .toggle--label .toggle--label-background {
      cursor: pointer;
      left: 22.8px;
      width: 1.9px;
    }
    .toggle--checkbox:checked + .toggle--label .toggle--label-background:before {
      cursor: pointer;
      width: 1.9px;
      height: 1.9px;
      top: -9.5px;
    }
    .toggle--checkbox:checked + .toggle--label .toggle--label-background:after {
      cursor: pointer;
      width: 1.9px;
      height: 1.9px;
      left: -11.4px;
      top: 7.6px;
    }
    .toggle--checkbox:checked + .toggle--label:before {
      cursor: pointer;
      background: #FFF;
      border-color: #e8e8ea;
      animation-name: switch;
      animation-duration: 150ms;
      animation-fill-mode: forwards;
    }
    .toggle--checkbox:checked + .toggle--label:after {
      cursor: pointer;
      transition-delay: 150ms;
      opacity: 1;
    }
    .toggle--label {
      user-select: none;
      cursor: pointer;
      /** Placeholder element, starting at blue **/
      width: 76px;
      height: 38px;
      background: ${theme.palette.info.dark};
      border-radius: 38px;
      border: 1.9px solid ${theme.palette.info.light};
      display: flex;
      position: relative;
      transition: all 150ms ease-in;
      /** The sun cloud and moon stars **/
      /** Sun/Moon element **/
      /** Gray dots on the moon **/
    }
    .toggle--label-background {
      cursor: pointer;
      width: 3.8px;
      height: 1.9px;
      border-radius: 1.9px;
      position: relative;
      background: #FFF;
      left: 51.3px;
      top: 17.1px;
      transition: all 150ms ease-in;
    }
    .toggle--label-background:before {
      cursor: pointer;
      content: "";
      position: absolute;
      top: -1.9px;
      width: 15.2px;
      height: 1.9px;
      border-radius: 1.9px;
      background: #FFF;
      left: -7.6px;
      transition: all 150ms ease-in;
    }
    .toggle--label-background:after {
      cursor: pointer;
      content: "";
      position: absolute;
      top: 1.9px;
      width: 15.2px;
      height: 1.9px;
      border-radius: 1.9px;
      background: #FFF;
      left: -3.8px;
      transition: all 150ms ease-in;
    }
    .toggle--label:before {
      cursor: pointer;
      animation-name: reverse;
      animation-duration: 150ms;
      animation-fill-mode: forwards;
      transition: all 150ms ease-in;
      content: "";
      width: 31.6px;
      height: 31.6px;
      border: 1.9px solid ${theme.palette.warning.light};
      top: 1.52px;
      left: 1.52px;
      position: absolute;
      border-radius: 31.16px;
      background: ${theme.palette.warning.light};
    }
    .toggle--label:after {
      cursor: pointer;
      transition-delay: 0ms;
      transition: all 250ms ease-in;
      position: absolute;
      content: "";
      box-shadow: #e8e8ea -4.94px 0 0 0.76px, #e8e8ea -9.12px 5.32px 0 -0.76px;
      left: 54.34px;
      top: 8.74px;
      width: 3.8px;
      height: 3.8px;
      background: transparent;
      border-radius: 50%;
      opacity: 0;
    }

    @keyframes switch {
      0% {
        left: 1.52px;
      }
      60% {
        left: 1.52px;
        width: 42.56px;
      }
      100% {
        left: 39.52px;
        width: 31.16px;
      }
    }
    @keyframes reverse {
      0% {
        left: 39.52px;
        width: 31.16px;
      }
      60% {
        left: 27.36px;
        width: 42.56px;
      }
      100% {
        left: 1.52px;
      }
    }
    `;

  return (
    <Box sx={{styles}}>
                                                                                                  {/* if you use the local data color theme the value will be "true" for choose one of the two, if you use the data from firebase need to change to "dark" to get the theme with that string in the DB */}
        <Box component={"input"} type="checkbox" id="toggle" className="toggle--checkbox" checked={isDarkMode === true} onChange={handleThemeChange} />
        <Box component={"label"} htmlFor="toggle" className="toggle--label">
          <Box className="toggle--label-background"></Box>
        </Box>
        <Box className="background"></Box>
    </Box>
  )
}
