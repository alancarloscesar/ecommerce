import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/index.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </BrowserRouter>
)


