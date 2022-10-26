import {Link} from 'react-router-dom'
import React from 'react';

const Secciones = () => {
    return (
        <>
       
        <li className="nav-item">
            <Link className="nav-link active" to="/contacto"><button className='btn btn-success'><img src="./img/contacto.png" alt="" /></button></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/about"><button className='btn btn-success'><img src="./img/about.png" alt="" /></button></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/carrito"><button type="button" class="btn btn-success"><img src="./img/carrito.png" alt="" /></button></Link>
        </li>
        </>
    );
}

export default Secciones;
