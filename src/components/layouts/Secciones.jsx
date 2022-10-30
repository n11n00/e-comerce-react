import {Link} from 'react-router-dom'
import {memo} from 'react';

const Secciones = () => {
    return (
        <>
       
        <li className="nav-item">
            <Link className="nav-link active" to="/contacto"><button className='btn btn-primary'><img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-b9d9f.appspot.com/o/Imagenes%2Fcontacto.png?alt=media&token=a5272a45-2ca1-467a-8005-af57ff2412c8" alt="" /></button></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/about"><button className='btn btn-primary'><img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-b9d9f.appspot.com/o/Imagenes%2Fabout.png?alt=media&token=aea0a6b1-a9c2-43cb-8fa9-88c966249aec" alt="" /></button></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/carrito"><button type="button" className='btn btn-primary'><img src="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-b9d9f.appspot.com/o/Imagenes%2Fcarrito.png?alt=media&token=acd7e4c9-052e-4570-b1bc-05e08e5d4ef3" alt="" /></button></Link>
        </li>
        </>
    );
}

export default memo(Secciones);
