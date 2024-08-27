import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavbarComponents } from './components'
import { AboutPages, HomePages,ProjectsPages } from './pages'

const App = () => {
  return (
    <main className=' bg-slate-300/20'>
      <NavbarComponents/>
      <Routes>
        <Route path='/' element={<HomePages/>} />
        <Route path='/about' element={<AboutPages/>}/>
        <Route path='/projects' element={<ProjectsPages/>}/>

      </Routes>
    </main>
  )
}

export default App