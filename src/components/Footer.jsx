import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation();

  return (
    <>
     <footer className='container-fluid'>
      <div className='container'>
        <div className='row align-items-start'>
      
          <div className='col-12'>
           <h3 className='ft-title mt-5 mb-3 '>{t("footer.title")}</h3>
           <p className='p-footer text-center mt-5 mb-3'>{t("footer.p")}</p>
            <div className='row align-items-start justify-content-center mb-5 mt-4'>
             
              <div className='col-1 social-icon'>
                <motion.div  whileHover={{ scale: [null, 1.4, 1.2] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}> 
                            <a href="https://www.linkedin.com/in/cristian-bosz/" Target="_blank"><i class="bi bi-linkedin"></i> </a>
                        </motion.div>
               
                </div>
              <div className='col-1 social-icon'>
              <motion.div  whileHover={{ scale: [null, 1.4, 1.2] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>
                              <a href="mailto:cristianbosz@hotmail.com?Subject=Me%20interesa%20tu%20trabajo%20" Target="_blank"><i class="bi bi-envelope "></i></a></motion.div>
                
              </div>
              <div className='col-1 social-icon'>
              <motion.div  whileHover={{ scale: [null, 1.4, 1.2] }}
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
