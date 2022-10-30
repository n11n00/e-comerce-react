import {memo}  from 'react';
import Secciones from '../layouts/Secciones';

const Footer = () => {
    return (
      <div  className="card text-center text-secondary bg-primary mb-3 position-absolute bottom-0 w-100">
      
      <div className="card-body">
        <h5 className="card-title">Tienda Nino</h5>
        <p className="card-text">Tienda de Ropa con diseños contemporaneos</p>
        
      </div>
      
    </div>
    );
}

export default memo(Footer);
