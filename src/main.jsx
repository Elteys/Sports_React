import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import Locations from './Locations.jsx'
import Credits from './Credits.jsx'
import Gallery from './Gallery.jsx'

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
    <BrowserRouter basename="/Sports_React">
      <Routes>
        <Route path="/Sports_React/" element={<App />} />
        <Route path="/Sports_React/Credits" element={<Credits />} />
        <Route path="/Sports_React/Gallery" element={<Gallery />} />
        <Route path="/Sports_React/Locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
