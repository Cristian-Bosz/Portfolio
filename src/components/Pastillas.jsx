import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/dist/tippy.css';
import { useTranslation } from 'react-i18next'
import frontendPills from '../arrays/frontendPills'
import backendPills from '../arrays/backendPills'
import libreriesPills from '../arrays/libreriesPills'
import teamworkPills from '../arrays/teamworkPills';
import designPills from '../arrays/designPills';
import cmsPills from '../arrays/cmsPills';

const Pastillas = () => {
  const {t} = useTranslation();
 
  return (
    <>
<article className='container'>
  <h3 className='my-5 title-home'>{t("skills.title")} </h3>
  <div class="wrapper">
    <div className='row'>
      <div className='col-12 col-md-6'>
        <h4 className='sub-pasti my-3'>Front-end</h4> 
          <ul>
          {
          frontendPills.map(item=> (
            <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
            <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/></li>
          </Tippy>
          ))
          }   
          </ul> 
      </div>
      <div className='col-12 col-md-6'>
        <h4 className='sub-pasti my-3'>Back-end</h4> 
          <ul>
          {
          backendPills.map(item=> (
            <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
            <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/></li>
          </Tippy>
          ))
          }        
          </ul>
      </div>

      <div className='col-12 col-md-6'>
        <h4 className='sub-pasti my-3'>{t("skills.librerias")}</h4> 
          <ul>
          {
          libreriesPills.map(item=> (
            <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
            <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/></li>
          </Tippy>
          ))
          }  
          </ul> 
      </div>

      <div className='col-12 col-md-6'>   
        <h4 className='sub-pasti my-3'>Team work</h4> 
          <ul>
          {
          teamworkPills.map(item=> (
            <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
            <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/></li>
          </Tippy>
          ))
          }  
          </ul>
      </div>

      <div className='col-12 col-md-6'>  
        <h4 className='sub-pasti my-3'>{t("skills.diseño")}</h4> 
        <ul>
        {
          designPills.map(item=> (
            <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
            <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/></li>
          </Tippy>
          ))
          }  
        </ul>
      </div>
      <div className='col-12 col-md-6'>  
        <h4 className='sub-pasti my-3'>CMS</h4> 
        <ul>
          {
            cmsPills.slice(0,2).map(item=> (
              <Tippy key={item.id} content={<strong>{item.content}</strong>} allowHTML={true} inertia={true} arrow={false} touch="hold" animation='scale-extreme' theme={item.theme}>
              <li class={item.li_class}><img src={item.img_src} alt={item.img_alt} className={item.img_class}/></li>
            </Tippy>
            ))
          }  
        </ul>
      </div>
    </div>
  </div>
</article>
    </>
  )
}

export default Pastillas
