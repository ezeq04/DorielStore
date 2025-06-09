import './ItemListContainer.css';
import Item from '../Item/Item'
import getProducts from '../../services/mockService';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';


function ItemListContainer({ greetings }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([false]);

    useEffect( () => {
        setLoading(true)
        getProducts().then((result) =>{
            setProducts(result)
            setLoading(false);
        }).catch((err)=>{alert(err)});
    }, [])   
   
    return (
        <>
        <h2>{greetings}</h2>       
        <hr/>  
        <div className="items-container">         
        {
            loading ? <Loader/>
            :
            products.length > 0?
                products.map( elem => 
                    <Item 
                         key={elem.id}
                        { ...elem}/>)
            :
            <p>No se encontraron productos</p>
        }
        </div>
        </>
    );
};


export default ItemListContainer;