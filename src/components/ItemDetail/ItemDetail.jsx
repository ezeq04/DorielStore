import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import getProducts from '../../services/mockService';
import Loader from '../Loader/Loader';
import Contador from '../Contador/Contador';



function ItemDetail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    
    useEffect(() => {
        getProducts()
            .then(result => {
                const product = result.find(el => el.id === id);
                setProducto(product);
                setLoading(false);
            }).catch((err) => { alert(err) });
    }, []);
        
    return (
        loading ? <Loader/> :
        
        <div className="card">
            <div className="card-image-container">
                <img src={producto.img} className="card-image" width="150" height="150" alt="product img" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{producto.title}</h3>
                <p className="card-description">{producto.text}</p>
                <p className="card-description">Quedan {producto.stock} unidades en stock.</p>
                <div>
                    <p className="card-price">${producto.price}</p>
                </div>
                <Link to={'/'}>
                    <button className='card-button'>Volver al inicio</button>
                </Link>
                <Contador stock={parseInt(producto.stock)} />
                <button className="card-button">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;
