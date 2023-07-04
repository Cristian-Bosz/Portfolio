import React from 'react'
import html from '../../src/icons/html-1.svg'
import js from '../../src/icons/javascript-1.svg'
import css from '../../src/icons/css-3.svg'
import laravel from '../../src/icons/laravel-1.svg'
import mysql from '../../src/icons/mysql-6.svg'
import php from '../../src/icons/php.svg'
import vue from '../../src/icons/vue-js-1.svg'
import react from '../../src/icons/react-2.svg'
import sass from '../../src/icons/sass.svg'
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
import slack from '../../src/icons/slack.svg'
import filezilla from '../../src/icons/filezilla.svg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useTranslation } from 'react-i18next'

const Pastillas = () => {
  const {t} = useTranslation();

  return (
    <>
<article className='container'>
  <h3 className='my-5 title-home'>{t("skills.title")} </h3>
  <div class="wrapper">
    <div className='row'>

      <div className='col-12 col-md-6'><h4 className='sub-pasti my-3'>Front-end</h4> 
          <ul>
            <li class="facebook"><a href="#"><img src={html} alt="icono de html" className=''/></a></li>
            <li class="twitter"><a href="#"><img src={css} alt="icono de html" className=''/></a></li>
            <li class="instagram"><a href="#"><img src={js} alt="icono de html" className=''/></a></li>
          </ul> 
      </div>
      <div className='col-12 col-md-6'><h4 className='sub-pasti my-3'>Back-end</h4> 
          <ul>
            <li class="facebook"><a href="#"><img src={php} alt="icono de html" className=''/></a></li>
            <li class="twitter"><a href="#"><img src={mysql} alt="icono de html" className=''/></a></li>
            <li class="instagram"><a href="#"><img src={laravel} alt="icono de html" className=''/></a></li>
            <li class="google"><a href="#"><img src={firebase} alt="icono de html" className=''/></a></li>
          </ul>
      </div>

      <div className='col-12 col-md-6'><h4 className='sub-pasti my-3'>{t("skills.librerias")}</h4> 
          <ul>
            <li class="google"><a href="#"><img src={react} alt="icono de html" className=''/></a></li>
            <li class="whatsapp"><a href="#"><img src={bootstrap} alt="icono de html" className=''/></a></li>
            <li class="whatsapp"><a href="#"><img src={sass} alt="icono de html" className=''/></a></li>
            <li class="facebook"><a href="#"><img src={jquery} alt="icono de html" className=''/></a></li>
            <li class="twitter"><a href="#"><img src={vue} alt="icono de html" className=''/></a></li>
            <li class="instagram"><a href="#"><img src={fm} alt="icono de html" className=''/></a></li>
          </ul> 
      </div>

      <div className='col-12 col-md-6'>   <h4 className='sub-pasti my-3'>Team work</h4> 
          <ul>
            <li class="google"><a href="#"><img src={git} alt="icono de html" className=''/></a></li>
            <li class="whatsapp"><a href="#"><img src={github} alt="icono de html" className=''/></a></li>
            <li class="google"><a href="#"><img src={filezilla} alt="icono de html" className=''/></a></li>
            <li class="slack"><a href="#"><img src={slack} alt="icono de html" className='slack'/></a></li>
          </ul>
      </div>

      <div className='col-12'>  <h4 className='sub-pasti my-3'>{t("skills.diseño")}</h4> 
        <ul>
          <li class="google"><a href="#"><img src={photoshop} alt="icono de html" className=''/></a></li>
          <li class="whatsapp"><a href="#"><img src={ai} alt="icono de html" className=''/></a></li>
          <li class="google"><a href="#"><img src={premiere} alt="icono de html" className=''/></a></li>
          <li class="whatsapp"><a href="#"><img src={ae} alt="icono de html" className=''/></a></li>
        </ul>
      </div>
</div>
    </div>
  
     

</article>
    </>
  )
}

export default Pastillas
