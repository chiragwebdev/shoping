import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './componet/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'



function App() {
  useEffect(() => {
    document.body.classList.add("dark")
    document.getElementById("root").classList.add('antialiased', 'dark:text-white', 'bg-white', 'dark:bg-bgtheme', 'h-screen','overflow-auto')
    if (!localStorage.getItem("shopping data")){
      localStorage.setItem("shopping data", '[]')
    }
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
