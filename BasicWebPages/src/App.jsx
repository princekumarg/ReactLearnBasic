// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import User from './components/User/User'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'

function App() {

  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user/:userid' element={<User />} />
            <Route path='github' element={<Github />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
