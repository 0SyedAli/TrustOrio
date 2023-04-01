import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Lawyer from '../pages/Lawyer';
import Contact from '../pages/Contact';
import Profile from '../pages/Profile';
import Heads from '../component/Heads';
// import Sidebar from '../pages/Sidebar';
// import Dash from '../pages/Dash'
// import DashMobile from '../pages/DashMobile'

const RoutesNav = () => {
  return (
    <>
    <Heads />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lawyer' element={<Lawyer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
    </>
  )
}

export default RoutesNav