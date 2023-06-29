import React from 'react'
import memoji from "../../src/pics/thumbnail_image4.png"
import { useTranslation } from 'react-i18next'
import TextConvert from './TextConvert'


const AboutMe = () => {
  const {t} = useTranslation();

  return (
    <>
      <section className='container-fluid'>
        <div className="container">        
              <h3 className='title-home mt-5'>{t("about.title")}</h3>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6 my-5'>
                      <img src={memoji} alt="programando" className='avatar-about'/>
                    </div>
                    <div className='col-12 col-lg-6 bg-in'>
                        <div className='my-5'>
                          <p className='p-about mt-4 mb-5 mx-2'>
                          <TextConvert text={t("about.p1")} /> </p>
                          <p className='p-about mt-3 mb-5 mx-2'>
                            <TextConvert text={t("about.p2")}/></p>
                          <p className='p-about mt-4 mb-5 mx-2'>
                            <TextConvert text={t("about.p3")}/> </p>





                          <a href="https://drive.google.com/file/d/1QETDe9vhH3UNZChmj-_9VZwf1S7DFX6o/view?usp=sharing" target="_blank"  className='btn btn-danger fw-bold'>{t("about.cv")}</a>
                        </div>
                    </div>      
                </div>
        </div>
      </section>

     

       
    </>
  )
}

export default AboutMe
