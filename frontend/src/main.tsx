import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/index.tsx';
import { ThemeProvider } from 'styled-components';
import theme from './themes/index.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
)


