import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../styles/App.css'
import Navbar from './content/Navbar';
import ItemListContainer from './layouts/ItemListContainer';
import Home from './content/Home';
import About from './content/About';
import Contacto from './content/Contacto';
import Producto from './content/Producto';
import Footer from './content/Footer';
import Categoria from './content/Categoria';
import Carrito from './content/Carrito';
const App = () => {
  return (
    <>
      {/* <DarkModeContext.Provider> */}
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/producto/:id" element={<Producto/>} />
            <Route path="/categoria/:id" element={<Categoria/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="*" element={<h1>Error 404. Pagina no encontrada.</h1>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      {/* </DarkModeContext.Provider> */}
    </>
);
}

export default App;
