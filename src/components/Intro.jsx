import React from 'react'
import memoji from '../../src/pics/thumbnail_image2.png' 
import { useTranslation } from 'react-i18next'



const Intro = () => {
  const {t} = useTranslation();
  
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
              <div className='col-12 bg-intro2'>
                  <div className='my-5'>
                        <img src={memoji} alt="memoji" className='w-25 rounded-circle border border-3 bg-white shadow-lg avatar-perfil'/>

                                  <h3 className='titulo-intro'>{t("intro.intro")}</h3>
                                  <h4 className='sub-intro'>{t("intro.subintro")}</h4>
                                
                    </div>
              </div>
  
      </div>
    </div>
   
    </>
  
  )
}

export default Intro
