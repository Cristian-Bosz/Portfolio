import React from 'react'
import memoji from "../../src/pics/thumbnail_image4.png"


const AboutMe = () => {
  return (
    <>
      <section className='container-fluid'>
        <div className="container">        
              <h3 className='title-home mt-5'>Sobre mí</h3>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6 my-5'>
                      <img src={memoji} alt="programando" className='avatar-about'/>
                    </div>
                    <div className='col-12 col-lg-6 bg-in'>
                        <div className='my-5'>
                          <p className='p-about mt-4 mb-5 mx-2'>Tengo 23 años y soy un <strong>Desarrollador Web Front-End Junior</strong> apasionado por el desarrollo web y la creación de <strong>experiencias de usuario únicas y atractivas</strong>. Si bien soy nuevo en la industria, tengo una sólida formación en HTML, CSS y JavaScript, y estoy emocionado por seguir aprendiendo y creciendo en mi carrera como desarrollador. </p>
                      
                          <p className='p-about mt-3 mb-5 mx-2'>Soy un trabajador <strong>comprometido, responsable y colaborativo,</strong> que trabaja bien en equipo y se adapta fácilmente a cualquier ambiente de trabajo. Estoy <strong>motivado</strong> y siempre busco mejorar mis habilidades y ampliar mi conocimiento sobre las últimas tecnologías y tendencias en la industria del desarrollo web.</p>
                          <p className='p-about mt-4 mb-5 mx-2'>Estoy emocionado por comenzar mi carrera en el desarrollo web y estoy buscando oportunidades para trabajar en proyectos <strong>emocionantes y desafiantes</strong>  que me permitan <strong>crecer y mejorar como desarrollador</strong>.</p>





                          <a href="https://drive.google.com/file/d/1QETDe9vhH3UNZChmj-_9VZwf1S7DFX6o/view?usp=sharing" target="_blank"  className='btn btn-danger fw-bold'>Mira mi CV</a>
                        </div>
                    </div>      
                </div>
        </div>
      </section>

     

       
    </>
  )
}

export default AboutMe
