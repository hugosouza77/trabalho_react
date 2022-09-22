import { format } from 'path';
import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from 
"react-router-dom";
import { Home } from './pages/Home';
import { Contato } from './pages/Contato';
// import { Servicos } from './pages/Servicos';
import { Menu } from './Componetes/Menu';
import { Servicos } from './pages/Servicos';
// import { Menu } from '../components/Menu';
import './App.css' ;
import ney from "./img/logo.png"
<img className='cleriton' src={ney} alt="" />
function App() {
  return (
   <>
   <BrowserRouter>
   <Menu />
      <Routes>     
        <Route path='/home' element={<Home/>}/>  
        <Route path='/contatos' element={<Contato/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
