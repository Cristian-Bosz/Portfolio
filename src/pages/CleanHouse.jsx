import logo from '../pics/cleanhouse-logo.png'
import mockup from '../pics/cleanhouse-mockup.png'
import mockup2 from '../pics/cleanhouse-mockup3.jpg'
import cleanHouseList from '../arrays/cleanHouseList'
import { useTranslation } from 'react-i18next'
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/dist/tippy.css';
import { t } from 'i18next'
import TextConvert from '../components/TextConvert'
import cmsPills from '../arrays/cmsPills'

const CleanHouse = () => {
    const {t} = useTranslation();

    const idsToInclude = [1, 5, 6];
    const cmsToDisplay = cmsPills
      .filter(item => idsToInclude.includes(item.id))
      .map(item => ({
        id: item.id,
        content: item.content,
        theme: item.theme,
        li_class: item.li_class,
        img_src: item.img_src,
        img_alt: item.img_alt,
        img_class: item.img_class,
      }));
    

  return (
    <>
       <a className="btn-wsp" href="/"><i className="bi bi-arrow-left-circle"></i></a>
        <article className='container my-4'>    
                <img src={logo} alt='logo de la tienda'/>
        </article>

        <section className='container'>
                    <div className='row my-5'>
                        <div className='col-12 col-lg-6 align-self-sm-center my-5'>
                            <h1 className='titulo-clean fw-bold text-center'>{t("cleanhouse.title")}</h1>
                            <p className='project-description text-center'>{t("cleanhouse.description")}</p>
                            <a href='https://cleanhouse.wuaze.com/' Target="_blank" className='btn btn-clean fw-bold'>{t("cleanhouse.button1")}</a>
                            
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img src={mockup} alt='mockup de las interfaces de bsz store' className='w-100'/>
                        
                        </div>
                    </div>
        </section>
    

        <article className='container-fluid '>
            <div className='container bg-pasti-clean shadow'>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6'>
                        <p>{t("cleanhouse.tools")}</p>
                    </div>
            
                     
                    <div className='col-12 col-lg-6'>
                        <div className="wrapper-toolpills-projects">    
                            <ul>
                                {
                                cmsPills.filter(item => idsToInclude.includes(item.id)).map(item => (
                                <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
                                    <li className={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class} /></li>
                                </Tippy>
                                ))
                                }
                            </ul>                                             
                    </div> 
                    </div>

                </div>
            </div>
        </article>

               
        <section className='container my-5'>
            <h2 className='mt-5 mb-4 titulo-clean'>{t("cleanhouse.title2")}</h2>
            <div className='row'>
                <div className='col-12 col-lg-6 my-4'>
                <img src={mockup2} alt='mockup de la tienda en distintos dispositivos' className='w-100'/> 
                </div>
                <div className='col-12 col-lg-6 my-4'> 
                    <ul className='text-start'>       
                        {
                            cleanHouseList.map(item => (
                                <li key={item.id} className='clean-li shadow-sm'>
                                    <div className='row'>
                                        <div className='col-2 text-center li-bsz-icons'>
                                            <i class={item.icon}></i>
                                        </div>
                                        <div className='col-10'>
                                        <TextConvert text={t(item.p)} />
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

export default CleanHouse
