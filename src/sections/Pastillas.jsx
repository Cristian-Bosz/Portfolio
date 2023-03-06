import React from 'react'
import html from '../../src/icons/html-1.svg'
import js from '../../src/icons/javascript-1.svg'
import css from '../../src/icons/css-3.svg'
import laravel from '../../src/icons/laravel-1.svg'
import mysql from '../../src/icons/mysql-6.svg'
import php from '../../src/icons/php.svg'
import vue from '../../src/icons/vue-js-1.svg'
import react from '../../src/icons/react-2.svg'
import github from '../../src/icons/github-icon-1.svg'
import photoshop from '../../src/icons/ap.svg'
import ai from '../../src/icons/ai.svg'
import ae from '../../src/icons/ae.svg'
import premiere from '../../src/icons/premiere-pro-cc.svg'
import bootstrap from '../../src/icons/bootstrap-5-1.svg'
import git from '../../src/icons/git.svg'
import firebase from '../../src/icons/firebase-1.svg'
import fm from '../../src/icons/framer-motion.svg'
import jquery from '../../src/icons/jquery-1.svg'
import { motion } from "framer-motion"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Pastillas = () => {
  return (
    <>
      

<article className='container'>
    <div className=' row my-5'>
<h3 className='my-5 title-home'>Skills </h3>

    <div className='col-12  bg-pastilla row align-items-start my-4 bg-pastillas shadow-sm'>
      <h4 className='sub-pasti my-3'>Front-end</h4> 

      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="HTML5">
          <motion.img src={html} alt="icono de html" className='sk-icon m-2' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
        </div>
      </div> 
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="CSS"><motion.img src={css} alt="icono de css" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="JavaScript"><motion.img src={js} alt="icono de javascript" className='sk-icon m-2' whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
    
    </div>


    <div className='col-12 bg-pastilla row align-items-start my-4 bg-pastillas shadow-sm'>
    <h4 className='sub-pasti my-3'>Back-end</h4>

    <div className='col my-2'>
      <div className='card-icon shadow'>
      <Tippy content="PHP"><motion.img src={php} alt="icono de php" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
        
      </div>
    </div>
    <div className='col my-2'>
      <div className='card-icon shadow'>
      <Tippy content="Mysql"><motion.img src={mysql} alt="icono de mysql" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
        
      </div>
    </div>
    <div className='col my-2'>
      <div className='card-icon shadow'>
      <Tippy content="Firebase"><motion.img src={firebase} alt="icono de firebase" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
        
      </div>
    </div>

    </div>

<div className='col-12 bg-pastilla  row align-items-start my-4 bg-pastillas shadow-sm'>
      <h4 className='sub-pasti my-3'>Librerias y frameworks</h4>

      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="React"><motion.img src={react} alt="icono de react" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="Bootstrap 5"><motion.img src={bootstrap} alt="icono de bootstrap" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="Framer-motion"><motion.img src={fm} alt="icono de framer-motion" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="JQuery"><motion.img src={jquery} alt="icono de jquery" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="Vue"><motion.img src={vue} alt="icono de vue" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="Laravel"><motion.img src={laravel} alt="icono de laravel" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      
    </div>


    <div className='col-12 col-lg-4 bg-pastilla row align-items-start my-4 me-3 bg-pastillas shadow-sm'>
      <h4 className='sub-pasti'>Team work</h4>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="GitHub"><motion.img src={github} alt="icono de github" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="Git"><motion.img src={git} alt="icono de git" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
    </div>
     

    <div className='col-12 col-lg-8 bg-pastilla row align-items-center my-4 bg-pastillas shadow-sm'>
      <h4 className='sub-pasti'>Diseño</h4>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="Photoshop"><motion.img src={photoshop} alt="icono de photoshop" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
            
        </div>
      </div>
      <div className='col my-2'> 
        <div className='card-icon shadow'>
        <Tippy content="Illustrator"><motion.img src={ai} alt="icono de illustrator" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="After effects"><motion.img src={ae} alt="icono de after effects" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>
      <div className='col my-2'>
        <div className='card-icon shadow'>
        <Tippy content="Premiere"><motion.img src={premiere} alt="icono de premiere" className='sk-icon m-2'  whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}/></Tippy>
          
        </div>
      </div>

    </div>
      

      
   </div>       
 
</article>
    </>
  )
}

export default Pastillas
