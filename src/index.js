import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <CssBaseline/>
        <App />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

