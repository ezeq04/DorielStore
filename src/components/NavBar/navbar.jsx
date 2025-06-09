import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartWidget';
import './navbar.css';


function NavBar(){

    return(
        <nav>
            <p><img src="/assets/dorielicon.jpg" alt="Logo de la pagina" className="logo"/></p>
                    <ul className="lista">
                         <li>
                    <Link to="/">
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="/categoria/auriculares">
                        Auriculares
                    </Link>
                </li>
                <li>
                    <Link to="/categoria/relojes">
                       Relojes
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        Contacto
                    </Link>
                </li>
                    </ul>
            <CartWidget cantidad={2} className="carrito"/>

        </nav>
    );
};
export default NavBar;