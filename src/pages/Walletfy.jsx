import React from 'react'
import home from '../pics/home.png'
import analisis from '../pics/home2.png'
import walletfy from '../pics/Walletfy_Logo.png'
import wally from '../pics/wallyTorta.png'
import wally2 from '../pics/wallytips.png'
import walletfyList from '../arrays/walletfyList'
import { useTranslation } from 'react-i18next'
import TextConvert from '../components/TextConvert'
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/dist/tippy.css';
import libreriesPills from '../arrays/libreriesPills'
import frontendPills from '../arrays/frontendPills'
import backendPills from '../arrays/backendPills'

const Walletfy = () => {
  const {t} = useTranslation();

  return (
    <>
            <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
            <article className='container my-4'>    
                    <div className=''>
                        <img src={walletfy} alt="encabezado con el logo de walletfy" className='walletfy-icon'/>
                    </div>
            </article>

            <section className='container'>
                        <div className='row my-5'>
                            <div className='col-12 col-lg-6 align-self-sm-center my-5'>
                                <h1 className='titulo-home text-center'>{t("walletfy.title")}</h1>
                                <p className='project-description text-center'>{t("walletfy.description")} </p>
                                <a href='https://walletfy-ad0ab.web.app' Target="_blank"  className='btn btn-info btn-app fw-bold text-white'>{t("walletfy.button")}</a>
                                <a href='https://landing-walletfy.vercel.app/' Target="_blank"  className='btn fw-bold mx-1 btn-landing'>{t("walletfy.button2")}</a>
                            </div>
                            <div className='col-12 col-lg-6 d-flex justify-content-center'>
                                <img src={home} alt='mockup del home de walletfy' className='mockup-walletfy'/>
                            </div>
                        </div>
            </section>

    
            <section className='container text-center'>
                <div className='my-5'>
                    <div className='row bg-walletfy-pasti align-items-center'>

                    <div className='col-12 col-lg-6'>
                        <p><TextConvert text={t("walletfy.tools")} /></p>
                    </div>
            
                     
                    <div className='col-12 col-lg-6'>
                    <div className="wrapper-toolpills-projects">    
                        <ul>
                            {
                            frontendPills.map(item=> (
                                <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
                                <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/>
                                </li>
                                </Tippy>
                            ))
                            } 
                             {
                            libreriesPills.slice(0,2).map(item=> (
                                <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
                                <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/>
                                </li>
                                </Tippy>
                            ))
                            }  
                               {
                            [backendPills.slice(3)[0]].map(item=> (
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
            </section>


            <section className='container-fluid bg-video'>
                <h3 className='titulo-tesis text-center pt-5'>{t("walletfy.title2")}</h3>
                <div className='row justify-content-center align-items-center'>
                
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3  d-none d-lg-block'>
                        <img src={wally} alt="mascota de la aplicacion con celular" className='my-5'/>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <div className='ratio ratio-16x9 my-5'>
                            <iframe src="https://www.youtube.com/embed/iLG8qYFFjd0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>    
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3 d-none d-lg-block'>
                        <img src={wally2} alt="mascota de la aplicacion con celular"/>
                    </div>
                </div>
            </section>
      
            <article className=' container pt-5 mb-5'>
                <h2 className='titulo-tesis my-5'>{t("walletfy.title3")}</h2>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6'>
                        <img src={analisis} alt="Mockup" className='img-fluid img-analisis'/>
                    </div>
                
                    <div className='col-12 col-lg-6'>
                        
                        <ul className='text-start'>                                                  
                          {
                            walletfyList.map(item => (
                                    <li key={item.id} className='wallet-li shadow-sm'>
                                        <div className='row'>
                                            <div className='col-2 text-center li-walletfy-icons'>
                                                <i className={item.icon}></i> 
                                            </div>
                                            <div className='col-10'>
                                                <p>{t(item.p)}</p> 
                                            </div> 
                                        </div> 
                                    </li>
                            ))
                          }
                        </ul>
                    </div>
                </div>
            </article>
    </>
  )
}

export default Walletfy
