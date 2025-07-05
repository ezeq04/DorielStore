import { useAppContext } from '../../context/Context';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function Checkout() {
  const { carrito, vaciarCarrito } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    pago: 'Tarjeta'
  });

  const [error, setError] = useState('');
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.telefono || !formData.direccion) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (!validarEmail(formData.email)) {
      setError('El email no es válido.');
      return;
    }

    const items = carrito.map(item => ({
      id: item.id,
      title: item.title,
      price: Number(item.price),
      cantidad: item.cantidad,
      subtotal: Number(item.price) * item.cantidad
    }));

    const orden = {
      comprador: formData,
      items,
      total,
      fecha: Timestamp.now()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), orden);
      setCompraFinalizada(docRef.id);
      vaciarCarrito();
    } catch (err) {
      console.error('Error al generar orden:', err);
      setError('Hubo un error al procesar la compra.');
    }
  };

  if (compraFinalizada) {
    return (
      <div className="container mt-5 text-center text-white">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Gracias por tu compra, {formData.nombre}.</p>
        <p>ID de orden: <strong>{compraFinalizada}</strong></p>
        <button className="btn btn-light bg-white mt-3" onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-white">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className="row g-3 mt-3">
        <div className="col-md-6">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Dirección</label>
          <input type="text" className="form-control" name="direccion" value={formData.direccion} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Medio de pago</label>
          <select className="form-select" name="pago" value={formData.pago} onChange={handleChange}>
            <option value="Tarjeta">Tarjeta</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Efectivo">Efectivo</option>
          </select>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <hr />
        <h4>Resumen de compra</h4>
        <ul className="list-group mb-3">
          {carrito.map((item, index) => (
            <li key={index} className="list-group-item bg-dark text-white">
              {item.title} x {item.cantidad} = ${Number(item.price) * item.cantidad}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> ${total}</p>
        <button type="submit" className="btn btn-success">Finalizar compra</button>
      </form>
    </div>
  );
}

export default Checkout;