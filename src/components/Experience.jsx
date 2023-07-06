import React from 'react'
import memoji from "../../src/pics/thumbnail_image3.png"
import experience from '../arrays/experienceList'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const {t} = useTranslation();

  return (
    <>
      <article className='container mb-5'>
            <div className='row align-items-center'>      
                <div className='col-12 col-lg-4'>
                <img src={memoji} alt="meditando" className='avatar-proyecto no-drag'/>
                </div>
                <div className='col-12 col-lg-8'>
                        <h2 className='title-home'>{t("experience.title")}</h2>
                        <ul className='text-start'>                      
                                {
                                    experience.map(item => (
                                        <li key={item.id} className='experience-li shadow-sm'>
                                            <div className='row'>
                                                <div className='col-2 text-center'>
                                                    <i className={item.icon}></i>
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
      </article>
    </>
  )
}

export default Experience
