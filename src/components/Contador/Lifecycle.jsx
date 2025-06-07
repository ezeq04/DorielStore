import { useState, useEffect } from "react";
import './Contador.css';

function LifeCycle(){
    const [cantidad, setCantidad] = useState(1);
    const [otroState, setOtroState] = useState(false);

    console.log("Fui renderizado");

    useEffect(() => {
        console.log("Tarea de montado del componente");
    },[]);

    useEffect(()=>{
        console.log("Tarea de update del OtroState");
    },[otroState]);

    function restarCantidad(){
        if(cantidad>1){
            setCantidad(cantidad - 1);
        };
    };

    function sumarCantidad(){
        if(cantidad<10){
            setCantidad(cantidad + 1);
        };
    };
    return(
        <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
            <button className="btn btn-secondary" onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button className="btn btn-secondary" onClick={sumarCantidad}>+</button>
            <button onClick={ () => setOtroState(true)}>Tarea compleja</button>
        </div>
    );
};

export default LifeCycle;