import './App.css';
import Inicio from './Inicio';
import Walletfy from './sections/descriptions/Walletfy';
import Blueocean from './sections/descriptions/Blueocean';
import Kyber from './sections/descriptions/Kyber';
import Thorkey from './sections/descriptions/Thorkey';
import BszStore from './sections/descriptions/BszStore';
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
     
    </BrowserRouter>
    </div>
  );
}

export default App;
