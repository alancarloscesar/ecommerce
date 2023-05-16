import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import { themeApp } from './themes/index.tsx';
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/index.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={themeApp}>
    <BrowserRouter>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>
)


