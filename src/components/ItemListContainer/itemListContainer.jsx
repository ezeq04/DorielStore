import './itemListContainer.css';
import item from '../Item/Item';
import getProducts from '../../services/mockService';
import { useState, useEffect } from 'react';


function itemListContainer({greetings}){
    let [products, setProducts] = useState([])
    console.log("itemList Renderizado");

    useEffect(() => {
        const promise = getProducts();

        promise.then( (result) => {
            console.log("Productos recibidos de la API")
            setProducts(result);
        }).catch( (err) => { alert(err) })
    },[] )

    return(
        <>
        <h2>{greetings}</h2>
        <hr/>
        {
           products.map( elem => 
                <item
                key={elem.id}
                { ...elem}
                />)
        }
        </>    
    );
};

export default itemListContainer;