import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})

console.log("hello from a code space or remote vs code, idk ¯\_(ツ)_/¯ ")

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
      <CssBaseline />
      <App />
    </>
);