import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import './item.scss';



function Item({ id, price, title, img }){
  
  const {agregarAlCarrito }= useAppContext();

  return (
    <div className="card">
            <div className="card-image-container">
                <img src={img} className="card-image" alt={title} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div>
                    <p className="card-price">$ {price}</p>
                </div>
                <Link to={`/detalle/${id}`}>
                    <button className="card-button">Ver detalle</button>
                </Link>
                <button className="card-button" onClick={() => agregarAlCarrito({id,price,title, cantidad:1 })}>Agregar al carrito</button>
            </div>
        </div>
  );
}
export default Item;