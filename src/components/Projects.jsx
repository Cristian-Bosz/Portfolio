import React from 'react'
import kyberMin from "../../src/pics/kyber_dispositivos.jpg"
import walletfyMin from "../../src/pics/walletfy_min.jpg"
import blueocean from '../../src/pics/blueocean_min2.jpg'
import thorkey from '../../src/pics/thorkey_min.jpg'
import bsz from '../../src/pics/bzStore-min.jpg'
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <>
    <section className='container pt-4 pb-5'>
         <h3 className='title-home m-5'>Estos son mis últimos proyectos</h3>
         <p className='project-description text-center mt-4 mb-5 mx-4'>Trabajé en varios proyectos personales para mejorar mis habilidades y poner en práctica lo que aprendí en la escuela.<br/> Me gusta trabajar en <strong>proyectos desafiantes</strong> que me permitan aplicar mis conocimientos y habilidades, y estoy comprometido a proporcionar <strong>soluciones creativas e innovadoras</strong> para cualquier problema que se presente. </p>
        <div className="row justify-content-center my-5">
        <motion.div className="col-12 col-lg-5 m-2 miniatura shadow"
             whileHover={{ scale: [null, 1.2, 1.1] }}
             transition={{  type: "spring", stiffness: 400, damping: 20 }}>  
               <a href='/bszstore'> <img src={bsz} className="w-100 miniatura-pic" alt="..."/></a>
            </motion.div>

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
    
    </>
  )
}

export default Projects
