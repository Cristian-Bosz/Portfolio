import logo from '../pics/bszstore-logo.png'
import bootstrap from '../icons/bootstrap-5-1.svg'
import react from '../icons/react-2.svg'
import { motion } from 'framer-motion'
import mockup from '../pics/bsz-mockup.png'
import mockup2 from '../pics/bsz-mockup2.png'

const BszStore = () => {
  return (
    <>
       <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
    <article className='container my-4'>    
            <div className='bsz-logo'>
            <img src={logo} alt='logo de la tienda' className=''/>

            </div>
    </article>

    <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center my-5'>
                        <h1 className='titulo-bsz fw-bold text-center'>Llevando alegría a tu día a día</h1>
                        <p className='p-home text-center'>Estoy emocionado de compartirles mi último proyecto, un ecommerce desarrollado completamente en React. Este proyecto se enfoca principalmente en el Front-end y el diseño, por lo que no cuenta con una sección de Back-end.  </p>
                        <a href='https://bsz-store-with-sass.vercel.app/' Target="_blank"  className='btn btn-success fw-bold text-white'>Visitá la pagina</a>
                        <a href='https://github.com/Cristian-Bosz/bsz-store-with-sass' Target="_blank"  className='btn btn-outline-success fw-bold mx-2'>Github</a>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                    <img src={mockup} alt='mockup de las interfaces de bsz store' className='w-100'/>
                       
                    </div>
                </div>
    </section>

    

    

    <article className='container-fluid '>
        <div className='container bg-pasti-bsz shadow'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <p className='texto-thorkey my-2 mx-2'>Este proyecto fue creado exclusivamente con ReactJS, Bootstrap 5 y Sass.</p>
                </div>
                <div className='col-12 col-lg-6 my-5'>
                    <div className='row align-items-center justify-content-center'>
                         <div className='col-2 col-md-4 card-icon-bsz'>
                            <motion.img src={react} alt='icono de react' className=" sk-icon-bsz my-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>
                        <div className='col-2 col-md-4 card-icon-bsz'>
                            <motion.img src={bootstrap} alt='icono de bootstrap' className="sk-icon-bsz my-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>  
                        <div className='col-2 col-md-4 card-icon-bsz'>
                            <motion.img src="https://cdn.cdnlogo.com/logos/s/90/sass.svg" alt='icono de css' className="sk-icon-bsz my-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>             
                     </div>                  
                </div>       
            </div>
        </div>
    </article>

            
            
    <section className='container my-5'>
    <h2 className='mt-5 mb-4 title1-bsz'>Conocé lo mejor de mi proyecto </h2>
    <div className='row'>
        <div className='col-12 col-lg-6 my-4'>
        <img src={mockup2} alt='mockup de la tienda en distintos dispositivos' className='w-100'/> 
        </div>

        <div className='col-12 col-lg-6 my-4'> 
            <ul className='text-start'>
    <li className='thorkey-li shadow-sm'>
        <div className='row'>
            <div className='col-2 text-center'>
            <i class="bi bi-globe bsz-icons"></i>
            </div>
            <div className='col-10'>
                <p> Está desarrollada completamente en React, demostrando mi habilidad en esta popular biblioteca de frontend.</p>
            </div>
        </div>
    </li>
    
    <li className='thorkey-li shadow-sm'>
        <div className='row'>
            <div className='col-2 text-center'>
            <i class="bi bi-columns bsz-icons"></i>
            </div>
            <div className='col-10'>
                <p>Tiene una interfaz de usuario simple e intuitiva, con 20 productos mostrados en la página y enlaces clickables a información más detallada sobre cada producto. </p>
            </div>
        </div>
        
    </li>
    <li className='thorkey-li shadow-sm'>
    <div className='row'>
            <div className='col-2 text-center'>
            <i class="bi bi-aspect-ratio bsz-icons"></i>
            </div>
            <div className='col-10'>
                <p>Es completamente responsiva, asegurando que los usuarios puedan acceder y navegar por el sitio web de manera óptima en cualquier dispositivo.</p>
            </div>
        </div>
        
    </li>
    <li className='thorkey-li shadow-sm'>
    <div className='row'>
            <div className='col-2 text-center'>
            <i class="bi bi-brush bsz-icons"></i>
            </div>
            <div className='col-10'>
                <p>Utiliza componentes de Bootstrap y SCSS para crear un diseño personalizado y visualmente atractivo.</p>
            </div>
        </div>
        
    </li>
    <li className='thorkey-li shadow-sm'>
    <div className='row'>
            <div className='col-2 text-center'>
            <i class="bi bi-code bsz-icons"></i>
            </div>
            <div className='col-10'>
                <p>Utilizo SCSS, para aprovechar el poder de las variables y el anidamiento, lo que permitió un estilo más eficiente y organizado.</p>
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

export default BszStore
