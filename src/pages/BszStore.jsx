import logo from '../pics/bszstore-logo.png'
import bootstrap from '../icons/bootstrap-5-1.svg'
import react from '../icons/react-2.svg'
import { motion } from 'framer-motion'
import mockup from '../pics/bsz-mockup.png'
import mockup2 from '../pics/bsz-mockup2.png'
import bszStoreList from '../arrays/bszStoreList'
import { useTranslation } from 'react-i18next'

const BszStore = () => {
  const {t} = useTranslation();

  return (
    <>
       <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
        <article className='container my-4'>    
                <img src={logo} alt='logo de la tienda'/>
        </article>

        <section className='container'>
                    <div className='row my-5'>
                        <div className='col-12 col-lg-6 align-self-sm-center my-5'>
                            <h1 className='titulo-bsz fw-bold text-center'>{t("bsz.title")}</h1>
                            <p className='project-description text-center'>{t("bsz.description")}</p>
                            <a href='https://bsz-store-with-sass.vercel.app/' Target="_blank"  className='btn btn-success btn-app fw-bold'>{t("bsz.button1")}</a>
                            <a href='https://github.com/Cristian-Bosz/bsz-store-with-sass' Target="_blank"  className='btn btn-outline-success btn-app fw-bold mx-2'>Github</a>
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
                        <p className='my-2 mx-2'>{t("bsz.tools")}</p>
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
            <h2 className='mt-5 mb-4 titulo-bsz'>{t("bsz.title2")}</h2>
            <div className='row'>
                <div className='col-12 col-lg-6 my-4'>
                <img src={mockup2} alt='mockup de la tienda en distintos dispositivos' className='w-100'/> 
                </div>
                <div className='col-12 col-lg-6 my-4'> 
                    <ul className='text-start'>       
                        {
                            bszStoreList.map(item => (
                                <li key={item.id} className='bsz-li shadow-sm'>
                                    <div className='row'>
                                        <div className='col-2 text-center li-bsz-icons'>
                                            <i class={item.icon}></i>
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

export default BszStore
