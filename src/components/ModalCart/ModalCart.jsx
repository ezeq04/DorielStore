import { useAppContext } from '../../context/Context';
import './ModalCart.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getProducts from '../../services/mockService';



function ModalCart() {
  const { carrito, agregarAlCarrito, eliminarDelCarrito } = useAppContext();
  const navigate = useNavigate();

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );


  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    getProducts()
      .then((all) => {
        const disponibles = all.filter(p => !carrito.some(c => c.id === p.id));

        const shuffle = disponibles.sort(() => Math.random() - 0.5);
        setRecomendaciones(shuffle.slice(0, 2));
      })
      .catch(console.error);
  }, [carrito]);

  return (
    <div className="modal fade" id="modalCarrito" tabIndex="-1" aria-labelledby="modalCarritoLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content bg-dark text-white">

          <div className="modal-body">
            {carrito.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              carrito.map((prod) => (
                <div key={prod.id} className="mb-3 border-bottom pb-2">
                  <h6>{prod.title}</h6>
                  <p>Cantidad: {prod.cantidad}</p>
                  <p>Precio unitario: ${prod.price}</p>
                  <p>Subtotal: ${Number(prod.price) * prod.cantidad}</p>

                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => eliminarDelCarrito(prod.id)}
                  >
                    Eliminar
                  </button>
                </div>

              ))
            )}

            {recomendaciones.length > 0 && (
              <div className="mt-4">
                <h5 className="text-white text-center">También podría interesarte:</h5>
                <div className="recommendation-container">

                  {recomendaciones.map((prod) => (
                    <div key={prod.id} className="card">
                      <div className="card-image-container">
                        <img src={prod.img} alt={prod.title} className="card-image" />
                      </div>
                      <div className="card-content">
                        <h6 className="card-title">{prod.title}</h6>
                        <p className="card-price">${prod.price}</p>
                        <div className="card-footer">
                          <button
                            className="card-button"
                            onClick={() =>
                              agregarAlCarrito({
                                id: prod.id,
                                title: prod.title,
                                price: prod.price,
                                cantidad: 1,
                              })
                            }
                          >
                            Agregar al carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>


          <div className="modal-footer d-flex justify-content-between align-items-center">
            <strong>Total: ${total}</strong>
            <button type="button" className="btn btn-primary btn-custom-border " data-bs-dismiss="modal">Cerrar</button>
            <button className="btn btn-primary btn-custom-border " onClick={() => navigate('/checkout')}>Ir al checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;