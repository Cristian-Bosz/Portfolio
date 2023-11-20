import Inicio from './pages/Inicio';
import Walletfy from './pages/Walletfy';
import Blueocean from './pages/Blueocean';
import Kyber from './pages/Kyber';
import Thorkey from './pages/Thorkey';
import BszStore from './pages/BszStore';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import CleanHouse from './pages/CleanHouse';


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="App">
      <BrowserRouter>  
        <Navbar/> 
           <Routes>
                  <Route path='/' element={<Inicio/>}/>
                  <Route path='/walletfy' element={<Walletfy/>}/>
                  <Route path='/blueocean' element={<Blueocean/>}/>
                  <Route path='/kyber' element={<Kyber/>}/>
                  <Route path='/thorkey' element={<Thorkey/>}/>
                  <Route path='/bszstore' element={<BszStore/>}/>
                  <Route path='/cleanhouse' element={<CleanHouse/>}/>
          </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
