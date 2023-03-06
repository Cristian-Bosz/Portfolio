import React from 'react'
import kyberMin from "../../src/pics/kyber_dispositivos.jpg"
import walletfyMin from "../../src/pics/walletfy_min.jpg"
import blueocean from '../../src/pics/blueocean_min2.jpg'
import thorkey from '../../src/pics/thorkey_min.jpg'
import { motion } from "framer-motion"
import memoji from "../../src/pics/thumbnail_image3.png"

const Projects = () => {
  return (
    <>
    <section className='container pt-4 pb-5'>
         <h3 className='title-home m-5'>Estos son mis últimos proyectos</h3>
         <p className='p-proyecto text-center mt-4 mb-5 mx-4'>He trabajado en varios proyectos personales para mejorar mis habilidades y poner en práctica lo que he aprendido en la escuela.<br/> Me gusta trabajar en proyectos desafiantes que me permitan aplicar mis conocimientos y habilidades, y estoy comprometido a proporcionar soluciones creativas e innovadoras para cualquier problema que se presente. </p>
        <div className="row justify-content-center my-5">
            <motion.div className="col-12 col-lg-5 m-2 miniatura shadow"
             whileHover={{ scale: [null, 1.2, 1.1] }}
             transition={{  type: "spring", stiffness: 400, damping: 20 }}>  
               <a href='/walletfy'> <img src={walletfyMin} className="w-100 miniatura-pic" alt="..."/></a>
            </motion.div>
            
            <motion.div className="col-12 col-lg-5 m-2 miniatura shadow"
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{  type: "spring", stiffness: 400, damping: 20 }}>
              
              <a href='/kyber'> <img src={kyberMin} className="w-100 miniatura-pic" alt="..."/></a>
              
            </motion.div>
            <motion.div className="col-12 col-lg-5 m-2 miniatura shadow"
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{  type: "spring", stiffness: 400, damping: 20 }}>
             
             <a href='/blueocean'> <img src={blueocean} className="w-100 miniatura-pic" alt="..."/></a>
            
            </motion.div>
            <motion.div className="col-12 col-lg-5 m-2 miniatura shadow"
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{  type: "spring", stiffness: 400, damping: 20 }}>
             
             <a href='/thorkey'><img src={thorkey} className="w-100 miniatura-pic" alt="..."/></a>
              </motion.div>
           
        </div>
    
    </section>
    <article className='container mb-5'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-4'>
            <img src={memoji} alt="meditando" className='avatar-proyecto'/>

            </div>
                <div className='col-12 col-lg-8'>
                    <h2 className='title-home'>Estos proyectos me permitieron ganar experiencia en</h2>
                    <ul className='text-start'>
                            <li className='wallet-li shadow-sm'>
                                <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-check"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>Trabajo en equipo</h3> 
                                    </div>
                                
                                </div> 
                            </li>
                            <li className='wallet-li shadow-sm'>
                                <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-check"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>Compartir responsabilidades</h3> 
                                        
                                    </div>
                                
                                </div> 
                            </li>
                            <li className='wallet-li shadow-sm'>
                                <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-check"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>Desarrollar tareas con un
objetivo y un plazo determinado</h3> 
                                        
                                    </div>
                                
                                </div> 
                            </li>
                            <li className='wallet-li shadow-sm'>
                                <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-check"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>Metodologías ágiles</h3> 
                                      
                                    </div>
                                
                                </div> 
                            </li>
                    </ul>
              </div>
          </div>
      </article>
    </>
  )
}

export default Projects
