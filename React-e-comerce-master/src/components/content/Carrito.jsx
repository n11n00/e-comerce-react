import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/carritoContext';
import { consultarBDD } from '../../utilities/funcionesUtiles';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    useEffect(() => {
        const prodMostrar = Carrito.map(productos =>
            <div className="card cardProducto" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text"> Marca: {producto.marca}</p>
                            <p className="card-text">Talle: {producto.talle}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Cantidad: {producto.cantidad}</p>
                            <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-success'>Borrar del carrito</button>
                    </div>
                </div>)
            setCarritoLocal(prodMostrar)
       
          
    }, []);


    if(carrito.lenght != 0) {
        return (
            <>
                {carritoLocal}
            </>
        )
    } else {

        return ( 
            <>
                <h1>No existen elementos en el carrito</h1>
            </>
        );
    }
}
export default Carrito;
