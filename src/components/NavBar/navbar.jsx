import CartWidget from '../CartWidget/cartWidget';
import './navbar.css';


function NavBar(){

    return(
        <nav style={{width:"100%",}}>
            <p>Logo</p>
                <ul style={{display:"flex", gap:"1rem", listStyle:"none"}}>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <CartWidget cantidad={2}/>
           

        </nav>
    );
};
export default NavBar;