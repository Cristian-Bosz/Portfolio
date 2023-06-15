import React from 'react'
import kyber_dis from '../pics/keyber_dispositivos.png'
import kyber_admin from '../pics/kyber_admin.png'
import kyber_pan from '../pics/kyber_panel.png'
import kyber_per from '../pics/kyber_perfil.png'
import { motion } from "framer-motion"
import html from '../icons/html-1.svg'
import css from '../icons/css-3.svg'
import php from '../icons/php.svg'
import mysql from '../icons/mysql-6.svg'
import kyberList from '../arrays/kyberList'



const Kyber = () => {
  return (
    <>
    <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
     <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='title1-kyber text-center'>Sables personalizados</h1>
                        <p className='p-home text-center'>Kyber es una tienda digital que se dedica a la venta de réplicas de sables de luz de star wars. </p>
                        <a href='https://github.com/Cristian-Bosz/kyber' Target="_blank" className='btn btn-dark fw-bold mx-2'>Explora el Github del proyecto</a>
                        <a href="https://drive.google.com/file/d/1XSazpClQ7FSJoA9rHPorFpKNbVsDuZbz/view?usp=sharing" target="_blank"  rel="noreferrer" className='btn btn-outline-dark fw-bold mx-2 my-2'>Mira el PDF</a>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center d-none d-lg-block'>
                        <img src={kyber_dis} alt='mockup de la tienda kyber en distintos dispositivos' className='w-100'/>
                    </div>
                </div>
    </section>



    <article className='container-fluid '>
        <div className='container bg-pasti-kyber shadow'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <p className='texto-kyber mx-2 mt-4'>Este proyecto es un ecommerce programado en PHP Procedural.</p>
                </div>
                <div className='col-12 col-lg-6 my-5'>
                    <div className='row align-items-center justify-content-center'>
                         <div className='col-5 col-md-3 card-icon-kyber'>
                            <motion.img src={html} alt='icono de html' className="sk-icon-kyber m-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>
                        <div className='col-5 col-md-3 card-icon-kyber'>
                            <motion.img src={css} alt='icono de css' className="sk-icon-kyber m-2" 
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>
                        <div className='col-5 col-md-3 card-icon-kyber'>
                            <motion.img src={php} alt='icono de php' className="sk-icon-kyber m-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>              
                        <div className='col-5 col-md-3 card-icon-kyber'>
                            <motion.img src={mysql} alt='icono de mysql' className="sk-icon-kyber m-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>
                    </div>
                       
                </div>
              
            </div>
        </div>

    </article>


    <section className='container'>
        <div className='row align-items-start my-5'>
            <div className='col-12 col-lg-6'>
            <img src={kyber_per} alt="imagen del editar perfil en la tienda de kyber" className="w-100 border-kyber shadow-sm my-1  d-lg-block"/>
            <img src={kyber_admin} alt="imagen del panel de administracion en la tienda de kyber" className="w-100 border-kyber shadow-sm my-1 d-none d-lg-block"/>
            <img src={kyber_pan} alt="imagen del panel de productos en la tienda de kyber" className="w-100 border-kyber shadow-sm my-1 d-none d-lg-block"/>
            </div>
            <div className='col-12 col-lg-6'>
                <ul className='my-5 text-start'>
                    <h3 className='title-kyber my-5'>Requisitos que cumplí</h3>
                    
                    {kyberList.map(item => (
                        <li key={item.id} className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center li-icons-kyber'>
                            <i className={item.icon}></i>
                            </div>
                            <div className='col-10'>
                              <p>{item.p}</p>  
                            </div>
                        </div>
                        </li>
                    ))}


                </ul>
            </div>
        </div>

    </section>

    </>
  )
}

export default Kyber
