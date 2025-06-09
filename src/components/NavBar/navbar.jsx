import CartWidget from '../CartWidget/cartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar(){

    return(
        <nav>
            <p><img src="/assets/dorielicon.jpg" alt="Logo de la pagina" className="logo"/></p>
                    <ul className="lista">
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>
            <CartWidget cantidad={2} className="carrito"/>

        </nav>
    );
};
export default NavBar;