import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () =>useContext(AppContext);

export const ContextProvider=(props)=>{
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        if (carrito.some(el => el.id === producto.id)) {
            const nuevoCarrito = carrito.map(element => {
                if(element.id === producto.id){
                    return {
                        ...element,
                        cantidad: element.cantidad + producto.cantidad,
                    };
                } else {
                    return element;
                };
            });
            setCarrito(nuevoCarrito);
        }else{
            setCarrito([...carrito, producto])
        };
        
        
    }
    return(

        <AppContext.Provider value={{ carrito, agregarAlCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
}; 