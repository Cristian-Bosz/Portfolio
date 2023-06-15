import React from 'react'
import home from '../pics/home.png'
import analisis from '../pics/home2.png'
import walletfy from '../pics/Walletfy_Logo.png'
import wally from '../pics/wallyTorta.png'
import wally2 from '../pics/wallytips.png'
import walletfyList from '../arrays/walletfyList'

const Walletfy = () => {
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
                                <h1 className='titulo-home text-center'>El aliado de tu bolsillo</h1>
                                <p className='p-home text-center'>Walletfy es una aplicación de finanzas personales. <br/>
                                El objetivo es ayudar al usuario en la organización de sus gastos.<br/>
                                Ademas, buscamos capacitar al usuario con contenido financiero como consejos, cuestionarios, un glosario de términos, para que nuestros clientes adopten una conducta financiera y puedan tomar las mejores desiciones. </p>
                                <a href='https://walletfy-ad0ab.web.app' Target="_blank"  className='btn btn-info fw-bold text-white'>Probá la app</a>
                            </div>
                            <div className='col-12 col-lg-6 d-flex justify-content-center'>
                                <img src={home} alt='mockup del home de walletfy' className='mockup-walletfy'/>
                            </div>
                        </div>
            </section>

    
            <section className='container text-center d-none d-lg-block'>
                <div className='mt-5 pt-5 mb-5 pb-5'>
                    <div className='row anuncio align-items-center'>
                        <div className='col col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <img src={walletfy} alt="logo" className='w-50' />
                        </div>
                        <div className='col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <p className='anunciop'>Walletfy fue desarrollada con <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>React.js</b>, <b>Api's</b>, <b>Firebase</b>, <b>Material UI</b> y <b>Bootstrap</b>.</p>
                        </div>
                        
                    </div>
                </div>    
            </section>


            <section className='container-fluid bg-video bg-light'>
                <h3 className='titulo-tesis text-center pt-5'>Echale un vistazo a la app!</h3>
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
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6'>
                        <img src={analisis} alt="Mockup" className='img-fluid img-analisis'/>
                    </div>
                
                    <div className='col-12 col-lg-6'>
                        <h2 className='titulo-tesis my-5'>Funcionalidades</h2>
                        <ul className='text-start'>                                                  
                          {
                            walletfyList.map(item => (
                                    <li key={item.id} className='wallet-li shadow-sm'>
                                        <div className='row'>
                                            <div className='col-2 text-center li-walletfy-icons'>
                                                <i className={item.icon}></i> 
                                            </div>
                                            <div className='col-10'>
                                                <p className='fw-bold wallet-li-h3'>{item.p}</p> 
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
