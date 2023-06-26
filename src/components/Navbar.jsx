import { useTranslation } from 'react-i18next';
import england from '../icons/england.png';
import españa from '../icons/españa.png'

const Navbar = () => {
    const {t, i18n} = useTranslation();
    const changeLanguageToEnglish  = () =>{
      i18n.changeLanguage("en");
    }
    const changeLanguageToSpanish = () => {
        i18n.changeLanguage('es');
      };
  return (
    <>
     <nav className='container-fluid'>

     <div class="d-flex justify-content-end container">
        
                <div className="tabs">
                    <input onClick={changeLanguageToSpanish } type="radio" id="radio-1" name="tabs" checked=""/>
                    <label className="tab"  for="radio-1"><img src={españa} className='w-50 no-drag'/></label>

                    <input onClick={changeLanguageToEnglish} type="radio" id="radio-2" name="tabs"/>
                    <label className="tab" id="icon-esp" for="radio-2"><img src={england} className='w-50 no-drag'/></label>
                    
                    <span className="glider"></span>
                </div>
           
     </div>
       
     </nav>
      
    </>
    
  )
}

export default Navbar
