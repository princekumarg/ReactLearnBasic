import './App.css'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Project from './pages/Projects/Project'
import Skills from './pages/Work/Skills'

function App() {
  

  return (
    <div id="app">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Project/>
       <Contact/>
    </div>
  )
}

export default App
