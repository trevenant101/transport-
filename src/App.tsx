import { useState } from 'react'

import './App.css'
import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Home"
          element={<Home/>}
        />
        <Route
          path="/Services"
          element={<Services/>}
        />
        <Route
        path='/AboutUs'
        element={<AboutUs/>}/>
          <Route
        path='/ContactUs'
        element={<ContactUs/>}/>


      </Routes>

    </>
  )
}

export default App
