import { Link } from 'react-router-dom';
import './item.scss';


function Item({ id, price, title, img }){
  

  return (
    <div className="card">
            <div className="card-image-container">
                <img src={img} className="card-image" width="150" height="150" alt="product img" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div>
                    <p className="card-price">$ {price}</p>
                </div>
                <Link to={`/detalle/${id}`}>
                    <button className="card-button">Ver detalle</button>
                </Link>
                <button className="card-button" onClick={() => console.log("Vas a agregar al carrito a", title)}>Agregar al carrito</button>
            </div>
        </div>
  );
}
export default Item;