import React from 'react'
import home from '../../pics/home.png'
import analisis from '../../pics/home2.png'
import walletfy from '../../pics/Walletfy_Logo.png'
import wally from '../../pics/wallyTorta.png'
import wally2 from '../../pics/wallytips.png'
import Footer from '../Footer'
const Walletfy = () => {
  return (
    <>
    <a class="btn-wsp" href="/"><i class="bi bi-arrow-left-circle"></i></a>
    <article className='container my-4'>    
            <div className=''>
                <img src={walletfy} alt="encabezado con el logo de walletfy" className='w-25'/>
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
                        <img src={home} alt='mockup del home de walletfy' className='mt-2'/>
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
                            <li className='wallet-li shadow-sm'>
                                <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-activity"></i> 
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>Seguimiento de todos tus movimientos</h3> 
                                        
                                    </div>
                                
                                </div> 
                            </li>
                            <li className='wallet-li shadow-sm'>
                                
                                <div className='row'>
                                    <div className='col-2 text-center'>
                                     <i class="bi bi-pie-chart"></i>  
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>Gráficos detallados </h3>
                                        
                                    </div>
                                
                                </div> 
                                 </li>
                            <li className='wallet-li shadow-sm'>
                            <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-book"></i>
                                    </div>
                                    <div className='col-10'>
                            <h3 className='fw-bold'>Capacitación en el mundo de las finanzas</h3> 
                           
                                    </div>
                                
                                </div> </li>
                            <li className='wallet-li shadow-sm'>
                            <div className='row'>
                                    <div className='col-2 text-center'>
                                        <i class="bi bi-journal-text"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>Cuestionarios</h3>
                                                                   
                                    </div>
                                
                                </div> </li>
                            <li className='wallet-li shadow-sm'>
                            <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-newspaper"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'> Noticias y Novedades del mundo financiero</h3>
                                                                  
                                    </div>
                                
                                </div></li>
                                <li className='wallet-li shadow-sm'>
                            <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-currency-bitcoin"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'>  Seguimiento del mercado de criptomonedas</h3>
                                                                  
                                    </div>
                                
                                </div></li>  <li className='wallet-li shadow-sm'>
                            <div className='row'>
                                    <div className='col-2 text-center'>
                                    <i class="bi bi-bank"></i>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className='fw-bold'> Seguimiento de la bolsa de valores</h3>
                                                                  
                                    </div>
                                
                                </div></li>
                        </ul>
                    </div>
                </div>
            </article>

            <Footer/>
 
    </>
    
  )
}

export default Walletfy
