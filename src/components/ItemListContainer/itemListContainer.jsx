import './ItemListContainer.css';
import Item from '../Item/Item'
import getProducts from '../../services/mockService';
import { useState, useEffect } from 'react';


function ItemListContainer({ greetings }) {
    let [products, setProducts] = useState([])

    useEffect( () => {
    const promise = getProducts(); 
    promise.then( (result) => {
        setProducts(result);
    }).catch( (err) => { alert(err) })

    }, [])   
   
    return (
        <>
        <h2>{greetings}</h2>       
        <hr/>  
        <div className="items-container">         
        {
            products.map( elem => 
            <Item 
                key={elem.id}
                { ...elem}/>)
        }
        </div>
        </>
    );
};


export default ItemListContainer;