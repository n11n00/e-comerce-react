import React, { useContext , useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';
import { getProducto } from '../../utilities/firebase'
import { createOrdenCompra } from '../../utilities/firebase';
import {getOrdenCompra} from '../../utilities/firebase'
import { CarritoContext } from '../../context/carritoContext';
import { getDoc, addDoc, collection, getFirestore, doc } from 'firebase/firestore';


    const OrdenDeCompra = () => {
        const[nombre, setNombre] = useState("");
        const[apellido, setApellido] = useState("");
        const[email, setEmail] = useState("");
        const[dni, setDni] = useState("");
        const[direccion, setDireccion] = useState("");
        // const[orderId,setOrderId] = useState("");
        
        const datosFormulario = React.useRef()

       


        const datosCompradorForm = (e) => {
            e.preventDefault()
        

        
            e.target.reset()
    }

        
    //    getOrdenCompra("UTKHpA46Uvs43P3Jh5IX").then(orden => {
    //     console.log(orden.id)
    // })


    const mostrarAlertaFinalizarCompra = () => {
        Swal.fire(
            'Gracias por su compra!',
            
            //  `Su numero de orden es: ${}`,
            'success'
          )
    } 

    return (
        <>
        <div className="container containerProductos">
            <form onSubmit={datosCompradorForm} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="nombre" className="form-control" name="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Apellido" className="form-label">Apellido</label>
                    <input type="Apellido" className="form-control" name="Apellido" onInput={(e) => {setApellido(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="Email" className="form-control" name="Email" onInput={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Dni" className="form-label">Dni</label>
                    <input type="Dni" className="form-control" name="Dni" onInput={(e) => {setDni(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Direccion" className="form-label">Direccion</label>
                    <input type="Direccion" className="form-control" name="Direccion" onInput={(e) => {setDireccion(e.target.value)}} />
                </div>
                    <button type="submit" className="btn btn-primary nose" onClick={()=>createOrdenCompra(120000, nombre, apellido, email, dni, direccion).then & mostrarAlertaFinalizarCompra()}><Link className='nav-link' to={`/`}>Finalizar Compra</Link></button>
            </form>                                               
        </div>
        

        </>
    );
};

export default OrdenDeCompra;




