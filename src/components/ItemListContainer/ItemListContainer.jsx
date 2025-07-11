import './ItemListContainer.css';
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebaseService';

function ItemListContainer({ greetings }) {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoria } = useParams();

  const filterProducts = (arrayProducts, category) => {
    if (category) {
      setProducts(arrayProducts.filter(el => el.category === category));
    } else {
      setProducts(arrayProducts);
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setAllProducts(data);
        filterProducts(data, categoria);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoria]);

  return (
    <>
      <h2>{greetings}</h2>
      <hr />
      <div className="items-container">
        {
          loading ? <Loader />
            : products.length > 0
              ? products.map(elem => (
                <Item key={elem.id} {...elem} />
              ))
              : <p>No se encontraron productos</p>
        }
      </div>
    </>
  );
}

export default ItemListContainer;