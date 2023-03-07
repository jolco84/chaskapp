import './bootstrap.min.css';

import Home from './views/Home';
import Inicio from './views/Inicio';
import Registro from './views/Registro';
import Usuario from './views/Usuario';
import Mantenedor from './views/Mantenedor';
import Solicitud from './views/Solicitud';
import Servicios from './views/Servicios';
import SolicitudServicio from './views/SolicitudServicios'

import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Context from './Context';

function App() {

  const [usuario, setUsuario] = useState(null)

  return (
    <div className="App">

      <Context.Provider value={{ usuario, setUsuario }} >

        <BrowserRouter>
          
          
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/solicitudServicio" element={<SolicitudServicio />} />
            <Route path="/solicitud" element={<Solicitud />} />
            <Route path="/mantenedor" element={<Mantenedor />} />
          </Routes>
          
        </BrowserRouter>

      </Context.Provider>
    </div>  
  );
}

export default App;
