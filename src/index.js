import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarritoProvider } from './context/carritoContext';
import './styles/index.css';
import App from './components/App.jsx';
// import './utilities/x'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
        <App />
  </CarritoProvider>
   
);

