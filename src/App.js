import React from 'react'
import Header from './Components/header'
import Footer from './Components/footer'

import { Routes, Route } from 'react-router-dom'
import Personal from './Pages/Personal'
import Cars from './Pages/Cars'
import Contact from './Pages/Contact'
import Main from './Pages/Main'
import Booking from './Pages/Booking'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:carId" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
