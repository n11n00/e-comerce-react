import {Link} from 'react-router-dom'
import React from 'react';
import Form from '../layouts/Form';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';
import CarWidget from '../layouts/CarWidget';
const Navbar = ({contador}) => {
    const listDropdown = ["Joggers", "Hoodies", "Remeras", "Gorras"]
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                <Link className="nav-link active" to="/"><button type="button" className="btn btn-primary">NINO APK</button></Link>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown lista={listDropdown}/>
                        </ul>
                        
                        
                        
                    </div>
                </div>
            </nav> 
        </>
    );
}

export default Navbar;
