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


function App() {
  return (
    <div className="App">
      <BrowserRouter>   
           <Routes>
                  <Route path='/' element={<Inicio/>}/>
                  <Route path='/walletfy' element={<Walletfy/>}/>
                  <Route path='/blueocean' element={<Blueocean/>}/>
                  <Route path='/kyber' element={<Kyber/>}/>
                  <Route path='/thorkey' element={<Thorkey/>}/>
                  <Route path='/bszstore' element={<BszStore/>}/>
          </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
