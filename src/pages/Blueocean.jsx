import React from 'react'
import bluehome from '../pics/blueocean_home.png'
import blueabout from '../pics/blueocean_about.png'
import bluelogo from '../pics/blueocean.png'
import blueoceanList from '../arrays/blueoceanList'
import { useTranslation } from 'react-i18next'
import frontendPills from '../arrays/frontendPills'
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/dist/tippy.css';
import libreriesPills from '../arrays/libreriesPills'

const Blueocean = () => {
  const {t} = useTranslation();

  return (
    <>
    <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
    <article className='container my-4'>    
                    <img src={bluelogo} alt="logo de blueocean"/>
    </article> 
      
    <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='title1-blueocean text-center'>{t("blueocean.title")}</h1>
                        <p className='project-description text-center'>{t("blueocean.description")}</p>
                        <a href='https://cristian-bosz.github.io/blueocean/#/home' Target="_blank" className='btn btn-blueocean fw-bold text-white'>{t("blueocean.button")}</a>
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
                    <p>{t("blueocean.tools")}</p>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className="wrapper-blueocean-pill">    
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
                                [libreriesPills.slice(4)[0]].map(item => (
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
                <img src={blueabout} alt="mockup de computadora con la web de blueocean" className='w-100'/>
            </div>
            <div className='col-12 col-lg-6'>
                <ul className='my-5 text-start'>
                    <h3 className='title-blueocean my-5'>{t("blueocean.title2")}</h3>    
                    {
                        blueoceanList.map(item => (
                            <li key={item.id} className='lead li-blueocean shadow-sm'>
                                <div className='row'>
                                    <div className='col-2 text-center li-blueocean-icons'>
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

    </section>

    </>
  )
}

export default Blueocean
