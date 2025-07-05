import './ItemListContainer.css';
import Item from '../Item/Item'
import getProducts from '../../services/mockService';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';



function ItemListContainer({ greetings }) {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([false]);

    const productosCollection = collection(db, 'productos');

    const { categoria } = useParams();

    const filterProducts = (arrayProducts, category) => {
        if (category) {
            setProducts(arrayProducts.filter(el => el.category === categoria));
        } else {
            setProducts(arrayProducts);
        };
    };

    useEffect(() => {
        if (allProducts.length === 0) {

            getDocs(productosCollection)
                .then(snapshot => {
                    const arrayDeProductos = snapshot.docs.map(el => el.data());
                    setAllProducts(arrayDeProductos);
                    filterProducts(arrayDeProductos, categoria);
                    setLoading(false);
                }).catch(err => console.error(err));

            setLoading(true);

        } else {
            filterProducts(allProducts, categoria);
        }
    }, [categoria]);

    return (


        <>
            <h2>{greetings}</h2>
            <hr />
            <div className="items-container">
                {
                    loading ? <Loader />
                        :
                        products.length > 0 ?
                            products.map(elem =>
                                <Item
                                    key={elem.id}
                                    {...elem} />)
                            :
                            <p>No se encontraron productos</p>
                }
            </div>
        </>
    );
};


export default ItemListContainer;