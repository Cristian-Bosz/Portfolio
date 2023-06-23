import React from 'react'
import memoji from "../../src/pics/thumbnail_image3.png"
import experience from '../arrays/experienceList'

const Experience = () => {
  return (
    <>
      <article className='container mb-5'>
            <div className='row align-items-center'>      
                <div className='col-12 col-lg-4'>
                <img src={memoji} alt="meditando" className='avatar-proyecto'/>
                </div>
                <div className='col-12 col-lg-8'>
                        <h2 className='title-home'>Estos proyectos me permitieron ganar experiencia en</h2>
                        <ul className='text-start'>                      
                                {
                                    experience.map(item => (
                                        <li key={item.id} className='experience-li shadow-sm'>
                                            <div className='row'>
                                                <div className='col-2 text-center'>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className='col-10'>
                                                    <p>{item.p}</p> 
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
