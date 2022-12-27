import {Link} from 'react-router-dom'
import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/carritoContext.jsx';
import { mostrarCarrito } from '../../utilities/funcionesUtiles';
import OrdenDeCompra from './OrdenDeCompra.jsx';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto, limpiarCarrito } = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const prodMostrar  = carrito.map(producto => 
            
                <div className="card cardProducto" key={producto.id}>
                        <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">Precio: {producto.precio}</p>
                                <p className="card-text">Cantidad: {producto.cantidad}</p>
                                <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
                                <button className='btn btn-danger ' onClick={() => quitarProducto(producto)}>Eliminar</button>
                            </div>
                </div>)
        
                
        setCarritoLocal(prodMostrar)
        
    }, [carrito]);

    
    
    const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} 
    <div className='btn-home'>
        <button className='btn btn-danger ' onClick={() => limpiarCarrito (carrito)}>Limpiar Carrito</button>
    </div>
    <div className='btn-home'>
        <Link className='nav-link' to= "/OrdenDeCompra"><button className='btn btn-success'>Continuar con la compra</button></Link>
    </div>

   

    </div> : <> <h1>No existen elementos en tu carrito</h1>
    <div className='btn-home'><Link className="nav-link active" to="/"><button className='btn btn-dark'>Ir al Home</button></Link>
    </div>
    </>
    
    return app
}

export default Carrito;