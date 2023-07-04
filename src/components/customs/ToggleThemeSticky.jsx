import React from 'react';
import { Box } from '@mui/material';

export const ToggleThemeSticky = ({isDarkMode, handleThemeChange}) => {
  return (
    <Box sx={{styles}}>
        <Box component={"input"} type="checkbox" id="toggle" className="toggle--checkbox" checked={isDarkMode} onChange={handleThemeChange} />
        <Box component={"label"} htmlFor="toggle" className="toggle--label">
          <Box className="toggle--label-background"></Box>
        </Box>
        <Box className="background"></Box>
    </Box>
  )
}

export const styles = `
.toggle--checkbox {
  display: none;
}

.toggle--checkbox:checked + .toggle--label {
  cursor: pointer;
  background: #6b7abb;
  border-color: #5d6baa;
  /** Change the cloud to stars **/
  /** Change the sun into the moon **/
  /** Show the dimples on the moon **/
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
  animation-duration: 350ms;
  animation-fill-mode: forwards;
}
.toggle--checkbox:checked + .toggle--label:after {
  cursor: pointer;
  transition-delay: 350ms;
  opacity: 1;
}
.toggle--label {
  cursor: pointer;
  /** Placeholder element, starting at blue **/
  width: 76px;
  height: 38px;
  background: #96dcee;
  border-radius: 38px;
  border: 1.9px solid #72cce3;
  display: flex;
  position: relative;
  transition: all 350ms ease-in;
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
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  transition: all 350ms ease-in;
  content: "";
  width: 31.6px;
  height: 31.6px;
  border: 1.9px solid #f5eb71;
  top: 1.52px;
  left: 1.52px;
  position: absolute;
  border-radius: 31.16px;
  background: #fffaa8;
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