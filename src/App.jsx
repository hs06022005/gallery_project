import { useState} from 'react'
import Navbar from './Component/Navbar'
import Image from './Pages/Image'
import useFetchImage from './Component/Api'
import { Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer'
import Home from './Pages/Home' 
import Contact from './Pages/Contact'


function App() {
  return (
    <div>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Image" element={<Image />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
