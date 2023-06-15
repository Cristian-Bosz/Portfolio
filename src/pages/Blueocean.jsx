import React from 'react'
import bluehome from '../pics/blueocean_home.png'
import blueabout from '../pics/blueocean_about.png'
import html from '../icons/html-1.svg'
import vue from '../icons/vue-js-1.svg'
import css from '../icons/css-3.svg'
import { motion } from "framer-motion"
import bluelogo from '../pics/blueocean.png'

const Blueocean = () => {
  return (
    <>
    <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
      <img src={bluelogo} alt="logo de blueocean" className='my-5'/>
    <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='title1-blueocean text-center'>Cuidemos nuestro planeta</h1>
                        <p className='p-home text-center'>BlueOcean es una PWA informativa sobre la contaminacion del agua. </p>
                        <a href='https://cristian-bosz.github.io/blueocean/#/home' Target="_blank" className='btn btn-blueocean fw-bold text-white'>Visitá la web</a>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center d-none d-lg-block'>
                        <img src={bluehome} alt='mockup del sitio web de blueocean en formato tablet'/>
                    </div>
                </div>
    </section>

    <article className='container-fluid '>
        <div className='container bg-pasti-blue shadow'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <p className='texto-blue my-3 mx-2'>El objetivo de este proyecto es la creación de una PWA realizada con HMTL, CSS y Vue.js 2.6.</p>
                </div>
                <div className='col-12 col-lg-6 col-lg-6 my-5'>
                    <div className='row align-items-end justify-content-center'>
                         <div className='col-3'>
                            <motion.img src={html} alt="icono de html" className="w-50"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>
                        <div className='col-3'>
                            <motion.img src={css} alt="icono de css" className="w-50" 
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>
                        <div className='col-3'>
                            <motion.img src={vue} alt="icono de vue" className="w-50"
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
                <img src={blueabout} alt="mockup de computadora con la web de blueocean" className='w-100'/>
            </div>
            <div className='col-12 col-lg-6'>
                <ul className='my-5 text-start'>
                    <h3 className='title-blueocean my-5'>Requisitos que cumplí</h3>
                    <li className='lead li-blueocean shadow-sm'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                        <i class="bi bi-columns"></i>
                       
                        </div>
                        <div className='col-10'>
                                <p>Debe tener un <b>ABM</b> para que el usuario pueda manipular datos.</p>
                        </div>
                    </div>
                        
                        
                    </li>
                    <li className='lead li-blueocean shadow-sm'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                        <i class="bi bi-sd-card"></i>
                       
                        </div>
                        <div className='col-10'>
                                <p>Uso de la Api <b>LocalStorage</b> de HTML5, para darle la posibilidad al usuario manipular datos (guardar, borrar, actualizar, etc). Por lo tanto, la aplicación tiene que ofrecer las mismas funcionalidades al usuario si tiene o no tiene red para interactuar con la misma.</p>
                        </div>
                    </div>
                        
                        
                    </li>
                    <li className='lead li-blueocean shadow-sm'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                        <i class="bi bi-code"></i>
                       
                        </div>
                        <div className='col-10'>
                                <p>Debe poseer como mínimo <strong>4 vínculos navegables</strong>. Representando el contenido de cada template de los componentes dentro de router-view.</p>
                        </div>
                    </div>
                        
                         
                    </li>
                    <li className='lead li-blueocean shadow-sm'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                        <i class="bi bi-window-sidebar"></i>
                       
                        </div>
                        <div className='col-10'>
                                <p>El <strong>diseño de la aplicación</strong> debe reflejar un estilo propio, personalizado acorde al producto.</p>
                        </div>
                    </div>
                        
                        
                    </li>
                    <li className='lead li-blueocean shadow-sm'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                        <i class="bi bi-file-earmark-text"></i>
                       
                        </div>
                        <div className='col-10'>
                                <p><strong>Archivo de configuración manifest</strong> con los datos necesarios para la configuración de la app. (icons, display, orientation, start_url, name etc.). Tanto el icono como el splash deben ser representativos de la app en cuestión.</p>
                        </div>
                    </div>
                       
                     
                     </li>
                    <li className='lead li-blueocean shadow-sm'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                        <i class="bi bi-cloud-download"></i>
                       
                        </div>
                        <div className='col-10'>
                                <p>  Por medio del manifest <strong>se debe poder instalar</strong> y brindarle al usuario la mejor experiencia posible.</p>
                        </div>
                    </div>
                     
                      
                    </li>
                    <li className='lead li-blueocean shadow-sm'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                        <i class="bi bi-pencil-square"></i>
                       
                        </div>
                        <div className='col-10'>
                                <p> El <strong>Service worker </strong>debe permitirnos configurar el comportamiento de la app y aprovechar su ciclo de vida para realizar el cache de recursos.</p>
                        </div>
                    </div>
                        
                       
                    </li>
                </ul>
            </div>
        </div>

    </section>

    </>
  )
}

export default Blueocean
