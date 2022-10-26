import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { CarritoProvider } from './context/carritoContext';
import App from './components/App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <CarritoProvider>
        <App />
    </CarritoProvider>
  
);

