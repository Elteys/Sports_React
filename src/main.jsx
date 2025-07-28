import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import App from './App.jsx' // będzie używane jako layout z Outlet
import Credits from './Credits'
import Gallery from './Gallery'
import Locations from './Locations'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Sports_React"> {/* Ustaw to TYLKO jeśli działasz pod /Sports_React/ */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Credits" element={<Credits />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Locations" element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
