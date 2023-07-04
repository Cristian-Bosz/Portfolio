import { useTranslation } from 'react-i18next';
import england from '../icons/england.png';
import españa from '../icons/spain.png'
import DarkMode from '../feature/DarkMode';

const Navbar = () => {
    const {t, i18n} = useTranslation();
    const changeLanguageToEnglish  = () =>{
      i18n.changeLanguage("en");
      localStorage.setItem('language', 'en');
    }
    const changeLanguageToSpanish = () => {
        i18n.changeLanguage('es');
        localStorage.setItem('language', 'es');
      };
  return (
    <>
     <nav className='container-fluid'>
    
     <div class="d-flex justify-content-end container">
        
                <div className="tabs">
                    <input onClick={changeLanguageToSpanish } type="radio" id="radio-1" name="tabs" checked=""/>
                    <label className="tab"  for="radio-1"><img src={españa} className='flag no-drag'/></label>

                    <input onClick={changeLanguageToEnglish} type="radio" id="radio-2" name="tabs"/>
                    <label className="tab" id="icon-esp" for="radio-2"><img src={england} className='flag no-drag'/></label>
                    
                    <span className="glider"></span>
                </div>
                <DarkMode/>
                
               
     </div>
       
     </nav>
      
    </>
    
  )
}

export default Navbar
