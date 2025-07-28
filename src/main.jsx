import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import Locations from './Locations.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Species from './Species'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Credits" element={<Credits />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
   <Footer />
  </StrictMode>,
)
 */
