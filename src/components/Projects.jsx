import React from 'react'
import kyberMin from "../../src/pics/kyber_dispositivos.jpg"
import walletfyMin from "../../src/pics/walletfy_min.jpg"
import blueocean from '../../src/pics/blueocean_min2.jpg'
import thorkey from '../../src/pics/thorkey_min.jpg'
import bsz from '../../src/pics/bzStore-min.jpg'
import clean from '../../src/pics/cleanhouse-mockup1.jpg'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import TextConvert from './TextConvert'

const Projects = () => {
  const {t} = useTranslation();

  return (
    <>
    <section className='container pt-4 pb-5'>
         <h3 className='title-home m-5'>{t("projects.title")}</h3>
         <p className='project-subtitle'>
          <TextConvert text={t("projects.subtitle")} />
         </p>         

        <div className="row justify-content-center my-5 projects-wrapper">
        <motion.div className="col-12 col-lg-5 m-2 miniatura shadow"
             whileHover={{ scale: [null, 1.2, 1.1] }}
             transition={{  type: "spring", stiffness: 400, damping: 20 }}>  
               <a href='/cleanhouse'> <img src={clean} className="w-100 miniatura-pic" alt="..."/></a>
            </motion.div>

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
