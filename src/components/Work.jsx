import madero from '../../src/pics/maderocleaners_min.jpg'

import { useTranslation } from 'react-i18next'
const Work = () => {
    const {t} = useTranslation();
  return (
    <>
      <section className='container-fluid work-bg'>
        <div className='container pt-4 pb-5'>
                <h3 className='title-home m-5'>{t("work.title")}</h3>
         <p className='work-subtitle'>
         {t("work.subtitle")}
         </p>         

        <div className="row justify-content-center my-5 work-wrapper">
        <div className="col-12 col-lg-5 m-2 miniatura-work shadow">  
               <a href='https://maderocleaners.com.ar/' target="_blank"> <img src={madero} className="w-100 miniatura-pic-work" alt="Mockup del sitio informativo de la empresa Madero Cleaners"/></a>
            </div>
           
        </div>
    
        </div>
     
    </section>
    </>
  )
}

export default Work
