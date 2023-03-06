import React from 'react'
import NavBar from './NavBar'
import Intro from './sections/Intro'
import AboutMe from './sections/AboutMe'
import Pastillas from './sections/Pastillas'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
const Inicio = () => {
  return (
    <>
     
      <Intro/>
      <AboutMe/>
    <Pastillas/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default Inicio
