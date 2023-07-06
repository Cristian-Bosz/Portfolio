import React from 'react'
import kyber_dis from '../pics/keyber_dispositivos.png'
import kyber_admin from '../pics/kyber_admin.png'
import kyber_pan from '../pics/kyber_panel.png'
import kyber_per from '../pics/kyber_perfil.png'
import kyberList from '../arrays/kyberList'
import { useTranslation } from 'react-i18next'
import kyberlogo from '../pics/kyber-logo.png'
import frontendPills from '../arrays/frontendPills'
import backendPills from '../arrays/backendPills'
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/dist/tippy.css';
import libreriesPills from '../arrays/libreriesPills'

const Kyber = () => {
  const {t} = useTranslation();

  return (
    <>
    <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
    <article className='container my-4'>        
                <img src={kyberlogo} alt='logo de la tienda kyber'/>
    </article> 
     
     <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='title1-kyber text-center'>{t("kyber.title")}</h1>
                        <p className='project-description text-center'>{t("kyber.description")} </p>
                        <a href='https://github.com/Cristian-Bosz/kyber' Target="_blank" className='btn btn-dark btn-app fw-bold mx-2'>{t("kyber.button1")}</a>
                        <a href="https://drive.google.com/file/d/1XSazpClQ7FSJoA9rHPorFpKNbVsDuZbz/view?usp=sharing" target="_blank"  rel="noreferrer" className='btn btn-kyber btn-app fw-bold mx-2 my-2'>{t("kyber.button2")}</a>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img src={kyber_dis} alt='mockup de la tienda kyber en distintos dispositivos' className='w-100'/>
                    </div>
                </div>
    </section>



    <article className='container-fluid '>
        <div className='container bg-pasti-kyber shadow'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <p>{t("kyber.tools")}</p>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className="wrapper-kyber-pill">    
                        <ul>
                            {
                                frontendPills.slice(0,2).map(item => (
                                    <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
                                    <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/>
                                    </li>
                                    </Tippy>
                                ))
                            }
                            {
                                [libreriesPills.slice(1)[0]].map(item => (
                                    <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
                                    <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/>
                                    </li>
                                    </Tippy>
                                ))
                            }
                            
                            {
                              backendPills.slice(0,2).map(item => (
                                <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
                                <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/>
                                </li>
                                </Tippy>
                              ))
                            }
                        </ul>
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
                <ul className='text-start'>
                    <h3 className='title-kyber'>{t("kyber.title2")}</h3>
                    
                    {kyberList.map(item => (
                        <li key={item.id} className='lead li-kyber shadow-sm'>
                        <div className='row'>
                            <div className='col-2 text-center li-icons-kyber'>
                            <i className={item.icon}></i>
                            </div>
                            <div className='col-10'>
                              <p>{t(item.p)}</p>  
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
