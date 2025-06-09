import './ItemListContainer.css';
import Item from '../Item/Item'
import getProducts from '../../services/mockService';
import { useState, useEffect } from 'react';


function ItemListContainer({ greetings }) {
    let [products, setProducts] = useState([])

    console.log("ItemList renderizado")

    useEffect( () => {
    // 1. then/catch   // 2. async/await
    const promise = getProducts(); // retorna una nueva promesa

    promise.then( (result) => {
        console.log("productos recibidos de la API")
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