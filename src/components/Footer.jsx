import React from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <>
     <footer className='container-fluid'>
      <div className='container'>
        <div className='row align-items-start'>
      
          <div className='col-12'>
           <h3 className='ft-title mt-5 mb-3 '>Contactame en mis redes</h3>
           <p className='p-footer text-center mt-5 mb-3'>Si estás buscando a un desarrollador web front-end junior apasionado y motivado, por favor no dudes en contactarme. <br/>
           Me encantaría discutir tus proyectos y cómo podemos trabajar juntos para crear experiencias de usuario excepcionales para tu sitio web.</p>
            <div className='row align-items-start justify-content-center mb-5 mt-4'>
             
              <div className='col-1 social-icon'>
                <motion.div  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}> 
                            <a href="https://www.linkedin.com/in/cristian-bosz/" Target="_blank"><i class="bi bi-linkedin"></i> </a>
                        </motion.div>
               
                </div>
              <div className='col-1 social-icon'>
              <motion.div  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>
                              <a href="mailto:cristianbosz@hotmail.com?Subject=Me%20interesa%20tu%20trabajo%20" Target="_blank"><i class="bi bi-envelope "></i></a></motion.div>
                
              </div>
              <div className='col-1 social-icon'>
              <motion.div  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>
                              <a href="https://github.com/Cristian-Bosz" Target="_blank"> <i class="bi bi-github "></i></a>
                             </motion.div>
                
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    
     </footer>
    </>
  )
}

export default Footer
