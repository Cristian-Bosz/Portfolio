import thorkey from '../pics/thorkey.png'
import about from '../pics/aboutus.jpg'
import tienda from '../pics/tienda.jpg'
import descrip from '../pics/descrip.jpg'
import cart from '../pics/cart.jpg'
import { motion } from 'framer-motion'
import thorkeyList from '../arrays/thorkeyList'
import { useTranslation } from 'react-i18next'
import TextConvert from '../components/TextConvert'
import thorkey_logo from '../pics/thorkey_logo.png'
import cmsPills from '../arrays/cmsPills'
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/dist/tippy.css';

const Thorkey = () => {
  const {t} = useTranslation();
 
  return (
    <>
    <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
        <article className='container my-4'>    
                <img src={thorkey_logo} alt='logo de la tienda thorkey'/>
        </article>
          
          <section className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-6 align-self-sm-center'>
                        <h1 className='title1-thorkey text-center'>{t("thorkey.title")}</h1>
                        <p className='project-description text-center'>{t("thorkey.description")}</p>
                        <a href="https://drive.google.com/file/d/1ovvRBV7cprll6x2wqSwLYBq7PxAD0lj2/view?usp=sharing" target="_blank" rel="noreferrer" className='btn btn-thorkey fw-bold'>{t("thorkey.button")}</a>
                    
                            
                      
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
                    <p>{t("thorkey.tools")}</p>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className="wrapper-toolpills-projects">    
                        <ul>
                            {
                                cmsPills.slice(0,4).map(item => (
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

   <article className='container'>
   
        <h2 className='mt-5 mb-4 title1-thorkey'>{t("thorkey.title2")}</h2>
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
    <h2 className='mt-5 mb-4 title1-thorkey'> {t("thorkey.title3")}</h2>
    <div className='row'>
        <div className='col-12 my-3'>
            <div className='row justify-content-center align-items-center'>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>BackWPup </p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Elementor</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Really Simple SSL</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>WPForms Lite</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>SuperProgressive Web Apps</p></motion.div>
            </div>
        </div>
        <div className='col-12 my-3'>
        <div className='row justify-content-center align-items-center'>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>ZitaSite Library</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>PluginOpsLanding Page Builder</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Mercado Pago Payments forWooCommerce</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Mailchimp forWooCommerce</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>WooCommerce Services</p></motion.div>
            </div>
        </div>
        <div className='col-12 my-3'>
        <div className='row justify-content-center align-items-center'>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>WooCommerce</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Jetpack</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>iThemes Security</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Google Ads forWooCommerce</p></motion.div>
                <motion.div className='col-5 col-sm-4 col-md-4 col-lg-2 card shadow mx-1 my-1' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}><p className='my-3 p-thorkey'>Facebook forWooCommerce</p></motion.div>
            </div>
        </div>
    </div>
   </article>

   <section className='container my-5'>
    <h2 className='mt-5 mb-4 title1-thorkey'>{t("thorkey.title4")} </h2>
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
                                        <p>{t(item.p)}</p>
                                    </div>
                                </div>
                        </li>
                ))}

            </ul>
        </div>

    </div>
   </section>

<section className='container my-5'>
<h2 className='mt-5 mb-4 title1-thorkey'>{t("thorkey.title5")} </h2>

<div className='row align-items-start'>
    <div className='col-12 col-lg-6'> 
        <div className='thorkey-li text-start my-4'>
        <p><TextConvert text={t("thorkey.p1")}/></p>
        <p><TextConvert text={t("thorkey.p2")}/></p>
        <p><TextConvert text={t("thorkey.p3")}/></p>
        
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
