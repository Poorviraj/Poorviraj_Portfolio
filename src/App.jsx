import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Project from './pages/Project'
import Service from './pages/Service'

function App() {
  return (
    <div className='  ' >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
