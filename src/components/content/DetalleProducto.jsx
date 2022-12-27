import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../context/carritoContext.jsx';

const DetalleProducto = ({producto}) => {
  const [cantidad, setCantidad] = useState(1);
  const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
  
  
  const cantProducto = (operacion) => {
    if(operacion =="+") {
      if(cantidad < producto[1].stock) {
        setCantidad(cantidad + 1)
      } 
        }else{
        if(cantidad > 1) {
          setCantidad(cantidad - 1)
      }
    }
  }
    return (
        <>
         
  <div className="row g-0">
    <div className="col-md-4">
      <img src={producto[1].img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{producto[1].nombre}</h5>
        <p className="card-text">Marca: {producto[1].marca}</p>
        <p className="card-text">Talle: {producto[1].talle}</p>
        <p className="card-text">Precio: ${producto[1].precio}</p>
        <p className="card-text">Stock: {producto[1].stock}</p>
        <p className="card-text">Cantidad: {cantidad}</p>

        <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>
        <button className='btn btn-light' onClick={() => cantProducto("-")}>-</button>

        <button className='btn btn-success' onClick={()=> agregarProducto(producto, cantidad)}>Agregar al carrito  <img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-b9d9f.appspot.com/o/Imagenes%2Fcarrito.png?alt=media&token=acd7e4c9-052e-4570-b1bc-05e08e5d4ef3" alt="" /></button>
        
        </div>
        </div>
      </div>

        </>
    );
}

export default DetalleProducto;
