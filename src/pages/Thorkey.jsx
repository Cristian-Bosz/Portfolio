import thorkey from '../pics/thorkey.png'
import wordpress from '../icons/wordpress.svg'
import woo from '../icons/woocommerce.svg'
import mercado from '../icons/mpago.png' 
import about from '../pics/aboutus.jpg'
import tienda from '../pics/tienda.jpg'
import descrip from '../pics/descrip.jpg'
import cart from '../pics/cart.jpg'
import { motion } from 'framer-motion'
import thorkeyList from '../arrays/thorkeyList'


const Thorkey = () => {
  return (
    <>
    <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
          <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='title1-thorkey text-center'>La música comienza cuando las palabras acaban</h1>
                        <p className='project-description text-center'>Thorkey es un E-commerce que se dedica a la venta de instrumentos musicales. </p>
                        <a href="https://drive.google.com/file/d/1ovvRBV7cprll6x2wqSwLYBq7PxAD0lj2/view?usp=sharing" target="_blank" className='btn btn-dark fw-bold'>Mira el PDF</a>
                    
                            
                      
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center d-none d-lg-block'>
                        <img src={thorkey} alt='mockup de las pantallas de thorkey' className='w-100'/>
                    </div>
                </div>
    </section>

    
    <article className='container-fluid '>
        <div className='container bg-pasti-thorkey shadow'>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <p className='my-2 mx-2'>Este proyecto fue creado exclusivamente con Wordpress y plugins como WooCommerce y Mercado Pago.</p>
                </div>
                <div className='col-12 col-lg-6 my-5'>
                    <div className='row align-items-center justify-content-center'>
                         <div className='col-4 card-icon-thorkey'>
                            <motion.img src={wordpress} alt='icono de wordpress' className=" sk-icon my-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>
                        <div className='col-4 card-icon-thorkey'>
                            <motion.img src={woo} alt='icono de woocommerce' className=" sk-icon my-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>  
                        <div className='col-4 card-icon-thorkey'>
                            <motion.img src={mercado} alt='icono de mercado pago' className=" sk-icon my-2"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/>
                        </div>  
                     
                     </div>
                       
                </div>
              
            </div>
        </div>

    </article>

   <article className='container'>
   
        <h2 className='mt-5 mb-4 title1-thorkey'>Theme</h2>
        <div className='row'> 
            <div className='col-12 mb-5'>
                <div className='row justify-content-center'>
                    <motion.div className='col-3 card shadow mx-2' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>         
                            <p className='my-3 p-thorkey'>Shop Zita</p>
                    </motion.div>
                </div>
            </div>
        </div>
   </article>

   <article className='container'>
    <h2 className='mt-5 mb-4 title1-thorkey'> Plugins</h2>
    <div className='row'>
        <div className='col-12 my-3'>
            <div className='row justify-content-center align-items-center'>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>BackWPup </p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Elementor</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Really Simple SSL</p></motion.div>
                <motion.div className='col-4 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>WPForms Lite</p></motion.div>
                <motion.div className='col-4 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>SuperProgressive Web Apps</p></motion.div>
            </div>
        </div>
        <div className='col-12 my-3'>
        <div className='row justify-content-center align-items-center'>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>ZitaSite Library</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>PluginOpsLanding Page Builder</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Mercado Pago PaymentsforWooCommerce</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>MailchimpforWooCommerce</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>WooCommerceServices</p></motion.div>
            </div>
        </div>
        <div className='col-12 my-3'>
        <div className='row justify-content-center align-items-center'>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>WooCommerce</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Jetpack</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>iThemes Security</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Google AdsforWooCommerce</p></motion.div>
                <motion.div className='col-3 col-lg-2 card shadow me-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Facebook forWooCommerce</p></motion.div>
            </div>
        </div>
    </div>
   </article>

   <section className='container my-5'>
    <h2 className='mt-5 mb-4 title1-thorkey'>Configuraciones del sitio </h2>
    <div className='row'>
        <div className='col-12 col-lg-6 my-4'>
            
            <img src={tienda} alt="imagen de la tienda de productos en thorkey" className="w-100 border-thorkey shadow-sm  my-1 img-thorkey  d-lg-block"/>
            <img src={descrip} alt="imagen de descripcion de producto en thorkey" className="w-100 border-thorkey shadow-sm my-1 d-none d-lg-block"/>
            <img src={cart} alt="imagen del carrito de compras en thorkey" className="w-100 border-thorkey shadow-sm my-1 d-none d-lg-block"/>
        </div>

        <div className='col-12 col-lg-6 my-4'> 
            <ul className='text-start'>
    
                { thorkeyList.map(item => (
                        <li  key={item.id} className='thorkey-li shadow-sm'>
                                <div className='row'>
                                    <div className='col-2 text-center li-thorkey-icons'>
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

<section className='container my-5'>
<h2 className='mt-5 mb-4 title1-thorkey'>Expectativas del sitio </h2>

<div className='row align-items-start'>
    <div className='col-12 col-lg-6'> 
        <div className='thorkey-li text-start my-4'>
        <p>Hablando del Theme elegido, podemos decir que lo <strong>“exprimimos” al máximo </strong>ya que utilizamos todas sus funciones y estamos muy satisfechos ya que este es muy completo. </p>
        <p>En nuestra página <strong>aplicamos distintos tipos de secciones de productos a vender</strong>, como por ejemplo distintas categorías de piano y guitarras, teniendo así un <strong>amplio catalogo de productos</strong> a ofrecer a nuestros clientes. </p>
        <p>
        Las funciones que esperamos de nuestro sitio es que sea un <strong>ecommerce cómodo para la gente</strong>, cumpliendo todos los deseos de nuestros clientes <strong>ofreciéndoles lo mejor en el momento de realizar compras de instrumentos.</strong>  </p>
    </div>
 </div>
    <div className='col-12 col-lg-6'>
        <img src={about} alt="imagen del sobre nosotros en thorkey" className="w-100 border-thorkey my-4 img-thorkey"/>
    </div>
</div>


</section>

    </>
  )
}

export default Thorkey
