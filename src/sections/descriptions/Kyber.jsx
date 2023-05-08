import React from 'react'
import kyber_dis from '../../pics/keyber_dispositivos.png'
import kyber_admin from '../../pics/kyber_admin.png'
import kyber_pan from '../../pics/kyber_panel.png'
import kyber_per from '../../pics/kyber_perfil.png'
import { motion } from "framer-motion"
import html from '../../icons/html-1.svg'
import css from '../../icons/css-3.svg'
import php from '../../icons/php.svg'
import bootstrap from '../../icons/bootstrap-5-1.svg'
import mysql from '../../icons/mysql-6.svg'
import Footer from '../Footer'
import kyber_pdf from '../../pdfs/Kyber_compressed.pdf'
const Kyber = () => {
  return (
    <>
    <a class="btn-wsp" href="/"><i class="bi bi-arrow-left-circle"></i></a>
     <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='title1-kyber text-center'>Sables personalizados</h1>
                        <p className='p-home text-center'>Kyber es una tienda digital que se dedica a la venta de réplicas de sables de luz de star wars. </p>
                        <a href='https://github.com/Cristian-Bosz/kyber' Target="_blank" className='btn btn-dark fw-bold mx-2'>Explora el Github del proyecto</a>
                        <a href={kyber_pdf} target="_blank" rel="noopener noreferrer" download="Cristian_Bosz_Proyecto_Kyber.pdf" className='btn btn-outline-dark fw-bold mx-2 my-2'>Descargá el PDF</a>
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
                    

                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-filetype-sql"></i>
                            </div>
                            <div className='col-10'>
                                <p>El DER de la base de datos y su código SQL de creación e inserción de datos.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-database"></i>
                            </div>
                            <div className='col-10'>
                                <p> La web debe conectarse a esa base de datos </p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-braces"></i>
                            </div>
                            <div className='col-10'>
                                <p> Uso de las funciones nativas de php <strong>require e include</strong> para el manejo de plantillas. </p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-cloud-check"></i> 
                            </div>
                            <div className='col-10'>
                                    <p><strong>Verificación de todos los datos</strong> recibidos por GET y POST desde php.</p>
                            </div>
                        </div>   
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                            <i class="bi bi-columns-gap"></i>
                            </div>
                            <div className='col-10'>
                                <p>El <b>CRUD</b> (Create, Read, Update & Delete) de una tabla de la base de datos (en el panel).</p>
                            </div>
                        </div>   
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-cart-check"></i>     
                            </div>
                            <div className='col-10'>
                                <p><strong>El carrito funcional</strong>, es decir, elegir un producto/servicio, agregarlo al carrito, visualizar el total y “pagar”. Se recuerda que no hay pasarela de pago, solo la simulación del envío de datos de pago.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-person-check"></i>
                            </div>
                            <div className='col-10'>
                                    <p><strong>Solo el usuario registrado</strong> (no admin) podrá realizar la compra/contratación del producto/servicio.</p>
                            </div>
                        </div>    
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-box-arrow-in-left"></i>
                            </div>
                            <div className='col-10'>
                                <p> <strong>Login y verificación</strong>  de usuario admin al panel.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-person-vcard"></i>                 
                            </div>
                            <div className='col-10'>
                                <p> <b>Registro</b> de usuarios.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'> 
                                <i class="bi bi-patch-check"></i>
                            </div>
                            <div className='col-10'>
                                <p>   <strong>Tener bien validados los ID</strong> que se piden en el ver detalle, de forma tal que si se pide un registro inexistente <strong>muestre un mensaje de error apropiado</strong>.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-person-workspace"></i>
                            </div>
                            <div className='col-10'>
                                <p> Que el <b>usuario</b> registrado <strong>pueda interactuar</strong> con los datos del SQL.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-exclamation-triangle"></i>
                            </div>
                            <div className='col-10'>
                                <p> Todo ABM debe <strong>mostrar un mensaje indicando si se realizó o no la operación.</strong></p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'> 
                                <i class="bi bi-cloud-upload"></i> 
                            </div>
                            <div className='col-10'>
                                <p> Upload de archivos.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>  
                                <i class="bi bi-database-check"></i>
                            </div>
                            <div className='col-10'>
                                <p>   Definir el tipo de dato más <b>óptimo</b> de cada campo del SQL.</p>
                            </div>
                        </div>
                    </li>
                    <li className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center'>
                                <i class="bi bi-database-check"></i>
                            </div>
                            <div className='col-10'>
                                <p>Tener bien definidos los campos UNIQUE y NOT NULL del SQL</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    </section>

    <Footer/>
    </>
  )
}

export default Kyber
