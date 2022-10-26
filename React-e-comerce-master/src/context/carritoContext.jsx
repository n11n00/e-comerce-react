import React,  {createContext, useState} from 'react';
import { CreateContext } from 'react';

const CarritoContext = createContext ()
const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const agregarProducto = (prod, cant) => {
        const aux = carrito 
        let indice = aux.findIndex(producto => producto.id == prod.id)
        const prodCarrito = {...prod, cantidad: cant}
        if(indice != -1) {
          aux[indice].cantidad = cant
        } else {
          aux.push(prodCarrito)
        }
        setCarrito(aux)
    }

    const quitarProducto = (prod) => {

        const aux = carrito 
        let indice = aux.findIndex(producto => producto.id == prod.id)
       
        aux.splice(indice,1)
        setCarrito(aux)
    }
    return (
        <>
            <CarritoContext.Provider value ={{carrito, agregarProducto, quitarProducto}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
