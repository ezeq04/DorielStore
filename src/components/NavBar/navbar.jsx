import CartWidget from '../CartWidget/cartWidget';
import './navbar.css';


function NavBar(){

    return(
        <nav style={{display:"flex", justifyContent:"space-around", backgroundColor:"black" }}>
            <p>Logo</p>
            <div>
                <ul style={{display:"flex", gap:"1rem", listStyle:"none"}}>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <CartWidget cantidad={2}/>
            </div>

        </nav>
    );
};
export default NavBar;