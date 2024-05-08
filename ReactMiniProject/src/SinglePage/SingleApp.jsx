import React from 'react'
import Home from '../../../singlepageapp/src/pages/Home/Home'
import Navbar from '../../../singlepageapp/src/pages/Navbar/Navbar'
import About from '../../../singlepageapp/src/pages/About/About'
import Skills from '../../../singlepageapp/src/pages/Work/Skills'
import Project from '../../../singlepageapp/src/pages/Projects/Project'
import './single.css'
function SingleApp() {
  return (
    <div id="singleapp">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Project/>
      
    </div>
  )
}

export default SingleApp
