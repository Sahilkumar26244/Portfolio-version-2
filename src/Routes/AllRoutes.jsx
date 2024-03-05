import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Resume from '../Pages/Resume'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'
import Skills from '../Pages/Skills'

function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </>
  )
}

export default AllRoutes